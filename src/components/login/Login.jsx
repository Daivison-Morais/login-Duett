import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadSimbol from "../common/LoadSimbol.jsx";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

//import notify from "./cardNotify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [disabledButton, setDisabledButton] = useState(false);
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(false);
  const navigate = useNavigate();

  function handleForm(event) {
    event.preventDefault();

    const body = {
      email: email,
      password: password,
    };

    console.log(body);
    navigate("/Home")
    setDisabledButton(true);
  }

  function eyeReturn(eye) {
    return eye ? (
      <AiOutlineEyeInvisible
        onClick={() => {
          setEye(!eye);
        }}
        style={{
          position: "absolute",
          top: "37%",
          right: "13px",
          width: "24px",
          height: "24px",
          color: "#898989",
          cursor: "pointer",
        }}
      />
    ) : (
      <AiOutlineEye
        onClick={() => {
          setEye(!eye);
        }}
        style={{
          position: "absolute",
          top: "37%",
          right: "13px",
          width: "24px",
          height: "24px",
          color: "#898989",
          cursor: "pointer",
        }}
      />
    );
  }

  return (
    <>
      <Container>
        <Title>Acesso</Title>
        <form onSubmit={handleForm}>
          <div>
            <Input
              placeholder="E-mail"
              type="email"
              value={email}
              autoFocus={true}
              onChange={(event) => setEmail(event.target.value)}
              required
            ></Input>
          </div>

          <BoxInput>
            <Input
              placeholder="Senha"
              type={eye ? "text" : "password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            ></Input>
            {eyeReturn(eye)}
          </BoxInput>
          <RecoverPassword onClick={() => navigate("/RecoverPassword")}>
            Recuperar senha
          </RecoverPassword>
          <Button disabled={disabledButton} type="submit">
            {disabledButton ? <LoadSimbol /> : "Entrar"}
          </Button>
        </form>
        <TxtCadastro onClick={() => navigate("/SignUp")}>
          Primeira vez? Cadastre-se!
        </TxtCadastro>
      </Container>
    </>
  );
}

export const RecoverPassword = styled.div`
  display: flex;
  justify-content: end;
  font-size: 1em;
  cursor: pointer;
`;

export const Title = styled.h1`
  height: 50px;
  width: 160px;
  font-size: 32px;
  margin-bottom: 40px;
  font-weight: 400;
  color: #ffffff;
`;

export const TxtCadastro = styled.div`
  display: flex;
  justify-content: center;
  text-decoration: underline;
  color: #ffffff;
  cursor: pointer;
  line-height: 22.5px;
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
`;

export const Button = styled.button`
  width: 85vw;
  max-width: 450px;
  height: 45px;
  background-color: #a328d6;
  border-radius: 5px;
  margin-top: 8px;
  margin-bottom: 28px;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  box-sizing: border-box;
  cursor: pointer;
  border-style: hidden;
`;

export const Input = styled.input`
  width: 85vw;
  max-width: 450px;
  height: 56px;
  font-size: 20px;
  outline: none;
  margin: 8px 0;
  color: white;
  padding: 6px;
  border-radius: 5px;
  box-sizing: border-box;
  border-style: none;
`;

export const Foto = styled.img`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

export const BoxInput = styled.div`
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;
