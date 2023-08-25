const express = require('express')
const route = express.Router()
const conexion = require('../database/conexion')



/*servidor api*/


/*tabla clientes*/
route.post('/cliente/add', async(req,res)=>{
    const {nombres,telefonos,nit} = req.body
    if(!nombres || !telefonos || !nit){
        res.send('error')
    }else{
        var id = Math.floor(Math.random() * 999999)
        Number(id)
        await conexion.query("insert into clientes values('"+id+"','"+nombres+"',"+telefonos+","+nit+");")
        const cliente = await conexion.query("select*from clientes")
        mensaje = 'dato almacenado'
        res.render('clientes-datos',{mensaje,cliente})
    }
})

route.get('/edd-cliente/:id', async(req,res)=>{
    const { id } = req.params
    const clientes = await conexion.query("select*from clientes where id_cliente='"+id+"'")
    res.render('update-cliente', {clientes: clientes[0]})
})

route.post('/cliente/update/:id', async(req,res)=>{
    const {id} = req.params
    const { nombre, telefono, nit } = req.body
    if(!nombre || !telefono || !nit){
        res.send('error')
    }else{
        await conexion.query("update clientes set nombre_cliente='"+nombre+"', telefono_cliente='"+telefono+"',nit='"+nit+"' where id_cliente = '"+id+"'")
        const cliente = await conexion.query("select*from clientes")
        mensaje = 'dato editado'
        res.render('clientes-datos',{cliente,mensaje})
    }
})

route.get('/cliente/delete/:id', async(req,res)=>{
    const {id} = req.params
    await conexion.query("delete from clientes where id_cliente = '"+id+"'")
    const cliente = await conexion.query("select*from clientes")
    mensaje = 'dato eliminado'
    res.render('clientes-datos',{cliente,mensaje})
})
/*fin tabla clientes*/



/*inicio tabla proveedores*/
route.post('/add/prov', async(req,res)=>{
    const { nombre, telefono } = req.body
    if(!nombre || !telefono){
        res.send('error')
    }else{
        var id = Math.floor(Math.random() * 999999)
        Number(id)
        await conexion.query("insert into proveedores values('"+id+"','"+nombre+"','"+telefono+"')")
        const proveedor = await conexion.query("select*from proveedores")
        mensaje = 'dato almacenado'
        res.render('proveedores',{proveedor,mensaje})
    }
})

route.get('/edd/prov/:id', async(req,res)=>{
    const { id } = req.params
    const provedor = await conexion.query("select*from proveedores where id_provedores='"+id+"'")
    res.render('edd-prov', {provedor: provedor[0]})
})

route.post('/update/provedor/:id',async(req,res)=>{
    const { id } = req.params
    const { nombre, telefono } = req.body
    if(!nombre || !telefono){
        res.send('error')
    }else{
        await conexion.query("update proveedores set nombre_provedor='"+nombre+"', telefono_provedor='"+telefono+"' where id_provedores='"+id+"'")
        const proveedor = await conexion.query("select*from proveedores")
        mensaje = 'dato editado'
        res.render('proveedores',{proveedor,mensaje})
    }
})

route.get('/proveedor/delete/:id', async(req,res)=>{
    const {id} = req.params
    await conexion.query("delete from proveedores where id_provedores='"+id+"'")
    const proveedor = await conexion.query("select*from proveedores")
    mensaje = 'dato eliminado'
    res.render('proveedores',{mensaje,proveedor})
})
/*fin tabla proveedores*/



/*inicio tabla producto*/
route.post('/add/producto', async(req,res)=>{
    const {nombre} = req.body
    if(!nombre){
        res.send('error')
    }else{
        var id = Math.floor(Math.random() * 999999)
        Number(id)
        await conexion.query("insert into productos values('"+id+"','"+nombre+"');")
        const productos = await conexion.query("select*from productos")
        mensaje = 'dato almacenado'
        res.render('producto-home',{productos,mensaje})
    }
})

route.get('/edd/product/:id', async(req,res)=>{
    const {id} = req.params
    const producto = await conexion.query("select*from productos where id_producto='"+id+"'")
    res.render('update-producto',{producto: producto[0]})
})

route.post('/update/producto/:id', async(req,res)=>{
    const { id } = req.params
    const { nombre} = req.body
    if(!nombre){
        res.send('error')
    }else{
        await conexion.query("update productos set nombre_producto='"+nombre+"' where id_producto='"+id+"'")
        const productos = await conexion.query("select*from productos")
        mensaje = 'dato editado'
        res.render('producto-home',{productos,mensaje})
    }
})

route.get('/delete/product/:id', async(req,res)=>{
    const { id } = req.params
    await conexion.query("delete from productos where id_producto='"+id+"'")
    const productos = await conexion.query("select*from productos")
    mensaje = 'dato eliminado'
    res.render('producto-home',{productos,mensaje})
})




//entradas
route.post('/add/entrada', async(req,res)=>{
    const {idpro,precio,cantidad,idprov} = req.body
    if(!idpro || !precio || !cantidad || !idprov){
        res.send('error')
    }else{
        var id = Math.floor(Math.random() * 999999)
        Number(id)
        Number(precio)
        Number(cantidad)
        const resultado = precio*cantidad
        await conexion.query("insert into entradas values('"+id+"','"+idpro+"',"+precio+","+cantidad+",'"+idprov+"',"+resultado+")")
        const entradas = await conexion.query("select*from entradas")
        mensaje = 'dato almacenado'
        res.render('entradas',{entradas,mensaje})
    }
})

route.get('/delete/entrada/:id', async(req,res)=>{
    const { id } = req.params
    await conexion.query("delete from entradas where id_entrada='"+id+"'")
    const entradas = await conexion.query("select*from entradas")
    mensaje = 'dato eliminado'
    res.render('entradas',{entradas,mensaje})
})

module.exports = route
