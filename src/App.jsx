import './App.css'
import { service , message , telephone } from './assets'
import Nav from "./componenets/Nav"
import Header from "./componenets/Header"
import React from 'react'

function App() {
  const [formData , setFormData] = React.useState(
      {
          userName: "",
          email: "",
          textarea: ""
      }
  )

  function handleCahnge(event) {
    const {name , value} = event.target
    setFormData(prevFromData => ({
        ...prevFromData,
        [name]: value
    }))
  }

  console.log(formData)

  return (
    <>
      <Nav />
      <Header
       handleEvent={handleCahnge} 
       messageIcon={message} 
       telephoneIcon={telephone} 
       heroImg={service} 
       />
    </>
  )
}

export default App
