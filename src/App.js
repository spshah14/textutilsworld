
import React, { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [Mode, setMode] = useState('dark');

  const toogleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      // // document.body.style.backgroundColor = '#171f59'
      document.body.style.background = 'linear-gradient(to right, #000046, #1cb5e0)';
      showAlert("Dark Mode is Enable", "success")
    } else {
      setMode('light');
      document.body.style.background = 'linear-gradient(to right, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)';
      showAlert("Light Mode is Enable", "success")
    }
  }
  const [alert, setAlert] = useState(null)

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type
    })
    if (type === 'success') {
      setTimeout(() => {
        setAlert(null);
      }, 1000);
    } else {
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    }

  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" about="About Us" mode={Mode} toogleMode={toogleMode} />
        <Alert alert={alert} />
        <div className="container my-4">
          {/* <TextForm heading="Enter the text to analyze" mode={Mode} showAlert={showAlert} /> */}
          {/* <About /> */}
          <Routes>
            <Route path="/" element={<TextForm heading="Enter the text to analyze" mode={Mode} showAlert={showAlert} />} />
            <Route path="/About" element={<About mode={Mode} />} />
          </Routes>
        </div>
      </BrowserRouter>

    </>
  );
}

export default App;
