import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'
import type { UserConfigExport as VitestConfigExport } from 'vitest/config'
import { configDefaults } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,jsx,ts,tsx}'],
    exclude: [...configDefaults.exclude]
  }
} as UserConfig & VitestConfigExport)
