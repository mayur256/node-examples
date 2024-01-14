const express = require("express");

// Initialising express app
const app = express();
const PORT = process.env.PORT || 3000;

// Demo routes
app.get("/", (req, res) => {
    res.json("Hello, World!\n");
});

// listening to app
app.listen(PORT, () => {
    console.log(`App listening on port :: ${PORT}`);
});
