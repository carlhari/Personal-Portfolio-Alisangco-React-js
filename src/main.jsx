import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import About from "./components/About";
import Contact from "./components/Contact";
import Works from "./components/Works";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path:"/about",
    element: <About/>,
  },

  {
    path:"/contact",
    element: <Contact/>
  },

 {
  path:"/works",
  element: <Works/>
 }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);