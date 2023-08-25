const express = require('express')
const route = express.Router()
const conexion = require('../database/conexion')


route.get('/', async(req,res)=>{
    const clientes = await conexion.query("SELECT * FROM clientes")
    const productos = await conexion.query("select*from productos")
    const proveedores = await conexion.query("select*from proveedores")
    res.render('home',{clientes,productos,proveedores})
})

//cliente
route.get('/clientes', async(req,res)=>{
    const cliente = await conexion.query("SELECT * FROM clientes")
    mensaje = ''
    res.render('clientes-datos',{cliente,mensaje})
})
route.get('/add-cliente',(req,res)=>{
    res.render('cliente')
})




//producto
route.get('/productos', async(req,res)=>{
    const productos = await conexion.query("select*from productos")
    mensaje = ''
    res.render('producto-home',{productos,mensaje})
})

route.get('/add-producto',(req,res)=>{
    res.render('producto')
})



//provedor
route.get('/proveedores', async(req,res)=>{
    const proveedor = await conexion.query("select*from proveedores")
    mensaje=''
    res.render('proveedores',{proveedor,mensaje})
})
route.get('/add-proveedor',(req,res)=>{
    res.render('add-prov')
})


//entradas
route.get('/entradas', async(req,res)=>{
    const entradas = await conexion.query("select*from entradas")
    mensaje=''
    res.render('entradas',{entradas,mensaje})
})

route.get('/add-entrada', async(req,res)=>{
    const productos = await conexion.query("select*from productos")
    const proveedores = await conexion.query("select*from proveedores")
    res.render('add-entrada',{productos,proveedores})
})

module.exports = route