const https = require('node:https');

https.get('https://dummyjson.com/products', (res) => {

    let responseBody = "";

    res.on('data', (chunk) => {
        responseBody += chunk;
    });

    res.on('end', () => {
        console.log(JSON.parse(responseBody))
    });
}).on('error', (e) => {
    console.error(e);
});
