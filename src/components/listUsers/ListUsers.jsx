import styled from "styled-components";
//import { useState } from "react";
import { UserMinus } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Container, Header } from "../home/Home";

export default function ListUsers() {
  // const [sidefLap, setSideFlap] = useState(false);
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
        <User>
            <Name>df</Name>
            <Email>fdf</Email>
            <Cpf>fd</Cpf>{/* Se for ADMIN */}
            <Role>fdfdf</Role>
          <DeleteUser>
            <UserMinus />
          </DeleteUser>
        </User>
      </Container>
    </>
  );
}

const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 25px;
  padding: 5px;
`;

const Email = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: auto;
height: 25px;
padding: 5px;
`;

const Cpf = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: auto;
height: 25px;
padding: 10px;
`;

const Role = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: auto;
height: 25px;
padding: 5px;

`;

const DeleteUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 25px;
  padding: 10px;
  border-radius: 8px;
`;

const User = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 95vw;
  height: 25px;
  padding: 10px;
  border-radius: 8px;
  border: solid 1px white;
`;

export const CircularBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: solid 2px white;
`;

export const BtnOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 38px;
  padding: 10px;
  cursor: pointer;
  border: solid 2px transparent;
  border-radius: 10px;
  &:hover {
    border: 2px solid;
  }
`;
export const SideFlap = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;
  position: absolute;
  right: 5px;
  top: 5px;
  padding: 10px;
  width: 45vw;
  border-radius: 10px;
  height: 80vh;
  background-color: green;
`;

