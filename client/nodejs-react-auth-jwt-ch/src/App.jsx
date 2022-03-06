import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/App.css';
import Navbar from "./components/navbar";
import Section from "./components/section";
import Footer from "./components/footer";
import Register from "./components/register";
import Login from "./components/login";
import UserContext from "./context/userContext";

function App() {

  const [loginStatus, setLoginStatus] = useState(false);
  const [login, setLogin] = useState(false);

  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={{loginStatus, setLoginStatus, login, setLogin}}>
          <Routes>
                <Route path="/" element={<><Navbar/> <Section/> <Footer/></>}></Route>
                <Route path="/Register" element={<><Navbar/> <Register/></>}></Route>
                <Route path="/Login" element={<><Navbar/> <Login/></>}></Route>
          </Routes>
        </UserContext.Provider>  
      </Router> 
    </div>
  );
}

export default App;
