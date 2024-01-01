import express, { Application, Request, Response } from 'express';
import { createServer, Server } from 'node:http';
import path from 'node:path';

const PORT = 8001;
const HOST = "127.0.0.1";

// Initialise the app
const expressApp: Application = express();
expressApp.use(express.static('public'));

// Define routes
expressApp.get("/", (req, res: Response) => {
    res.sendFile(path.resolve("./src/assets/index.html"));
});
expressApp.get("/download-private-attachment", (req: Request, res: Response) => {
    try {
        if (req.headers['x-token']) {
            return res.download("./src/assets/private.pdf");
        }
        res.status(400).json({ message: 'Token is missing' });
    } catch (e: any) {
        console.log(`Error::${e}`)
    }
})

// Create Server
const appServer: Server = createServer(expressApp);

// Start listening on the server
appServer.listen(PORT, HOST, () => {
    console.log(`Server listening at ${HOST}:${PORT}`);
});
