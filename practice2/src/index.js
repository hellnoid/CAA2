import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./Redux/store";
import { AppContextProvider } from "./Components/AppContextProvider";

// console.log(store.getState());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContextProvider store={store}>
    <App />
  </AppContextProvider>
);
