import { Elysia, t } from 'elysia'

const user = new Elysia({ prefix: '/user' })
    .get('/', () => ({ user: { user: 'customize elysia api for multiple routes' } }))
    .post('/create', ({ body }) => console.log(body), {
        body: t.Object({
            name: t.String()
        })
    });

const task = new Elysia()
    .get('/task', () => ({ task: { name: 'customize elysia api for multiple routes' } }));

const app = new Elysia({ prefix: '/api' })
    .use(user)
    .use(task);

export const GET = app.fetch;
export const POST = app.fetch;

export type App = typeof app;
