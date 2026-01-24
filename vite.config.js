import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@components': path.resolve(__dirname, './src/components'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@handlers': path.resolve(__dirname, './src/handlers'),
            '@projects': path.resolve(__dirname, "./src/components/projects")
        },
    },
})