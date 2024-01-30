const express = require("express");
const path = require("node:path");

// Initialising express app
const app = express();
const PORT = process.env.PORT || 5000;

// Demo routes
app.get("/", (req, res) => {
    try {
        res.sendFile(path.join(__dirname, 'index.html'));
    } catch {
        res.send("Fallback Data...")
    }
})
app.get("/products", async (req, res) => {
    let results = [];
    try {
        const responseJson = await fetch('https://fakestoreapi.com/products');
        results = await responseJson.json();
    } catch {
        // handle error
    }
    res.json(results);
});

app.listen(PORT, () => {
    console.log(`App listening on port :: ${PORT}`);
});