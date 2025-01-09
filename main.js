const express = require('express')
const app = express();
const path = require('path')
const port = 3000
const { MongoClient } = require('mongodb')

const uri = "mongodb://localhost:27017/products";
const client = new MongoClient(uri);

client.connect().then(() => {
    console.log("Connected to MongoDB!");
}).catch((err) => console.log("Connection failed", err));


app.get("/hello", (req, res) => {
    res.sendFile(path.join(__dirname, 'hello.html'));
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});