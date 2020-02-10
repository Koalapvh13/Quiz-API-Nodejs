const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')
const app = express()

require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(routes)

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology:true})
const db = mongoose.connection
db.on('error', (error)=>console.error(error))
db.on('open', ()=>console.log('database connected'))

app.listen(process.env.PORT | 3333, ()=>{
    console.log("The API is running...");
    
})