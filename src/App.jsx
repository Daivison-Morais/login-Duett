import "./styles/App.css";
import Login from "./components/login/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/signup/SignUp.jsx";
import Home from "./components/home/Home.jsx";
import RecoverPassword from "./components/recoverPassword/RecoverPassword.jsx";
import ListUsers from "./components/listUsers/ListUsers.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/RecoverPassword" element={<RecoverPassword />}></Route>
          <Route path="/ListUsers" element={<ListUsers />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
