import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./store/CartContext";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC6U3wB-kAgr9p8VY2k9uk6J6XNO7LV9jo",
  authDomain: "shop-tissera.firebaseapp.com",
  projectId: "shop-tissera",
  storageBucket: "shop-tissera.appspot.com",
  messagingSenderId: "130937684061",
  appId: "1:130937684061:web:547f5a8389462c1a238db4"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
