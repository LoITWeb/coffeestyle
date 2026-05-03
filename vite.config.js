import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	// gh-pages, хостинг и локально '/'
	base: '/coffeestyle/',                                                                          
	plugins: [react()],
})
