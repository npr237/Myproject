const cors = require('cors');
//const mongoose=require ('mongoose');
const dotenv=require('dotenv');
const express =require ('express');
const app=express();
const port=5000
require('./db/conn');
app.use(express.json());
require('dotenv').config();

app.use(cors());
//const products_routes=require('./router/product');

//app.use('/apii/products',products_routes);
//we link our router file
app.use(require('./router/auth'));


//const Myapi=require('./model/schema');

/*const DB='mongodb+srv://nupur:npr@237BGS@cluster0.1eyeru4.mongodb.net/mongo?retryWrites=true&w=majority'

mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    
    console.log('connection successful');
}).catch((err)=>console.log('no cnnection'));*/

/*const middleware=(req,res,next)=>{
  console.log('Hello my Middleware');
  next();
  
}*/

app.get('/',(req,res)=>{
    res.send('Hello world');
})
app.get('/login',(req,res)=>{
    res.send("This is Login page");
})

/*app.get('/about',middleware,(req,res)=>{
    res.send(" This is about page");
})*/

app.get('/contact',(req,res)=>{
    res.send("This is contact page");
})






app.listen(port,()=>{
    console.log(`server running at port No:${port}`);
})
