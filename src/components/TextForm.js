import React, {useState} from 'react'


export default function TextForm(props) {
    const  handleUpClick = () => {
            let newText = text.toLocaleUpperCase();
            setText(newText);  
    }
    const  handleOnChange = (event) => {
            setText(event.target.value)
    }
    const [text, setText] = useState('Enter Text Here');
  return (
    <div>
        <div className="mb-3">
            <h1>{props.heading} </h1>
            <textarea className="form-control" id="myBox" value= {text} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert To UpperCase </button>
    </div>
  )
}
