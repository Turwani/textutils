import React, {useState} from 'react'


export default function TextForm(props) {
    const  handleUpClick = () => {
            let newText = text.toUpperCase();
            setText(newText);  
    }
    const  handleLoClick = () => {
            let newText = text.toLowerCase();
            setText(newText);  
    }
    const  handleClClick = () => {
            let newText = "";
            setText(newText);  
    }
    const  handleOnChange = (event) => {
            setText(event.target.value)
    }
    const [text, setText] = useState('Enter Text Here');
  return (
    <>
    <div className='container'>
            <h1>{props.heading} </h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" value= {text} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-3' onClick={handleUpClick}>Convert To UpperCase </button>
        <button className='btn btn-primary mx-3' onClick={handleLoClick}>Convert To LowerCase </button>
        <button className='btn btn-primary mx-3' onClick={handleClClick}>Cleart Text </button>
    </div> 
    <div className='container my-3'>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{text.split(" ").length*0.008} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
