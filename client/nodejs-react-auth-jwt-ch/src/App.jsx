import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/App.css';
import Navbar from "./components/navbar";
import Section from "./components/section";
import Footer from "./components/footer";
import Register from "./components/register";
import Login from "./components/login";
import UserContext from "./context/userContext";
import Profile from "./components/userProfile";

function App() {

  const [loginStatus, setLoginStatus] = useState(false);

  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={{loginStatus, setLoginStatus}}>
          <Routes>
                <Route path="/" element={<><Navbar/> <Section/> <Footer/> </>}></Route>
                <Route path="/Register" element={<><Navbar/> <Register/></>}></Route>
                <Route path="/Login" element={<><Navbar/> <Login/></>}></Route>
                <Route path="/Profile" element={<><Navbar/> <Profile /></>}></Route>
          </Routes>
        </UserContext.Provider>  
      </Router>
    </div>
  );
}

export default App;
