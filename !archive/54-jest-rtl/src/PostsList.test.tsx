// Імпортуємо необхідні функції для тестування React компонентів
import { render, screen, waitFor } from '@testing-library/react'
import PostsList from './PostsList'
import { jest } from '@jest/globals'

// Визначаємо інтерфейс для об'єкту поста
interface Post {
  id: number
  title: string
  body: string
  userId: number
}

// Відключаємо виведення помилок консолі перед усіма тестами
beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {})
})

// Відновлюємо стандартну поведінку консолі після всіх тестів
afterAll(() => {
  jest.restoreAllMocks()
})

describe('PostsList component', () => {
  // Оголошуємо змінну для мок-функції fetch
  let fetchMock: jest.Mock

  beforeEach(() => {
    // Створюємо нову мок-функцію
    fetchMock = jest.fn()
    // Налаштовуємо мок для повернення успішної відповіді з тестовими даними
    fetchMock.mockImplementation((): Promise<Response> =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([
          {
            id: 1,
            title: 'Test Post 1',
            body: 'Test Body 1',
            userId: 1
          },
          {
            id: 2,
            title: 'Test Post 2',
            body: 'Test Body 2',
            userId: 1
          }
        ] as Post[])
      } as Response)
    )

    // Замінюємо глобальну функцію fetch на нашу мок-функцію
    global.fetch = fetchMock as unknown as typeof global.fetch
    // Вмикаємо фейкові таймери для контролю часу
    jest.useFakeTimers()
  })

  // Очищаємо всі моки та таймери після кожного тесту
  afterEach(() => {
    jest.clearAllMocks()
    jest.clearAllTimers()
  })

  // Тест перевіряє успішне завантаження та відображення постів
  test('loads and displays posts', async () => {
    render(<PostsList />)

    // Чекаємо поки fetch буде викликано
    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledTimes(1)
    })

    // Перевіряємо відображення заголовків постів
    const postTitles = await screen.findAllByRole('heading', { name: /Test Post [1-2]/i })
    expect(postTitles).toHaveLength(2)

    // Перевіряємо відображення тексту постів
    const postBodies = await screen.findAllByText(/Test Body [1-2]/i)
    expect(postBodies).toHaveLength(2)
  })

  // Тест перевіряє відображення повідомлення про помилку
  test('displays error message on failed fetch', async () => {
    // Налаштовуємо мок на помилку
    fetchMock.mockImplementation(() => Promise.reject())
    render(<PostsList />)

    // Перевіряємо відображення повідомлення про помилку
    const errorMessage = await screen.findByText(/Failed to fetch posts/i)
    expect(errorMessage).toBeInTheDocument()
  })

  // Тест перевіряє відображення індикатора завантаження
  test('displays loading message while fetching posts', async () => {
    // Налаштовуємо мок із затримкою в 1 секунду
    fetchMock.mockImplementation(() =>
      new Promise((resolve) =>
        setTimeout(
          () =>
            resolve({
              ok: true,
              json: () => Promise.resolve([])
            } as Response),
          1000
        )
      )
    )

    render(<PostsList />)
    // Перевіряємо наявність повідомлення про завантаження
    expect(screen.getByText(/Loading posts\.\.\./i)).toBeInTheDocument()

    // Просуваємо час на 1.1 секунду вперед
    jest.advanceTimersByTime(1100)

    // Перевіряємо що повідомлення про завантаження зникло
    await waitFor(() => {
      expect(screen.queryByText(/Loading posts\.\.\./i)).toBeNull()
    }, { timeout: 2000 })
  })
})
