import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter  ,Routes,Route} from 'react-router-dom';
import Register from './components/Register';
import About from './components/About';
import Login from './components/Login';
const App =() =>{
  return(
   <>
  
    <BrowserRouter>

      <Navbar/>
      <Routes>
      <Route exact path='/' element={<Register/>}/>
      <Route eaxact path='/login' element={<Login/>}/>
     
     <Route exact path='/About' element={<About/>}/>
     
     
     
    
     
     
     
    
     </Routes>
     </BrowserRouter>
     


    
   
   
   </>
  )
}
export default App