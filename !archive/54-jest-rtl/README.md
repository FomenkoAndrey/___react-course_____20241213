# React-додаток через Vite + TypeScript + React Testing Library

Для створення React застосунку з підтримкою TypeScript та включенням тестів за допомогою React Testing Library,
використовуючи Vite, слідуйте цим крокам:

1. **Створення нового проекту:**

   Використайте Vite для створення нового проекту, обравши шаблон для React з підтримкою TypeScript:

   ```bash
   npm create vite@latest my-react-ts-app -- --template react-ts
   cd my-react-ts-app
   ```

   Замініть `my-react-ts-app` на назву вашого проекту.

2. **Встановлення залежностей:**

   Встановіть всі необхідні залежності для розробки та тестування:

   ```bash
   npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jest jest-environment-jsdom ts-jest ts-node @types/jest @types/testing-library__jest-dom identity-obj-proxy
   ```

3. **Налаштування конфігурації TypeScript**

   Створіть три основні файли конфігурації TypeScript:

   `tsconfig.json`:
   ```json
   {
     "files": [],
     "references": [
       {
         "path": "./tsconfig.app.json"
       },
       {
         "path": "./tsconfig.node.json"
       },
       {
         "path": "./tsconfig.test.json"
       }
     ],
     "compilerOptions": {
       "esModuleInterop": true,
       "types": [
         "jest",
         "@testing-library/jest-dom"
       ]
     }
   }
   ```

   `tsconfig.test.json`:
   ```json
   {
     "extends": "./tsconfig.app.json",
     "compilerOptions": {
       "jsx": "react-jsx",
       "types": [
         "jest",
         "@testing-library/jest-dom",
         "@testing-library/react",
         "@testing-library/user-event"
       ],
       "module": "ESNext",
       "moduleResolution": "bundler",
       "allowImportingTsExtensions": false,
       "esModuleInterop": true,
       "isolatedModules": true
     },
     "include": [
       "src/**/*.test.ts",
       "src/**/*.test.tsx",
       "src/**/*.spec.ts",
       "src/**/*.spec.tsx",
       "src/**/*.ts",
       "src/**/*.tsx",
       "jest.setup.ts"
     ]
   }
   ```

4. **Налаштування Jest**

   Створіть файл `jest.config.ts`:
   ```typescript
   import type { Config } from '@jest/types'

   const config: Config.InitialOptions = {
     preset: 'ts-jest',
     testEnvironment: 'jsdom',
     setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
     transform: {
       '^.+\\.(ts|tsx)$': [
         'ts-jest',
         {
           tsconfig: '<rootDir>/tsconfig.test.json',
           useESM: true
         }
       ]
     },
     moduleNameMapper: {
       '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
       '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js'
     },
     extensionsToTreatAsEsm: ['.ts', '.tsx']
   }

   export default config
   ```

5. **Додаткові конфігураційні файли**

   Створіть файл `jest.setup.ts`:
   ```typescript
   import '@testing-library/jest-dom'
   ```

   Створіть файл `__mocks__/fileMock.js`:
   ```javascript
   export default 'test-file-stub'
   ```

6. **Налаштування package.json**

   Додайте скрипти для тестування до вашого `package.json`:
   ```json
   {
     "scripts": {
       "test": "node --no-deprecation --experimental-vm-modules node_modules/jest/bin/jest.js",
       "test:watch": "node --no-deprecation --experimental-vm-modules node_modules/jest/bin/jest.js --watch"
     }
   }
   ```

7. **Написання тестів**

   Приклад тесту для компонента App (`App.test.tsx`):
   ```typescript
   import { render, screen, fireEvent } from '@testing-library/react'
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
         render(<App />)
         const button = screen.getByRole('button')
         expect(button).toHaveTextContent('count is 0')
         
         fireEvent.click(button)
         expect(button).toHaveTextContent('count is 1')
       })
     })
   })
   ```

8. **Запуск тестів**

   Для запуску тестів використовуйте команду:
   ```bash
   npm test
   ```

   Для запуску тестів у режимі спостереження:
   ```bash
   npm run test:watch
   ```

Ці налаштування забезпечують повноцінне тестове середовище для React застосунку з TypeScript, включаючи:

- Підтримку модулів ES
- Обробку статичних файлів (CSS, зображення тощо)
- Правильну конфігурацію TypeScript для тестів
- Інтеграцію з Jest та React Testing Library
- Структуроване написання тестів з використанням describe блоків
