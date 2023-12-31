// HTTP module to create a server
import http, { IncomingMessage, Server, ServerResponse } from "node:http";

const PORT = 8001;
const HOST = "127.0.0.1";

// create a local server to receive data from
const server: Server = http.createServer((request: IncomingMessage, response: ServerResponse): void => {
    const { url, method } = request;
    
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('okay');
});

server.listen(PORT, HOST, (): void => {
    console.log(`Server listening at ${HOST}:${PORT}`);
});
