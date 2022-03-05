import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/App.css';
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path="/" element={<><Navbar/></>}></Route>
          </Routes>
      </Router> 
    </div>
  );
}

export default App;
