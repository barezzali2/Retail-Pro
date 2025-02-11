const express = require('express');
const app = express();
const port = 3002;
const { MongoClient } = require('mongodb');

app.use(express.json());

const cors = require('cors');
app.use(cors());

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

let db;
let collection;

// Connect to MongoDB once at booting the process
async function connectToDb() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");
        db = client.db("products");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}


// Add Dairy product
app.post("/addDairyProduct", async (req, res) => {

    try {
        const { name, year, country} = req.body;

        if (!name || !year || !country) {
            return res.status(400).send("All fields are required.");
        }

        collection = db.collection("dairy");
        const newProduct = { name, year, country };
        const result = await collection.insertOne(newProduct);

        console.log("Insert result:", result);
        res.status(201).send("Product added successfully!");
    } catch(error) {
        console.error("Error adding product:", error);
        res.status(500).send("Internal Server Error");
    }
});


// Add drink product
app.post("/addDrinkProduct", async (req, res) => {
    try {
        const { name, year, country } = req.body;
        
        if (!name || !year || !country) {
            return res.status(400).send("All fields are required.");
        }
        
        collection = db.collection("drinks");
        const newProduct = { name, year, country };
        const result = await collection.insertOne(newProduct);

        console.log("Insert result:", result);
        res.status(201).send("Product added successfully!");
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).send("Internal Server Error");
    }
});


// Add fruit product
app.post("/addFruitProduct", async (req, res) => {
    try {
        const { name, year, country } = req.body;
        
        if (!name || !year || !country) {
            return res.status(400).send("All fields are required.");
        }
        
        collection = db.collection("fruits");
        const newProduct = { name, year, country };
        const result = await collection.insertOne(newProduct);

        console.log("Insert result:", result);
        res.status(201).send("Product added successfully!");
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).send("Internal Server Error");
    }
});


// Add snack product
app.post("/addSnackProduct", async (req, res) => {
    try {
        const { name, year, country } = req.body;
        
        if (!name || !year || !country) {
            return res.status(400).send("All fields are required.");
        }
        
        collection = db.collection("snacks");
        const newProduct = { name, year, country };
        const result = await collection.insertOne(newProduct);

        console.log("Insert result:", result);
        res.status(201).send("Product added successfully!");
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).send("Internal Server Error");
    }
});

// Start server and connect to DB
connectToDb();

app.listen(port, () => {
    console.log("App is listening on port 3002");
});
