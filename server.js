const express = require ("express")
const app = express()

app.get ("/", (req, res) => {
    res.send("API Running")
})

const PORT = process.env.PORT || 5000
// Grabbing the port from Heroku when deployed and use 5000 when used locally

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))