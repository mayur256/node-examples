const { open } = require("node:fs/promises");

(async (path) => {
    let fileHandle = null;
    const strData = "String data";
    const buff = Buffer.from('tést', 'latin1');
    
    try {
        fileHandle = await open(path, "w+");

        await fileHandle.writeFile(buff);

        console.log("File written successfully!")
    } catch (err) {
        console.error(err);
    } finally {
        await fileHandle?.close();
    }
})('file.txt')