import { useContext, useState } from "react";
import { BoxInput, Button, Input } from "../login/Login";
import styled from "styled-components";
import { Container, Header } from "../home/Home";
import { CircularBorder } from "../listUsers/ListUsers";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import axios from "axios";
import notify from "../../services/cardNotify";
import LoadSimbol from "../common/LoadSimbol";
import BASE_URL from "../../services/baseUrl";
import UserContext from "../../services/UserContext";

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPasswod] = useState("");
  const [disabledButton, setDisabledButton] = useState(false);

  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  if (user.role != "ADMIN" || user.role != "USER") {
    navigate("/");
  }

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  const mutation = useMutation({
    mutationFn: ({ BASE_URL, body }) => {
      return axios
        .put(`${BASE_URL}/password`, body, config)
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

    if (newPassword.length < 6 || currentPassword < 6) {
      setDisabledButton(false);
      return notify("Senha deve ter mais que 6 caracteres");
    }

    const body = {
      email: user.email,
      newPassword,
      currentPassword
    };

    mutation.mutate({ BASE_URL: BASE_URL, body: body });
  }
  return (
    <>
      <Container>
      <Header>
        <CircularBorder>
          <ChevronLeft
            onClick={() => {
              navigate("/Home");
            }}
            style={{ cursor: "pointer" }}
          />
        </CircularBorder>
      </Header>
        <form onSubmit={handleForm}>
          <InputBox>
            <Input
              placeholder="Senha atual"
              type="text"
              value={currentPassword}
              autoFocus={true}
              onChange={(event) => setCurrentPassword(event.target.value)}
              required
            ></Input>
          </InputBox>
          <InputBox>
            <Input
              placeholder="Nova Senha"
              type="email"
              value={newPassword}
              autoFocus={true}
              onChange={(event) => setNewPasswod(event.target.value)}
              required
            ></Input>
          </InputBox>
          <BtnChange disabled={disabledButton} type="submit">
            {disabledButton ? <LoadSimbol /> : "Trocar senha"}
          </BtnChange>
        </form>
      </Container>
    </>
  );
}

export const InputBox = styled(BoxInput)`
  display: flex;
`;

export const BtnChange = styled(Button)``;
