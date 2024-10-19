import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from '@auth0/auth0-react'
import { BrowserRouter as Router } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <Auth0Provider
       domain="dev-2jarn8jnr20lwuql.us.auth0.com"
       clientId="5lY9hAy66QfJOba9SUmjGFChmhW45LvL"
       redirectUri={`${window.location.origin}/user`}
       cacheLocation="localstorage" 
       useRefreshTokens={true}
       audience="nexusidentifier"
       scope="openid profile email"
      >
        <App />
      </Auth0Provider>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
