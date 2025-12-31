import { useState, useEffect } from 'react'
import './App.css'

function App() {
const [message , setMessage] = useState("")
  const fetchData = ()=>{
    fetch("http://72.60.111.9:4000/api/message").then((res)=>res.json()).then((data)=>setMessage(data.message)).catch((error)=>console.log(error))
  }
useEffect(()=>{
  fetchData()
},[])
  return (
    <>
     <h1>My name is Afzaal</h1>
     <p>{message}</p>
    </>
  )
}

export default App
