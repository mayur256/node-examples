const { writeFile } = require("node:fs/promises");

try {
    const bufferData = new Uint8Array(Buffer.from('Abort Write example'));
    const controller = new AbortController();
    
    const promise = writeFile('file.txt', bufferData, { signal: controller.signal }) 

    controller.abort();
    // Aborted the file writing operation
    // changes will never be flushed an an AbortError will be thrown
} catch (err) {
    console.log(err)
}