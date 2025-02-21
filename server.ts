import * as http from 'http';

import { getListEpisodes } from './controllers/podcasts_constrollers';

const server = http.createServer( async (request: http.IncomingMessage, response: http.ServerResponse) => {
    if (request.method === '/podcasts') {
        await getListEpisodes(request, response);
    }
})

const port = process .env.PORT;

server.listen(port, () =>  {
    console.log(`Servidor rodando na porta ${port}`)
})