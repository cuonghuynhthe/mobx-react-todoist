import { createServer } from 'http'
import * as next from 'next'
import routes from './routes'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = routes.getRequestHandler(app)

app.prepare()
.then(() => {
  createServer(handler)
  .listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
