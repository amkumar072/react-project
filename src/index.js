import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FavouriteContextProvider } from "./store/favourite-context";

ReactDOM.render(
  // <React.StrictMode>
  <FavouriteContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavouriteContextProvider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
