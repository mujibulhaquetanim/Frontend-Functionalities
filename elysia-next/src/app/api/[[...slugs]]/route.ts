import { Elysia, t } from 'elysia'

const app = new Elysia({ prefix: '/api' })
    .get('/user', {user: {name: 'Hello Mujib, Welcome to ElysiaJS with Next.js 16'}})
    .post('/', ({ body }) => body, {
        body: t.Object({
            name: t.String()
        })
    })

export type app = typeof app
export const GET = app.fetch 
export const POST = app.fetch 