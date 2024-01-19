//import axios from "axios";
import { useState } from "react";
//import BASE_URL from "./services";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Input,
  TxtCadastro,
  Button,
  BoxInput,
} from "../login/Login";
import styled from "styled-components";
//import { useMutation } from "react-query";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
//import notify from "./cardNotify";
import LoadSimbol from "../common/LoadSimbol";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setSenha] = useState("");
  const [disabledButton, setDisabledButton] = useState(false);
  const [eyePass, setEyePass] = useState(false);

  const navigate = useNavigate();

  /*   const mutation = useMutation({
    mutationFn: ({ BASE_URL, body }) => {
      return axios
        .post(`${BASE_URL}/sign-up`, body)
        .then(() => {
          notify("Cadastro realizado!");
          setDisabledButton(false);
          navigate("/");
        })
        .catch((error) => {
          setDisabledButton(false);
          if (error.response.data === undefined) {
            return notify("Tente novamnete mais tarde.");
          }
          notify(error.response.data.error);
        });
    },
  }); */

  function handleForm(event) {
    event.preventDefault();

    setDisabledButton(true);

    if (password !== setCpf) {
      setDisabledButton(false);
      //return notify("Senhas não conferem!");
    }

    if (password.length < 6 || setCpf.length < 6) {
      setDisabledButton(false);
      // return notify("Senha deve ter mais que 6 caracteres");
    }

    const body = {
      name,
      email,
      setCpf,
      password,
    };
    console.log(body);

    //mutation.mutate({ BASE_URL: BASE_URL, body: body });
  }

  function eyeReturn(eye, setEye) {
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
        <form onSubmit={handleForm}>
          <div>
            <Input
              placeholder="Nome"
              type="text"
              value={name}
              autoFocus={true}
              onChange={(event) => setName(event.target.value)}
              required
            ></Input>
          </div>

          <div>
            <Input
              placeholder="E-mail"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            ></Input>
          </div>

          <BoxInput>
            <Input
              placeholder="CPF"
              type="number"
              onChange={(event) => setCpf(event.target.value)}
              value={cpf}
              required
            ></Input>
          </BoxInput>

          <BoxInput>
            <Input
              placeholder="Senha"
              type={eyePass ? "text" : "password"}
              onChange={(event) => setSenha(event.target.value)}
              value={password}
              required
            ></Input>
            {eyeReturn(eyePass, setEyePass)}
          </BoxInput>
          <Button disabled={disabledButton} type="submit">
            {disabledButton ? <LoadSimbol /> : "Cadastrar"}
          </Button>
          <TxtCadastro onClick={() => navigate("/")}>
            Já tem uma conta? Entre agora!
          </TxtCadastro>
        </form>
      </Container>
    </>
  );
}

export const Foto = styled(Button)`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
