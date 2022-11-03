const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;

// middle wire
app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server Test Running');
});

app.listen(port, () => {
    console.log(`Listening port ${port}`);
});

/* 
Mongodb:
User: anik
password: U@.98H9jivtMKAC
*/
const uri = "mongodb+srv://anik:DNRHtqDUTiPdMKbt@cluster0.7wt8nwb.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });
async function run() {
    try {
        // make database 'PracticeMongodbCrud' and set of collection 'users'
        const userCollection = client.db('PracticeMongodbCrud').collection('users');

        // read client data start
        app.post('/users', async (req, res) => {
            // Collect information from client
            const user = req.body;
            console.log(user);
            // insert one information in database
            const result = await userCollection.insertOne(user);
            // send response in client side
            res.send(result);
        })
        // read client data end
    } catch (error) {

    }
}
run().catch(err => console.log(err));