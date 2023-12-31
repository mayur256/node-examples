import express, { Application, Response } from 'express';
import { createServer, Server } from 'node:http';
import path from 'node:path';

const PORT = 8001;
const HOST = "127.0.0.1";

// Initialise the app
const expressApp: Application = express();

// Define routes
expressApp.get("/", (req, res: Response) => {
    res.sendFile(path.resolve("./src/index.html"));
})

// Create Server
const appServer: Server = createServer(expressApp);

// Start listening on the server
appServer.listen(PORT, HOST, () => {
    console.log(`Server listening at ${HOST}:${PORT}`);
});
