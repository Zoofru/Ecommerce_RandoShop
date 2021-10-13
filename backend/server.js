const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const userRoutes = require('./routes/userroutes')

app.use(express.json())
app.use(require('cors')())

app.use('/user', userRoutes)

app.listen(PORT, () => {
    console.log(`port running on ${PORT}`)
})