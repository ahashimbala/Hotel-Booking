import express from "express"
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import clerkWebhooks from "./controllers/clerkWebHooks.js";

connectDB()

const app = express()
app.use(cors()) // Enable Cross-Origin Resource Sharing


// Middleware
app.use(express.json())

// API to listen to Clerk webhooks
app.use('/api/clerk', clerkWebhooks);

app.get('/', (req, res) => res.send("API is working"))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))