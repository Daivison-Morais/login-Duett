import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useMutation } from "react-query";
import LoadSimbol from "../common/LoadSimbol.jsx";
import notify from "../../services/cardNotify.js";
import UserContext from "../../services/UserContext.js";
import BASE_URL from "../../services/baseUrl.js";
import eyeView from "./eyeView.jsx";

export default function Login() {
  const [email, setEmail] = useState("");
  const [disabledButton, setDisabledButton] = useState(false);
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const mutation = useMutation({
  mutationFn: async ({ body }) => {
    return await axios
      .post(`${BASE_URL}/login`, body)
      .then((response) => {
        setUser(response.data);
        setDisabledButton(false);
        navigate("/Home");
      })
      .catch((error) => {
        setDisabledButton(false);
        if (error.response.data === undefined) {
          return notify("Tente novamnete mais tarde.");
        }
        console.log(error)
        notify(error.response.data.error);
      });
  },
});

  function handleForm(event) {
    event.preventDefault();

    const body = {
      email: email,
      password: password,
    };

    setDisabledButton(true);

    mutation.mutate({ BASE_URL: BASE_URL, body: body });
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
            {eyeView(eye, setEye)}
          </BoxInput>
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

export const Title = styled.h1`
text-align: center;
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
  background-color: #4146FF;
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
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`;
