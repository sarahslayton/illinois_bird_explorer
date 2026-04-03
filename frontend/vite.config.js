import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

function serveTestPhotos() {
  return {
    name: 'serve-test-photos',
    configureServer(server) {
      server.middlewares.use('/species_photos', (req, res, next) => {
        const fileName = req.url.replace(/^\//, '')
        const filePath = path.resolve(__dirname, '../test_photos', fileName)
        if (fs.existsSync(filePath)) {
          const ext = path.extname(filePath).toLowerCase()
          const mime = ext === '.png' ? 'image/png' : 'image/jpeg'
          res.setHeader('Content-Type', mime)
          fs.createReadStream(filePath).pipe(res)
        } else {
          next()
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), serveTestPhotos()],
})
