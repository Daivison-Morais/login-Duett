import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Input,
  TxtCadastro,
  Button,
  BoxInput,
} from "../login/Login";
import { useMutation } from "react-query";
import notify from "../../services/cardNotify.js";
import LoadSimbol from "../common/LoadSimbol";
import BASE_URL from "../../services/baseUrl.js";
import { cpf as isCpf } from "cpf-cnpj-validator";
import eyeView from "../login/eyeView.jsx";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [role, setRole] = useState("");
  const [password, setSenha] = useState("");
  const [disabledButton, setDisabledButton] = useState(false);
  const [eyePass, setEyePass] = useState(false);

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: ({ BASE_URL, body }) => {
      return axios
        .post(`${BASE_URL}/signup`, body)
        .then(() => {
          notify("Cadastro realizado com sucesso!");
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
  });

  function handleForm(event) {
    event.preventDefault();

    setDisabledButton(true);

    if (!isCpf.isValid(cpf)) {
      setDisabledButton(false);
      return notify("CPF inválido!");
    }

    if (password.length < 6) {
      setDisabledButton(false);
      return notify("Senha deve ter mais que 6 caracteres");
    }

    if (role !== "ADMIN" && role !== "USER") {
      setDisabledButton(false);
      return notify("Função deve ser 'ADMIN' ou 'USER'");
    }

    const body = {
      name,
      email,
      cpf,
      role: role.toUpperCase(),
      password,
    };

    mutation.mutate({ BASE_URL: BASE_URL, body: body });
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
              placeholder="Perfil (USER ou ADMIN)"
              type="text"
              onChange={(event) => setRole(event.target.value)}
              value={role}
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
            {eyeView(eyePass, setEyePass)}
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
