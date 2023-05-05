import React,{useState,useEffect} from 'react';


function About(){
  
  const[data,setData] = useState([])


  const apiGet =()=>{
      fetch("http://localhost:5000/getall")
      .then((response)=> response.json())
      .then((data)=>{
        console.log(data);
        setData(data.data);
      })
  }
useEffect(()=>{
  apiGet();
},[])

  return(
    <div>
      

      {/*<button onClick={apiGet}>Fetch Data</button>*/}
      <br/>
    {/* <pre> {JSON.stringify(data,null,2)}</pre>*/}

    <table>
      <tr>
        <th>Name</th>
        <th>Sex</th>
        <th>Mobile</th>
        <th>Address</th>
        <th>Govt ID</th>
        <th>Guardian Details</th>
        <th>Nationality</th>
        
      </tr>
      
        {data.map((item)=>
          <tr>
            <td>{item.name}</td>
            <td>{item.sex}</td>
            <td>{item.phone}</td>
            <td>{item.address}</td>
            <td>{item.id}</td>
            <td>{item.guardian}</td>
            <td>{item.nationality}</td>
            
          
          
          
          
          </tr>

          
          
         
          )}
      
    </table>
    </div>
  )
}export default About