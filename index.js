import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from "react-dom";
import App from './Hello';
import './style.css';
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);