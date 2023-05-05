import React,{useEffect, useState} from 'react';
import axios from "axios"
import { useNavigate ,Link} from 'react-router-dom'


function Register (){

const [name,setName] =useState("")
const [dob,setDob] =useState("")
const [sex,setSex] =useState("")
const [phone,setPhone] =useState("")
const [id,setId] = useState("")
const [guardian,setGuardian] =useState("")
const [email,setEmail] =useState("")
const [emergency,setEmergency] =useState("")
const [address,setAddress] =useState("")
const [state,setState] =useState("")
const [city,setCity] =useState("")
const [country,setCountry] =useState("")
const [pincode,setPincode] =useState("")
const [work,setWork] =useState("")
const [religion,setReligion] =useState("")
const [martialstatus,setMartialstatus] =useState("")
const [bloodgroup,setBloodgroup] =useState("")
const [nationality,setNationality] =useState("")
const [password,setPassword] =useState("")
const [cpassword,setCpassword] =useState("")


async function submit(e){
    e.preventDefault();

try{

    await axios.post("http://localhost:5000/register",{
        name,dob,sex,phone,id,guardian,email,emergency,address,state,city,country,pincode,work,religion,martialstatus,bloodgroup,nationality,password,cpassword
    })
   

}catch(e){

 console.log(e);
}


}





return(

    <div className="register">
        <h1>Register</h1>

     <form action="POST">
        <input type="text" onChange={(e)=>{setName(e.target.value)}}  placeholder="Name" name="" id=""/>
        <input type="text" onChange={(e)=>{setDob(e.target.value)}}  placeholder="Age" name="" id=""/>
        <input type="text" onChange={(e)=>{setSex(e.target.value)}}  placeholder="Sex" name="" id=""/>
        <input type="text" onChange={(e)=>{setPhone(e.target.value)}}  placeholder="Phone" name="" id=""/>
        <input type="text" onChange={(e)=>{setId(e.target.value)}}  placeholder="ID" name="" id=""/>
        <input type="text" onChange={(e)=>{setGuardian(e.target.value)}}  placeholder="Guardian name" name="" id=""/>
        <input type="text" onChange={(e)=>{setEmail(e.target.value)}}  placeholder="Email" name="" id=""/>
        <input type="text" onChange={(e)=>{setEmergency(e.target.value)}}  placeholder="Emergency phone no." name="" id=""/>
        <input type="text" onChange={(e)=>{setAddress(e.target.value)}}  placeholder="Address" name="" id=""/>
        <input type="text" onChange={(e)=>{setState(e.target.value)}}  placeholder="State" name="" id=""/>
        <input type="text" onChange={(e)=>{setCity(e.target.value)}}  placeholder="City" name="" id=""/>
        <input type="text" onChange={(e)=>{setCountry(e.target.value)}}  placeholder="Country" name="" id=""/>
        <input type="text" onChange={(e)=>{setPincode(e.target.value)}}  placeholder="Pincode" name="" id=""/>
        <input type="text" onChange={(e)=>{setWork(e.target.value)}}  placeholder="Occupation" name="" id=""/>
        <input type="text" onChange={(e)=>{setReligion(e.target.value)}}  placeholder="Religion" name="" id=""/>
        <input type="text" onChange={(e)=>{setMartialstatus(e.target.value)}}  placeholder="MartialStatus" name="" id=""/>
        <input type="text" onChange={(e)=>{setBloodgroup(e.target.value)}}  placeholder="Bloodgroup" name="" id=""/>
        <input type="text" onChange={(e)=>{setNationality(e.target.value)}}  placeholder="Nationality" name="" id=""/>
        <input type="text" onChange={(e)=>{setPassword(e.target.value)}}  placeholder="Password" name="" id=""/>
        <input type="text" onChange={(e)=>{setCpassword(e.target.value)}}  placeholder="Confirm Password" name="" id=""/>
        
     
     
        <input type="submit" onClick={submit}/>
     
     </form>


     <br/>
     <p>OR</p>
     <br/>

     <Link to="/login">Login </Link>


    </div>

)



}

export default Register