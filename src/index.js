import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Services/HelperFunc/AuthFunc";
import { PostsProvider } from "./Services/HelperFunc/PostFunc";
import { UserProvider } from "./Services/HelperFunc/UsersFunc";
makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <AuthProvider>
      <UserProvider>
        <PostsProvider>
          <App />
        </PostsProvider>
      </UserProvider>
    </AuthProvider>
  </Router>
);

reportWebVitals();
