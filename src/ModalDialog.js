import React from 'react';
import ReactDOM from "react-dom";
import FocusTrap from "focus-trap-react";
import {Link} from "react-router-dom";


export default function modalDialog({score, setDialog, setScore, getQuestions}) {
  return ReactDOM.createPortal((
    <FocusTrap>
      <div className="mdc-dialog">
        <div className="mdc-dialog__container">
          <div className="mdc-dialog__surface"
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="my-dialog-title"
            aria-describedby="my-dialog-content"
          >
            <h2 className="mdc-dialog__title" id="my-dialog-title">Congratulations!</h2>
            <div className="mdc-dialog__content" id="my-dialog-content">
              Your answered {score}/10 questions correct
            </div>
            <footer className="mdc-dialog__actions">
              <button
                id="buttonPlayAgain"
                type="button"
                className="mdc-button mdc-dialog__button"
                data-mdc-dialog-action="play again"
                onClick={()=> setDialog(false) + setScore(0) + getQuestions()}
              >
                <div className="mdc-button__ripple"></div>
                <span className="mdc-button__label">Play again</span>
              </button>
              <Link to="/">
                <button
                  id="buttonClose"
                  type="button"
                  className="mdc-button mdc-dialog__button"
                  data-mdc-dialog-action="close"
                  onClick={()=> setDialog(false) + setScore(0)}
                >
                  <div className="mdc-button__ripple"></div>
                  <span className="mdc-button__label">Close</span>
                </button>
              </Link>
            </footer>
          </div>
        </div>
        <div className="mdc-dialog__scrim"></div>
      </div>
    </FocusTrap>
  ), document.body);
}
