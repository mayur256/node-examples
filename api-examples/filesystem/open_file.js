const { open } = require("node:fs/promises");

(async (path) => {
    let fileHandle = null;
    try {
        fileHandle = await open(path, "r+");

        // read file contents
        // console.log(await fileHandle.read()) // reads into a Buffer
        // readFile method reads the file into a string when appropriate
        // encoding is specified. Otherwise reads the file content into a Buffer
        const fileData = await fileHandle.readFile('utf8');
        console.log(fileData)
    } catch (err) {
        // handle errors
        console.error(err)
    } finally {
        await fileHandle?.close();
    }
})('file.txt')