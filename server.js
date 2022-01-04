const express = require("express");
const app = express();
const port = 80;

const path = require('path');

app.listen(port, () => console.log('Listening on port ' + port));
app.use(express.static(path.join(__dirname, "Frontend", "public")));

app.get('/user', (req, res) => {
    return res.send({name: "Guest"})
})

app.get('*', (req, res) => {
    return res.sendFile(path.resolve(__dirname, "Frontend", "public", "index.html"))
})


