
const bcrypt=require('bcryptjs');
require('../db/conn');
const Myapi=require('../model/schema');






const registerroute=async(req,res)=>{

    

        const{name,email,phone,work,password,cpassword}=req.body;
        if(!name|| !email|| ! phone || !work || !password || !cpassword){
          return res.status(422).json({error:"plz fill all the credentials"});
         }
        
        try {
        
         const userExist=await Myapi.findOne({email:email})
         if(userExist){
          return res.status(422).json({error:"Email already exist"});
        }else if(password != cpassword){
          return res.status(422).json({error:"password are not matching"});
        }else{
          const myApi= new Myapi({name,email,phone,work,password,cpassword});
        
        
           
         await myApi.save();
        
        
        
        res.status(201).json({message:"user registered successfully"});
        
        
        }
        
        
        
        
        
        
        
        
        
        
        }catch(err){
          console.log(err);
        
        }
        
        
        
        
        
    
        
    
};



const loginroute=async(req,res)=>{

    

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
        
        
        
    
};


//export{registerroute,loginroute}
module.exports={registerroute,loginroute};