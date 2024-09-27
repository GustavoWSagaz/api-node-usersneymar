
import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify();
const databasePostgres = new DatabasePostgres;

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
})

// ENDPOINTS (CRUD):

// CREATE
server.post('/neymar', async (request, reply) => {
    const body = request.body;
    await databasePostgres.createNeymar(body);
    return reply.status(201).send();
})

// READE
server.get('/neymar', async () => {
    const neymar = await databasePostgres.listNeymar();
    return neymar;
});

// UPDATE
server.put('/neymar/:id', async (request, reply) => {
    const neymarID = request.params.id;
    const body = request.body;
    await databasePostgres.updateNeymar(neymarID, body);

    return reply.status(204).send();
})

// DELETE
server.delete('/neymar/:id', async (request, reply) => {
    const neymarID = request.params.id;
    await databasePostgres.deleteNeymar(neymarID);

    return reply.status(204).send();
})


server.listen({
    port: 3333
});
