const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const fs = require("fs");

app.get('/listUsers', function (req, res) {
    fs.readFile( __dirname + "/data/" + "users.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
