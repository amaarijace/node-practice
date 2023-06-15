const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
    const options = {
        root: path.join(__dirname, "public/404"),
    };

    const fileName = "index.html";

    res.status(404).sendFile(fileName, options);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
