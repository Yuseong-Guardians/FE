import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import * as serviceWorker from './serviceWorker';
import { GlobalStyle } from "./themes/globalStyle"
import { HashRouter } from "react-router-dom";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <HashRouter>
    <App />
    <GlobalStyle />
  </HashRouter>
);

serviceWorker.unregister();
