/**
 * Using promise based APIs in this particular example to delete a file.
 * The unlink function is POSIX counterpart to remove a file.
 * You may also use its synchronous varient i.e unlinkSync
 */
const { unlink } = require("node:fs/promises");

(async (path) => {
    try {
        await unlink(path);
        console.log('File removed successfully')
    } catch (err) {
        console.error(err);
    }
})('file.txt')