import { useState } from "react";
import { BoxInput, Button, Container, Input } from "../login/Login";
import styled from "styled-components";

export default function RecoverPassword() {
  const [email, setEmail] = useState("");

  return (
    <>
      <Container>
        <form>
          <InputBox>
            <Input
              placeholder="E-mail"
              type="email"
              value={email}
              autoFocus={true}
              onChange={(event) => setEmail(event.target.value)}
              required
            ></Input>
          </InputBox>
          <BtnRecover>Recuperar</BtnRecover>
        </form>
      </Container>
    </>
  );
}

export const InputBox = styled(BoxInput)`
  display: flex;
`;

export const BtnRecover = styled(Button)``;
