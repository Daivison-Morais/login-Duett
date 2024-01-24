import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AlignJustify } from "lucide-react";
import { Users } from 'lucide-react';
import { KeyRound } from 'lucide-react';

export default function Home() {
    const [sidefLap, setSideFlap] = useState(false);
    const navigate = useNavigate();

  return (
    <>
      <Container>
      <Header>
        <AlignJustify onClick={()=>{setSideFlap(!sidefLap)}} style={{marginRight: "15px", cursor: "pointer"}}/>
      </Header>
        {sidefLap? (<SideFlap onClick={()=>setSideFlap(!sidefLap)}>
            <BtnOptions onClick={()=>{navigate("/ListUsers")}}> Ver usuários
            <Users />
            </BtnOptions>
            <BtnOptions onClick={() => navigate("/RecoverPassword")}>
            Trocar senha
            <KeyRound />
          </BtnOptions>
            </SideFlap>) : ""}
        <Center>Olá mundo</Center>
      </Container>
    </>
  );
}
export const Center = styled.h1`
margin: auto;
`;
export const BtnOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 45px;
  margin-bottom: 20px;
  padding: 0 20px;
  cursor: pointer;
  border: solid 2px transparent;
  border-radius: 10px;
  box-sizing: border-box;
  &:hover {
    border: 2px solid #d6b750;
    color: #d6b750
  }

`;
export const SideFlap = styled.div`
  display: flex;
  align-items: center;
  justify-content: top;
  flex-direction: column;
  position: absolute;
  right: 10px;
  top: 70px;
  padding: 20px;
  width: 45vw;
  max-width: 400px;
  border-radius: 10px;
  height: 80vh;
  background-color: #672394;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100vw;
  height: 60px;
  margin-bottom: 40px;
  background-color: #c2a136;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  position: relative;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
`;
