import { useState } from 'react';
import './App.css';
import Calculator from './components/calculator'
import QuestionAndAnswer from './components/q&A'
import data from './data/data'

const numOfQuestions = Object.keys(data).length;

function App() {
  let [score,updateScore] = useState(0)
  let [currentQuestionNumber, nextQuestionNumber] = useState('1');
  let [questionsAnswered, updatequestionsAnswered] = useState(0);
  
  let questionAndAnswers = data;
  let progress =  questionsAnswered*100  / numOfQuestions;

  const nextQuestion = (incScore) =>  {
    if (incScore) {
      updateScore(score+1);
    }

    updatequestionsAnswered(questionsAnswered+1);
  
    let current = currentQuestionNumber;
    
    changeQuestion('next');
    
    delete questionAndAnswers[current.toString()];
  }
 
  const changeQuestion = (prevOrNext) => { 
    
    const keyOfCurrentQuestion = Object.keys(questionAndAnswers).indexOf(currentQuestionNumber.toString());
    
    let nextKey;

    if (prevOrNext=='prev') {
      nextKey = (keyOfCurrentQuestion == 0) ? Object.keys(questionAndAnswers).length -1 : keyOfCurrentQuestion - 1;
    } else {
      nextKey = (keyOfCurrentQuestion == Object.keys(questionAndAnswers).length-1) ? 0 : keyOfCurrentQuestion + 1;
    }
    
    nextQuestionNumber(Object.keys(questionAndAnswers)[nextKey]);     
  }

  return (
    <>
    <h1><span>Quiz app</span></h1>
    
    <section className='App'>
      {(questionsAnswered!==numOfQuestions) ? (
      <>
          <div>      
              <div className='controlAndQuiz'>
                <div> 
                      <button onClick={e => changeQuestion('prev')}> Previous </button> 
                      <section className='quizStats'>
                        <div>Score  <b>{score}</b></div>
                        <progress max="100" value={progress} > {progress}% </progress>
                      </section>
                      <button onClick={e => changeQuestion('next')}> Next </button> 
                </div>
                <br/>
                <QuestionAndAnswer 
                        questAndAns={questionAndAnswers[currentQuestionNumber]} 
                        nextQuestion={nextQuestion}
                  />
              </div>   
          </div>
          <div>
            <Calculator />
          </div>
        </>) : <p className='quizFinishedNote'> Thank you for taking the quiz, you scored {(score*100/numOfQuestions).toFixed(1)}% ,have a good one !!</p>
        }
    </section>
    </>
  );
}

export default App;
