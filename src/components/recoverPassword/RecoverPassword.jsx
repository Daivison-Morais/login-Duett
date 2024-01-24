import { useState } from "react";
import { BoxInput, Button, Input } from "../login/Login";
import styled from "styled-components";
import { Container, Header } from "../home/Home";
import { CircularBorder } from "../listUsers/ListUsers";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function RecoverPassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPasswod] = useState("");

  const navigate = useNavigate();
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
        <form>
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
          
          <BtnRecover>Trocar senha</BtnRecover>
        </form>
      </Container>
    </>
  );
}

export const InputBox = styled(BoxInput)`
  display: flex;
`;

export const BtnRecover = styled(Button)``;
