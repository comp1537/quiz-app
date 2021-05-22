import {useState} from 'react';
import '../styles/questionAndAnswer.css'

function QuestionAndAnswer({questAndAns, nextQuestion}) {
    
    let [input,setInput] = useState('');
    let [displayResult, setDisplayResult] = useState({class:'white', text:''});

    const checkAnswer = () => {
        let isCorrect = (input == questAndAns.answer);
        
        if (isCorrect) {
            setDisplayResult({class:'green', text:'Hooray, that was right !!'});
        } else {
            setDisplayResult({class:'red', text:'Ooops, better luck next time ..'});
        }

        setTimeout(() => {
            nextQuestion(isCorrect);
            setInput('');
            setDisplayResult({bgColor:'white', text:''});
        }, 2500)
    }


    return (
        <section className='questionAndAnswer'>
            <div className='question'>{questAndAns.question}</div>
            <br/>
            <input placeholder='your answer....' type='number' value={input} onChange={e => setInput(e.target.value)}></input>
            <button onClick={checkAnswer}>Submit</button><br/><br/>
            <div className={displayResult.class}>{displayResult.text}</div>
        </section>
    );
}

export default QuestionAndAnswer;