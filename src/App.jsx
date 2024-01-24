import "./styles/App.css";
import Login from "./components/login/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/signup/SignUp.jsx";
import Home from "./components/home/Home.jsx";
import RecoverPassword from "./components/recoverPassword/RecoverPassword.jsx";
import ListUsers from "./components/listUsers/ListUsers.jsx";
import { useState } from "react";
import UserContext from "./services/UserContext.js";

function App() {
  const [user, setUser] = useState("");
  const [token, setToken] = useState(localStorage.getItem("newTR"));

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider
          value={{
            user,
            setUser,
            token,
            setToken,
          }}
        >
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/SignUp" element={<SignUp />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route
              path="/RecoverPassword"
              element={<RecoverPassword />}
            ></Route>
            <Route path="/ListUsers" element={<ListUsers />}></Route>
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
