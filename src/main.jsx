import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";


const domain = "dev-qsskpalqd7swrrb7.us.auth0.com";
const clientId = "yD9h2cJuiY1QtMblCom82CR3YugeqizO";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Auth0Provider
          domain={domain}
          clientId={clientId}
          redirectUri={window.location.origin}
        >
          <App />
        </Auth0Provider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
