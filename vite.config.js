import { defineConfig } from 'vite'
import { loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { Resend } from 'resend'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const resendApiKey = env.RESEND_API_KEY || process.env.RESEND_API_KEY

  return {
    plugins: [
      react(),
      {
        name: 'dev-api-send-email',
        configureServer(server) {
          server.middlewares.use('/api/send-email', async (req, res, next) => {
            if (req.method !== 'POST') {
              res.statusCode = 405
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: 'Method Not Allowed' }))
              return
            }

            if (!resendApiKey) {
              res.statusCode = 500
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: 'Missing RESEND_API_KEY env var' }))
              return
            }

            let body = ''
            req.on('data', (chunk) => {
              body += chunk
            })

            req.on('end', async () => {
              try {
                const parsed = body ? JSON.parse(body) : {}
                const { name, email, message } = parsed || {}

                if (!name || !email || !message) {
                  res.statusCode = 400
                  res.setHeader('Content-Type', 'application/json')
                  res.end(JSON.stringify({ error: 'Missing required fields' }))
                  return
                }

                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if (!emailRegex.test(email)) {
                  res.statusCode = 400
                  res.setHeader('Content-Type', 'application/json')
                  res.end(JSON.stringify({ error: 'Invalid email format' }))
                  return
                }

                const resend = new Resend(resendApiKey)

                await resend.emails.send({
                  from: 'Portafolio <onboarding@resend.dev>',
                  to: 'amanda1758@gmail.com',
                  subject: 'New email from portafolio',
                  html: `<h1>New email from portafolio</h1><p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
                })

                res.statusCode = 200
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ message: 'Email sent successfully' }))
              } catch (error) {
                console.error('Send error:', error?.response?.body || error?.message || error)
                res.statusCode = 500
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ error: 'Error sending email' }))
              }
            })
          })
        },
      },
    ],
  }
})
