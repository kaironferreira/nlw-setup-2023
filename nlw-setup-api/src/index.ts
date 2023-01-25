import Fastify from 'fastify';
import cors from '@fastify/cors';
import { appRoutes } from './routes';

const app = Fastify();

app.register(cors);
app.register(appRoutes);

app.listen({ port: 3000 }).then(() => console.log(`🚀 ~ Server is running on http://localhost:3000`));