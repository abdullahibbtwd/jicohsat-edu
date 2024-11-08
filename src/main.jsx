import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  Routes,
  Route,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="https://abdullahibbtwd.github.io/jicohsat-edu/">
  <App/>
  </BrowserRouter>
);
