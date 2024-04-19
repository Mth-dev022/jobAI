const express = require('express')
const app = express()

// const userRoutes = require('./routes/users.js')
 const authRoutes = require('./routesAuth.js')

const cors = require('cors')
const cookieParser = require('cookie-parser')

const dotenv = require("dotenv")
dotenv.config()

app.use(cors({
    origin: 'https://job-ai-yf7m.vercel.app/',
    methods: ["GET", "POST"],
    credentials: true,
}))

app.use(express.json())
app.use(cookieParser())
app.use('/api/auth', authRoutes)

app.listen(process.env.PORT || 8800, () => {
    console.log(`Server is connected on port ${process.env.PORT}`)   
})
