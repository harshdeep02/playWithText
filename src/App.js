// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textinp from './components/Textinp';
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
function App() {

  const[mode, setMode] = useState('light');

  const toggledark = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#48427f';
      showAlert("Dark mode has been enabled", "sucess")
    }
      else{
        setMode('light');
        document.body.style.backgroundColor = '#fff';
        showAlert("Light mode has been enabled", "sucess")

    }
  }
  const[alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  
  return (
   <>
   {/* <Router> */}
<Navbar tittle = "TextUtills"  menu = "menu" mode = {mode} toggledark = {toggledark}/>
<Alert alert = {alert}/>
{/* <Navbar/> */}
{/* <Routes> */}
  {/* use exect always */}
          {/* <Route exect path="/about"
            element ={<About  mode = {mode}/>}>
          </Route> */}
          {/* <Route exect path="/"
           element = */}
         {/* {<Textinp heading = "Enter the text to analyze below" mode = {mode} showAlert ={showAlert}/>}> */}
         <Textinp heading = "Enter the text to analyze below" mode = {mode} showAlert ={showAlert}/>
           {/* </Route> */}
 {/* </Routes> 
 </Router>  */}
  </>
  );
  }

export default App;
