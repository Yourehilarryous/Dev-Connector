const express = require ("express")
const connectDB = require("./config/db")

const app = express()

//Connect database
connectDB()

// Init middleware
app.use(express.json({extended: false}))


app.get ("/", (req, res) => {
    res.send("API Running")
})

//Define routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/posts'))


const PORT = process.env.PORT || 5000
// Grabbing the port from Heroku when deployed and use 5000 when used locally

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))