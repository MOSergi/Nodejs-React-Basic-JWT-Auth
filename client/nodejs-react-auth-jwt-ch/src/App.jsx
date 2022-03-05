import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/App.css';
import Navbar from "./components/navbar";
import Section from "./components/section";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path="/" element={<><Navbar/> <Section/></>}></Route>
          </Routes>
      </Router> 
    </div>
  );
}

export default App;
