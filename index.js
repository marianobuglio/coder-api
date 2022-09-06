const express = require('express')
const router = require('./router/router.js')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.use('/api' , router)

const conn = app.listen(8080,()=>{
    console.log(`Servidor corriendo en el puerto ${conn.address().port}`)
})

app.on("error",(error)=>{
    console.log(`Error ${error}`)
})