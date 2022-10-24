import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Landing from "./components/Landing";
import Builder from "./components/Builder";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Templates from "./pages/Templates";
import About from "./pages/About";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/build" element={<Builder />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer position="top-center" hideProgressBar={true} />
    </React.Fragment>
  );
}

export default App;
