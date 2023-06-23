import React, { useState }  from 'react'

export default function Textinp(props) {
    const [Text, settext] = useState("");
    const handleOnChange = (e)=> {
        // console.log("on change")
        settext(e.target.value)
    }
    const handleUpperCase = ()=>{
        const newText = Text.toUpperCase()
        settext(newText)
        props.showAlert("Change to UpperCase", "sucess")
    }

    const handleloCase = ()=>{
        const newText = Text.toLowerCase()
        settext(newText)
        props.showAlert("Change to LowerCase", "sucess")
    }

    const cleartext = ()=>{
        const newText =("")
        settext(newText)
        props.showAlert("Clear Text", "sucess")
    }

    const replace = ()=>{
        const existWord = prompt("enter word you want to replace?")
        if(existWord){
          const newWord = prompt("enter replace word?")
          settext(Text.replaceAll(existWord, newWord))

        }
        else{

        }
    }
    
    const backspace = ()=>{
      const newback = Text.slice(0, -1)
      settext(newback)
    }
    const handleCopy = ()=>{
      let text = document.getElementById("myBox")
      text.select();
      navigator.clipboard.writeText(text.value)
      props.showAlert("Copy to clipboard", "sucess")
    }
    const handlespace = ()=>{
      let text = Text.split(/[ ]+/)
      settext(text.join(" "))
      props.showAlert("Remove extra space", "sucess")
    }
  return (
    <>
    <div className='container'>
    <h1 className={`my-3 text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
<div className="mb-3">
  {/* <span class="input-group-text">With textarea</span> */}
  <textarea className='form-control' rows="8" style ={{backgroundColor:props.mode==='light'?'#fff':'#607d8b', color:props.mode==='light'?'#000000':'#fff'}} value={Text} id="myBox" onChange={handleOnChange} aria-label="With textarea"></textarea>
</div>

<button className="btn btn-primary mx-2" onClick={handleUpperCase}>To Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleloCase}>To Lowercase</button>
<button className="btn btn-primary mx-2" onClick={cleartext}>Clear</button>
<button className="btn btn-primary mx-2" onClick={replace}>replace word</button>
<button className="btn btn-primary mx-2" onClick={backspace}>backspace</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>copy</button>
<button className="btn btn-primary mx-2" onClick={handlespace}>Remove extra space</button>

</div>
  <div className="container">
    <h2 className="my-3" style={{color:props.mode==='light'?'#000000':'#fff'}}>Your text summary</h2>
    <p style={{color:props.mode==='light'?'#000000':'#fff'}}>{Text.split(" ").length-1} words and {Text.length} characters</p>
    <p style={{color:props.mode==='light'?'#000000':'#fff'}}>{0.008 * Text.split(" ").length} minutes read</p>
    <h2 style={{color:props.mode==='light'?'#000000':'#fff'}}>Preview</h2>
    <p style={{color:props.mode==='light'?'#000000':'#fff'}}>{Text}</p>

  </div>
</>
  )
}
