import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

import './App.css';
import Header from "./Header";
import Main from "./Main";
import Quiz from "./Quiz";

export default function App() {
  return (
    <div>
    <HelmetProvider>

      <Router>
       <Header />
        <Route exact path="/" component={Main} />
        <Route path="/quiz" component={Quiz} />

      </Router>
      </HelmetProvider>
    </div>
  );
}
