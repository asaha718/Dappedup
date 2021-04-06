import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root'
import {login, signup, logout} from './utils/session';  

document.addEventListener("DOMContentLoaded", () => {
//   window.login = login; 
  const store= configureStore(); 
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});