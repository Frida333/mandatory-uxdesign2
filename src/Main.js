import React from 'react';
import { Helmet } from 'react-helmet-async';
import {Link} from "react-router-dom";


export default function Main() {
  return (
    <div>
      <Helmet>
        <title>QuizTime</title>
      </Helmet>
      <div className="startButton">
        <Link to='/quiz'>
          <button className="mdc-button">
            <div className="mdc-button__ripple"></div>
            <span className="mdc-button__label">Start Quiz Time</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
