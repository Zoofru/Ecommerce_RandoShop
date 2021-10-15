const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const userRoutes = require('./routes/userroutes')
const itemRoutes = require('./routes/itemroutes')

app.use(express.json())
app.use(require('cors')())

app.use('/user', userRoutes)
app.use('/items', itemRoutes)

app.listen(PORT, () => {
    console.log(`port running on ${PORT}`)
})