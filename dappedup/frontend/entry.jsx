import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import {login, signup, logout} from './utils/session';  

document.addEventListener("DOMContentLoaded", () => {
//   window.login = login; 
  const store= configureStore(); 
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to DAPPED UP!</h1>, root);
});