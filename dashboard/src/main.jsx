import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import "./index.css";
import Home from "./components/Home";
import Login from "./components/page/Login";      
import Signup from "./components/page/Signup";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />     
        <Route path="/signup" element={<Signup />} />  
      <Route path = "/*" element = {<Home/>}/>  //we are making it nested so that any changes we did, done within the component, we don't need to change or reload the application
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
