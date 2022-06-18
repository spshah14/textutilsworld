
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
  const [Mode, setMode] = useState('light');

  const toogleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#171f59'
      showAlert("Dark Mode is Enable", "success")
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
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
      }, 1500);
    } else {
      setTimeout(() => {
        setAlert(null);
      }, 2300);
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
