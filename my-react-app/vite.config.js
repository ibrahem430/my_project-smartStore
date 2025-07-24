import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // allows access from network (e.g. your phone)
    port: 4000       // change this to whatever port you want
  }
})
