import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./js/components/App";
import { BrowserRouter } from 'react-router-dom'
import RouterMain from './js/router/index'
import style from "./main.css";

render(
  <Provider store={store}>
        <BrowserRouter>
            <RouterMain />
        </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);