import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        // console.log("button fired!");
        let newText = text.toUpperCase();
        setText(newText);
        if (text !== "") {
            props.showAlert("Text is converted into uppercase...!", "success")
        } else {
            props.showAlert("Please enter the text into text box to convert into uppercase...!", "danger")
        }
    }
    const handleLoClick = () => {
        // console.log("button fired!");
        let newText = text.toLowerCase();
        setText(newText);
        if (text !== "") {
            props.showAlert("Text is converted into lowercase...!", "success")
        } else {
            props.showAlert("Please enter the text into text box to convert into lowercase...!", "danger")
        }
    }
    const handleCcClick = () => {
        // console.log("button fired!");
        let newText1 = text.toLowerCase().split(" ").map(word => { return word.charAt(0).toUpperCase() + word.slice(1); }).join(" ");
        let newText2 = newText1.split("\n").map(word => { return word.charAt(0).toUpperCase() + word.slice(1); }).join("\n");
        setText(newText2);
        // console.log(newText1);
        // console.log(newText2);
        if (text !== "") {
            props.showAlert("Text is converted into capitalCase...!", "success")
        } else {
            props.showAlert("Please enter the text into text box to convert into capitalcase...!", "danger")
        }
    }
    const handleClearClick = () => {
        // console.log("button fired!");
        let newText = '';
        setText(newText);
        if (text !== "") {
            props.showAlert("Text is clear...!", "success")
        } else {
            props.showAlert("Please enter the text into text box...!", "danger")
        }
    }
    const handleOnChange = (element) => {
        // console.log("button fired!");
        setText(element.target.value);
    }
    const handleCopy = () => {
        var text = document.getElementById("exampleFormControlTextarea1");
        // console.log(text);
        text.select();
        // navigator.clipboard.writeText(text.value);
        document.execCommand("copy")
        document.getSelection().removeAllRanges();
        if (text !== " ") {
            props.showAlert("Text is copied!", "success")
        } else {
            props.showAlert("Please enter the text into text box for copy the text...!", "danger")
        }
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        if (text.includes("  ")) {
            props.showAlert("Extra spaces is removed...!", "success")
        }
        else if (text !== "") {
            props.showAlert("There is no extra space in your content...!", "warning")
        }
        else {
            props.showAlert("Please enter the text into text box...!", "danger")
        }
    }
    // setText("Hello");
    return (
        <>
            <div className="mb-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
                <button className="btn btn-primary mx-1 my-2" disabled={text.length === 0} onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 my-2" disabled={text.length === 0} onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1 my-2" disabled={text.length === 0} onClick={handleCcClick}>Convert to CaptialCase</button>
                <button className="btn btn-primary mx-1 my-2" disabled={text.length === 0} onClick={handleClearClick}>Clear text</button>
                <button className="btn btn-primary mx-1 my-2" disabled={text.length === 0} onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1 my-2" disabled={text.length === 0} onClick={handleExtraSpaces}>Remove extra spaces</button>

                <div className="container my-3">
                    <h2>Your text summary</h2>
                    {/* <p>{text === "" ? text.split(" ").length - 1 : text.split(" ").length} Words and {text.length} Characters</p> */}
                    <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} Words and {text.length} Characters</p>
                    <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes to read</p>

                    <h2>Preview</h2>
                    <p>{text.length === 0 ? 'Nothing to preview!' : text}</p>
                </div>
            </div>
        </>
    )
}
