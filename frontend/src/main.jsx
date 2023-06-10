import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider, useAuth } from "./Context/AuthProvider.jsx";
import { ProductProvider, useProducts } from "./Context/ProductProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);

export { useAuth, useProducts };
