import {useState} from 'react';
import '../styles/calculator.css'

function Calculator() {
    const btnText = [1,2,3,"+", 4,5,6,"-", 7,8,9,"*", "cls",0,"=","/"];
    
    let [inputText, setinputText] = useState('');
    
    const setInput = btText => 
        (btText == "cls") ? setinputText(' ') : 
        ((btText == "=") ? setinputText(eval(inputText)) : 
        setinputText(inputText.toString().concat(btText)))
    
    return (
        <section className='calculator'>
            <input type='text' onChange={e => setinputText(inputText)} value={inputText}></input>
            <section>
                {btnText.map(e => <button key={e} onClick={(e) => setInput(e.target.innerText.trim())}>{e}</button>)}
            </section>
        </section>
    );
  }
  
  export default Calculator;