const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const userRoutes = require('./routes/userroutes')
const itemRoutes = require('./routes/itemroutes')
const cartRoutes = require('./routes/cartroutes')

app.use(express.json())
app.use(require('cors')())

app.use('/user', userRoutes)
app.use('/items', itemRoutes)
app.use('/cart', cartRoutes)

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})