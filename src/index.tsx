import React from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <div>1s</div>
    </React.StrictMode>
  </BrowserRouter>
);
