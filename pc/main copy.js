const express = require('express')
const app = express();
const path = require('path')
const port = 3002
const { MongoClient } = require('mongodb')

app.use(express.json());

const uri = "mongodb://localhost:27017/products";
const client = new MongoClient(uri);

// client.connect().then(() => {
//     console.log("Connected to MongoDB!");

//     const db = client.db("products");
//     // db.collection("drinks").insertOne({name: "Sprite", year: 2025, country: "UK"})
//     // Promise Chaining --> for fetching/getting data from DB
//     db.collection("drinks").findOne({country: "UK"})
//         .then((res) => console.log(res.name))
//         .catch((err) => console.error(err))
//         .then(() => console.log("A document is inserted successfully!"))

// }).catch((err) => console.log("Connection failed", err));



app.post("/addProduct", async (req, res) => {

    try {
        const {name, year, country} = req.body;
        
        if (!name || !year || !country) {
            return res.status(400).send("All fields are required.");
        }
        
        await client.connect();
        console.log("Connected to Mongo DB!")
        const db = client.db("products");
        const collection = db.collection("drinks");
        
        const newProduct = { name, year, country };
        await collection.insertOne(newProduct);
        
        res.status(201).send("Product added successfully!");
        
    } catch (error) {
        console.error("Error adding product:", error);
    } finally{
        await client.close();
    }
});

// app.get("/hello", (req, res) => {
//     res.sendFile(path.join(__dirname, 'hello.html'));
// })

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
