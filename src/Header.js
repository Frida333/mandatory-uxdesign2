import React from 'react';


export default function Header() {
  return (
    <header className="mdc-top-app-bar">
      <div className="mdc-top-app-bar__row">
        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <button className="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button">menu</button>
          <span className="mdc-top-app-bar__title">Quiz Time</span>
        </section>
      </div>
    </header>
  );
}
