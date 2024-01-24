import "./styles/App.css";
import Login from "./components/login/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/signup/SignUp.jsx";
import Home from "./components/home/Home.jsx";
import ListUsers from "./components/listUsers/ListUsers.jsx";
import { useState } from "react";
import UserContext from "./services/UserContext.js";
import ChangePassword from "./components/changePassword/ChangePassword.jsx";

function App() {
  const [user, setUser] = useState("");

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider
          value={{
            user,
            setUser,
          }}
        >
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/SignUp" element={<SignUp />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route
              path="/ChangePassword"
              element={<ChangePassword />}
            ></Route>
            <Route path="/ListUsers" element={<ListUsers />}></Route>
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
