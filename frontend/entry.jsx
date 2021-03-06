import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root"
// import {currentUserProfile, editProfile, fetchProfile} from "./utils/profile";  

document.addEventListener("DOMContentLoaded", () => {
  // window.fetchProfile = fetchProfile;
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  } 

  window.store= store; 

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});