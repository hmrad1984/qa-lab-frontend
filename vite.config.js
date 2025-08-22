/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov', 'html'],
      reportsDirectory: './coverage',
      exclude: [
        'node_modules/**',
        'coverage/**',
        'dist/**',
        '**/*.config.js',
        '**/*.config.ts',
        'postcss.config.js',
        'tailwind.config.js',
        'vite.config.js',
        'src/main.jsx',
        'src/App.jsx',
        'src/routes/routes.jsx',
        'src/features/bugReports/data/**',
        'src/features/bugReports/services.js',
        'src/features/bugReports/types.js'
      ],
      include: [
        'src/features/bugReports/components/**/*.jsx',
        'src/features/bugReports/pages/**/*.jsx'
      ]
    },
  },
})
