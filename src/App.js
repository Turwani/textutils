import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
import { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode ('dark')
      document.body.style.backgroundColor = 'black';
      showAlert("Dark modde has been enabled","success")
    }
    else{
      setMode ('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light modde has been enabled","success")
    }
  }

  return (
   <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /> 
      <Alert alert={alert} />
      <div className = "container my-3">
      <TextForm showAlert={showAlert} heading = "Enter text to analyze" mode={mode}  />
      {/* <About /> */}
      </div>
   </>
  );
}

export default App;
