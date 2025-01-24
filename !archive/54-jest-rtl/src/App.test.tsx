import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('App Component', () => {
  // Перевіряємо відображення статичних елементів
  describe('Static Content', () => {
    test('renders Vite + React heading', () => {
      render(<App />)
      const linkElement = screen.getByText(/Vite \+ React/i)
      expect(linkElement).toBeInTheDocument()
    })

    test('renders instruction to click logos', () => {
      render(<App />)
      const instructionElement = screen.getByText(/Click on the Vite and React logos to learn more/i)
      expect(instructionElement).toBeInTheDocument()
    })
  })

  // Перевіряємо інтерактивні елементи
  describe('Interactive Elements', () => {
    test('counter increments when button is clicked', () => {
      // Рендеримо компонент
      render(<App />)

      // Знаходимо кнопку за роллю (accessibility best practice)
      const button = screen.getByRole('button')

      // Перевіряємо початковий стан
      expect(button).toHaveTextContent('count is 0')

      // Симулюємо клік
      fireEvent.click(button)

      // Перевіряємо, що стан оновився
      expect(button).toHaveTextContent('count is 1')
    })
  })
})
