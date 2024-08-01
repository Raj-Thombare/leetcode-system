import express from "express";
import { createClient } from "redis";

const app = express();
const client = createClient();

app.use(express.json());

app.post('/submissions', async (req, res) => {
    const { userId, problemId, language, code } = req.body;
    try {
        await client.lPush('submissions', JSON.stringify({ userId, problemId, language, code }));

        res.json({
            msg: "submission successful!"
        })
    } catch (error) {
        console.log('Redis error', error)
        res.status(500).send('Failed to store submissions')
    }
})

async function startServer() {
    try {
        await client.connect();

        console.log("Connected to Redis");

        app.listen(3000, () => {
            console.log('server is running on port 3000')
        })
    } catch (error) {
        console.log('Failed to connect to Redis', error);
    }
}

startServer();