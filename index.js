const express = require('express')
const server = express();
const userRouter= require("./routes/userRouter");
const categoriesRouter=require("./routes/categoriesRouter");
const productRouter=require("./routes/productRouter");
// middleware
server.use(express.json());
server.use('/api/v1/users',userRouter)
server.use('/api/v1/products',productRouter)
server.use('/api/v1/categories',categoriesRouter)

server.get('/',(req,res)=>{
res.send('Hello world')})

server.listen(1339,()=>{
    console.log(`Server http://localhost:1339`)
})



