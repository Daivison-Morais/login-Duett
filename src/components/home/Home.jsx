import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AlignJustify } from "lucide-react";
import { Users } from "lucide-react";
import { KeyRound } from "lucide-react";
import UserContext from "../../services/UserContext";

export default function Home() {
  const [sidefLap, setSideFlap] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();
  function logout() {
    setUser("");
    navigate("/");
  }

  return (
    <>
      <Container>
        <Header>
          <AlignJustify
            onClick={() => {
              setSideFlap(!sidefLap);
            }}
            style={{ marginRight: "15px", cursor: "pointer" }}
          />
        </Header>
        {sidefLap ? (
          <SideFlap onClick={() => setSideFlap(!sidefLap)}>
            {user.role == "ADMIN" ? (
              <BtnOptions
                onClick={() => {
                  navigate("/ListUsers");
                }}
              >
                {" "}
                Ver usuários
                <Users />
              </BtnOptions>
            ) : (
              ""
            )}

            <BtnOptions onClick={() => navigate("/ChangePassword")}>
              Trocar senha
              <KeyRound />
            </BtnOptions>
            <BtnOptions onClick={logout}>
              Sair
              <KeyRound />
            </BtnOptions>
          </SideFlap>
        ) : (
          ""
        )}
        <Center><Text>Hola Mundo</Text></Center>
      </Container>
    </>
  );
}
export const Text = styled.h1`
font-size: 30px;
  margin: auto;
`;
export const Center = styled.div`
size: 25px;
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
  font-size: 18px;
  border: solid 2px transparent;
  border-radius: 10px;
  box-sizing: border-box;
  &:hover {
    border: 2px solid #06ecb7;
    color: #06ecb7;
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
  min-width: 200px;
  max-width: 400px;
  border-radius: 10px;
  height: 80vh;
  background-color: #4146ff;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100vw;
  height: 60px;
  margin-bottom: 40px;
  background-color: #4cb89e;
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
