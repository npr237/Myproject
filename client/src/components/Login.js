import React from 'react'
import {NavLink} from 'react-router-dom';
import {useState} from 'react';

const Login = () => {

const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

const loginUser= async (e)=>{
    e.preventDefault();
   const res = await fetch('/login',{
    method : "POST",
    headers :{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  })
      const data = res.json();
      if(res.status===400 || !data){
        window.alert("INVALID CREDENTIALS");
      }else {
        window.alert("LOGIN SUCCESSFULL");
      }
   
}



  return (
   <>
   <section className='signin'>
        <div className='container mt-5'>
          <div className='signin-content'>

          <div className='signin-image'>
                <figure>
                  
                </figure>
          
                <NavLink to='/signup' className='signup-image-link'>Create Your Account</NavLink>
        
              </div>

            <div classNmae='signin-form'>
              <h2 className='form-title'>Login</h2>
              <form method='POST' className='register-form' id='register-form'>
               
                <div className='form-group'>
                <label htmlfor='email'>
                   <i class="zmdi zmdi-email"></i>
                   </label>
                   <input type ='email' name='email' id='email' autoComplete='off' value={email}
                   onChange={(e)=>setEmail(e.target.value)} placeholder='Your Email'/>
                </div>
               

                <div className='form-group'>
                <label htmlfor='password'>
                   <i class="zmdi zmdi-lock"></i>
                   </label>
                  <input type ='password' name='password' id='password'   autoComplete='off' value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder='Your Password'/>
               </div>

              
               <div className='form-group form-button'>
                <input type='submit' name='signin' id='signin' className='form-submit' value='Log in' onClick={loginUser}/>
               </div>
              </form>
              
              </div>
          </div>
        </div>
      </section>
   </>
  )
}

export default Login
