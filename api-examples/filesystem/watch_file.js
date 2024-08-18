/**
 * The following example watch this file for 10 seconds
 * It lists out the event occured on the file during that period
 */

const { watch } = require('node:fs/promises');

const ac = new AbortController();
const { signal } = ac;
setTimeout(() => ac.abort(), 10000);

(async () => {
  try {
    const watcher = watch(__filename, { signal });
    for await (const event of watcher)
      console.log(event)
  } catch (err) {
    console.log(err);
    if (err.name === 'AbortError')
      return;
    throw err;
  }
})();