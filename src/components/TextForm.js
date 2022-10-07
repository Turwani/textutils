import React, {useState} from 'react'


export default function TextForm(props) {
    const  handleUpClick = () => {
            let newText = text.toUpperCase();
            setText(newText);  
            props.showAlert("Converted to UpperCase!","success");
    }
    const  handleLoClick = () => {
            let newText = text.toLowerCase();
            setText(newText);  
            props.showAlert("Converted to LowerCase!","success");
        }
        const  handleClClick = () => {
            let newText = "";
            setText(newText);  
            props.showAlert("Text Cleared!","success");
        }
        const  handleCopy = () => {
            let text = document.getElementById("myBox");
            text.select();
            navigator.clipboard.writeText(text.value);  
            props.showAlert("Text Copied!","success");
        }
        const  handleOnChange = (event) => {
            setText(event.target.value)
        }
        const  handleExtraSpaces = () => {
            let  newText = text.split(/[ ]+/);
            setText(newText.join(" "))
            props.showAlert("Extra spaces removed!","success");
    }

    const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#030a34'}}>
            <h1>{props.heading} </h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" value= {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#030a34':'white', color: props.mode==='dark'?'white':'#030a34'}} rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-3' onClick={handleUpClick}>Convert To UpperCase </button>
        <button className='btn btn-primary mx-3' onClick={handleLoClick}>Convert To LowerCase </button>
        <button className='btn btn-primary mx-3' onClick={handleClClick}>Cleart Text </button>
        <button className='btn btn-primary mx-3' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary mx-3' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div> 
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'#030a34'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{text.split(" ").length*0.008} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the text area to preview"}</p>
    </div>
    </>
  )
}
