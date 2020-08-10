import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import b2cauth from "react-azure-adb2c";

// b2cauth.initialize({
//   instance: process.env.REACT_APP_B2_INSTANCE,
//   tenant: process.env.REACT_APP_B2_TENANT,
//   signInPolicy: process.env.REACT_APP_B2_SIGN_IN_POLICY,
//   applicationId: process.env.REACT_APP_B2_APPLICATION_ID,
//   cacheLocation: "sessionStorage",
//   scopes: [process.env.REACT_APP_B2_SCOPES],
//   // redirectUri: "https://icc-test.azurewebsites.net",
//   redirectUri: "http://localhost:3000/",
//   postLogoutRedirectUri: window.location.origin,
// });

// b2cauth.run(() => {
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
// });
