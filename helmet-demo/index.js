const express = require("express");
const helmet = require("helmet");

// Initialising express app
const app = express();
const PORT = process.env.PORT || 3000;

// Helmet middleware
app.use(helmet({
    strictTransportSecurity: {
        maxAge: 31536000,
    }
}));

// Demo routes
app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
});

// listening to app
app.listen(PORT, () => {
    console.log(`App listening on port :: ${PORT}`);
});
