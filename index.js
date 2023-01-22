require('dotenv').config()
const express = require('express')
const dbconnection = require('./config/db')
const cors = require('cors')
const userRoute = require('./routes/users.route')
const authentication = require('./middlewares/authentication.middleware')
const productRoute = require('./routes/products.route')
const cartRoute = require('./routes/cart.route')
const { allusers } = require('./controllers/users.controller')
const UserModel = require('./models/user.model')
const app = express()
// middlewares
app.use(cors())
app.use(express.json())
// routers
app.get('/',(req,res)=>res.send('homeroute Of backend'))
app.use('/allusers',async(req,res)=>{
    
    try {
        const users = await UserModel.find()
        if (users) res.json(users)
        else{
            res.send('No users found')
        }
    } catch (error) {
        res.json({error : error.message })
    }

})
app.use('/users',userRoute)
app.use('/products',productRoute)
// protected routes
app.use(authentication)
app.use('/cart',cartRoute)

// default route

app.listen(process.env.port,()=>{
    try {
        dbconnection;
        console.log("sever runnign at port " +  process.env.port);
    } catch (error) {
        console.log({err : error.message})
    }
})