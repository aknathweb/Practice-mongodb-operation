const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const app = express();
const cors = require('cors');
const { query } = require('express');

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

        // send data to client use start
        app.get('/users', async (req, res) => {
            const query = {};
            // collect data from database base on query
            const cursor = userCollection.find(query);
            // convert database data to array
            const users = await cursor.toArray();
            // send response to use from client side
            res.send(users);
        })
        // send data to client use end

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

        // delete data start
        app.delete('/users/:id', async (req, res) => {
            // params data check; which have send from client as a request
            const id = req.params.id;
            // match with params id with database _id: Object(id)
            const query = { _id: ObjectId(id) }
            // one delete perform from database
            const result = await userCollection.deleteOne(query);
            // send response in client side
            res.send(result)
        })
        // delete data end
    } catch (error) {

    }
}
run().catch(err => console.log(err));