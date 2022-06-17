import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./components/Landing";
import Builder from "./components/Builder";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/build" element={<Builder />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
