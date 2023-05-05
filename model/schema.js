const mongoose =require('mongoose');
const bcrypt=require('bcryptjs');

const schema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    dob:{
        type:Number,
        required:true
    },
    sex:{
         type:String,
         required:true
    },
    phone:{
         type:Number,
         required:true
    },

    id:{
        type:Number,
        required:true
    },
   
    guardian:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    emergency:{
        type:Number,
        required:true
    },
    address:{
       type:String,
       required:true 
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    country:{
         type:String,
         required:true
     },
     pincode:{
        type:String,
        required:true
     },
     work:{
        type:String,
        required:true
     },

     religion:{
        type:String,
        required:true
     },
     martialstatus:{
        type:String,
        required:true
     },
     bloodgroup:{
        type:String,
        required:true
     },
     nationality:{
        type:String,
        required:true
     },

    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    }

})



//we are hashing password
schema.pre('save',async function(next){
    console.log("hi from inside");
    if(this.isModified('password')){

        this.password=await bcrypt.hash(this.password,12);
        this.cpassword= await bcrypt.hash(this.cpassword,12);
    }
    next();

})

const Myapi=mongoose.model('MYAPI',schema);

module.exports=Myapi;