const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const app = express()
const servidor = require('./src/controller/controller')
const routers = require('./src/routers/routers')

dotenv.config({path: '.env'})
const port = process.env.PORT || 8080

/*conexion db*/
require('./src/database/conexion')

//archivos
app.use('/css',express.static(path.resolve(__dirname, 'public/css')))
app.use('/js',express.static(path.resolve(__dirname, 'public/js')))
app.use('/img',express.static(path.resolve(__dirname, 'public/img')))

//midellwares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//set view engine
app.set("view engine","ejs")


//routers
app.use(servidor)
app.use(routers)

app.listen(port,()=>{
    console.log(`servidor activo en http://localhost:${port}/`)
})