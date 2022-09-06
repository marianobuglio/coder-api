const express = require('express')
const router = express.Router()
let productos = [{title:"Producto 1",price:10,id:0}]
router.get("/",(req,res)=>{
    if(productos.length <= 0 ){
        return res.send({error:"No hay productos"})
    }
    res.send(productos)
})
router.get("/:id",(req,res)=>{
    const id = req.params.id
    if(productos.length <= 0 ){
        return res.send({error:"No hay productos"})
    }
    const existe = productos.map(p => p.id).indexOf(parseInt(id))
    if(existe == -1){
       return res.send("No existe producto con ese id")
    }

    res.send(productos[existe])

})
router.put("/:id",(req,res)=>{
    const id = req.params.id
    const producto = req.body
    if(productos.length <= 0 ){
        return res.send({error:"No hay productos"})
    }
    const existe = productos.map(p => p.id).indexOf(parseInt(id))
    if(existe == -1){
       return res.send({error:"producto no encontrado"})
    }
    Object.assign(productos[existe], producto);
    res.send("Producto actualizado correctamente")

})
router.post("/",(req,res)=>{
   let newProducto = req.body
   newProducto.id =  productos.length > 0 ? productos[productos.length - 1 ].id + 1 : 0
   productos.push(newProducto)
   res.send(newProducto)
})
router.delete("/:id",(req,res)=>{
    const id = req.params.id
    if(productos.length <= 0 ){
        return res.send({error:"No hay productos"})
    }
    const existe = productos.map(p => p.id).indexOf(parseInt(id))
    if(existe == -1){
       return res.send("No existe producto con ese id")
    }
    productos.splice(existe,1)
    res.send("Producto eliminado correctamente")

})



module.exports = router