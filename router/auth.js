const cors = require ('cors')
const express=require ('express');
const router=express.Router();
const bcrypt=require('bcryptjs');
require('../db/conn');


router.get('/',(req,res)=>{
  res.send("This is home page from router");
})

const Myapi=require('../model/schema');

//using promises

/*router.post('/register',(req,res)=>{

  const {name,email,phone,work,password,cpassword}=req.body;
   if(!name|| !email|| ! phone || !work || !password || !cpassword){
    return res.status(422).json({error:"plz fill all the credentials"});
   }


Myapi.findOne({email:email})
.then((userExist)=>{
  if(userExist){
    return res.status(422).json({error:"Email already exist"});
  }

const myApi= new Myapi({name,email,phone,work,password,cpassword});
 
myApi.save().then(()=>{
  res.status(201).json({message:"user registered successfully"});
}).catch((err)=>res.status(500).json({error:"Failed to register"}));


}).catch(err=>{console.log(err)});





 
});*/


router.post('/register',async(req,res)=>{

const{name,dob,sex,phone,id,guardian,email,emergency,address,state,city,country,pincode,work,religion,martialstatus,bloodgroup,nationality,password,cpassword}=req.body;
if(!name|| !dob|| ! sex || !phone || !id || !guardian || !email || !emergency || !address || !state || !city || !country || !pincode || !work || !religion || !martialstatus || !bloodgroup || !nationality || !password || !cpassword){
  return res.status(422).json({error:"plz fill all the credentials"});
 }

try {

 const userExist=await Myapi.findOne({email:email})
 if(userExist){
  return res.status(422).json({error:"Email already exist"});
}else if(password != cpassword){
  return res.status(422).json({error:"password are not matching"});
}else{
  const myApi= new Myapi({name,dob,sex,phone,id,guardian,email,emergency,address,state,city,country,pincode,work,religion,martialstatus,bloodgroup,nationality,password,cpassword});


   
 await myApi.save();



res.status(201).json({message:"user registered successfully"});


}










}catch(err){
  console.log(err);

}





})



//about ka page



router.get("/getall",async(req,res)=>{
  try{
    
const alluser= await Myapi.find({});
res.send({status:"ok",data:alluser});


  }catch(error){
    console.log(error)
  }
})






//login route

router.post('/login',async(req,res)=>{

try{
  const{email,password}=req.body;
  if(!email || !password){
    return res.status(400).json({error:'plz fill the credentials'});
  }

const userlogin= await Myapi.findOne({email:email});

//console.log(userlogin);

if(userlogin){


  const isMatch = await bcrypt.compare(password,userlogin.password)



if(!isMatch){
 
res.status(400).json({error:'invalid credentials'});

}else{
res.json({message :" login sucessfull"})
}

}else{


  res.status(400).json({error:'invalid credentials'});


}



}catch (err){
  console.log(err);
}


});


module.exports=router;