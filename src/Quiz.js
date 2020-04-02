import React, {useEffect,useState} from 'react';
import html from 'react-inner-html';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import ModalDialog from "./ModalDialog";


export default function Quiz() {
  const [questions, setQuestions] = useState(null);
  let amount = 1;
  const [answers, setAnswers] = useState(new Array(10).fill(true));
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [dialog, setDialog] = useState(false)
  let [score, setScore] = useState(0);

  useEffect(() => {
     getQuestions();
  },[]);

  function getQuestions(){
    axios.get('https://opentdb.com/api.php?amount=10&category=12&difficulty=medium&type=boolean')
      .then((response) => {
      setQuestions(response.data.results);
      correctAnswer(response.data.results);
    });
  }

  function createMarkup(question) {
    return {__html: question.question};
  }

  function correctAnswer(questionsData){
    setCorrectAnswers(questionsData.map(x => x.correct_answer === 'True'));
  }

  function onChange(index, newValue) {
    const newAnswers = [...answers];
    newAnswers[index] = newValue;
    setAnswers(newAnswers);
  }

  function onSubmit(e){
    e.preventDefault();
    for(let i = 0; i <10; i++){
      if(correctAnswers[i] === answers[i]){
        setScore( score += 1);
      }
    }
    setDialog(true)
    return score;
  }

  return (
    <div>
      <Helmet>
        <title>QuizTime</title>
      </Helmet>
      <div className="quiz">
      {!questions ? <h3 className='loadingText'>Loading questions</h3> :
        <form onSubmit={onSubmit}>
        {questions.map((question, index, key) => {
            return(
              <ul className="mdc-list">
                <li key={index} className="mdc-list-item" tabIndex="0">
                  <span className="mdc-list-item__text">Question {amount++}</span>
                </li>
                <li key={question} className="mdc-list-item" tabIndex="0">
                  <span className="mdc-list-item__text" dangerouslySetInnerHTML={createMarkup(question)}></span>
                </li>
                <li>
                  <div className="mdc-form-field">
                    <div className="mdc-radio">
                      <input
                        className="mdc-radio__native-control"
                        type="radio"
                        id="radio-1"
                        name={`radio-${index}`}
                        onChange={() => onChange(index, true)}
                        defaultChecked
                      />
                      <div className="mdc-radio__background">
                        <div className="mdc-radio__outer-circle"></div>
                        <div className="mdc-radio__inner-circle"></div>
                      </div>
                      <div className="mdc-radio__ripple"></div>
                    </div>
                    <label htmlFor="radio-1">True</label>
                  </div>
                </li>
                <li>
                  <div className="mdc-form-field">
                    <div className="mdc-radio">
                     <input
                       className="mdc-radio__native-control"
                       type="radio"
                       id="radio-2"
                       name={`radio-${index}`}
                       onChange={() => onChange(index, false)}
                    />
                    <div className="mdc-radio__background">
                      <div className="mdc-radio__outer-circle"></div>
                      <div className="mdc-radio__inner-circle"></div>
                    </div>
                    <div className="mdc-radio__ripple"></div>
                  </div>
                  <label htmlFor="radio-2">False</label>
                </div>
              </li>
            </ul>
          )})}
          <div className="result">
            <button className="mdc-button" type="submit">
              <div className="mdc-button__ripple"></div>
              <span className="mdc-button__label">Result</span>
            </button>
          </div>
        </form>
      }
      </div>
     {dialog && <ModalDialog score={score} setDialog={setDialog}  setScore={setScore} getQuestions={getQuestions}/>}
    </div>
  );
}
