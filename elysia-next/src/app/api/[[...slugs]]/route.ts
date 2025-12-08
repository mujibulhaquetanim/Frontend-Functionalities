import { Elysia, t } from 'elysia'

const user = new Elysia()
    .get('/user', () => ({ user: { name: 'Hello Mujib, Welcome to ElysiaJS with Next.js 16' } }))
    .post('/', ({ body }) => body, {
        body: t.Object({
            name: t.String()
        })
    });

const task = new Elysia()
    .get('/task', () => ({ task: { task: 'customize elysia api for multiple routes' } }));

const app = new Elysia({ prefix: '/api' })
    .use(user)
    .use(task);

export const GET = app.fetch;
export const POST = app.fetch;

export type App = typeof app;
