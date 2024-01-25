import { useContext } from "react";
import styled from "styled-components";
import { useNavigate,  } from "react-router-dom";
import { UserMinus } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { Center, Container, Header, Text } from "../home/Home";
import UserContext from "../../services/UserContext";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";
import BASE_URL from "../../services/baseUrl";
import notify from "../../services/cardNotify";
import LoadSimbol from "../common/LoadSimbol";

export default function ListUsers() {
  const { user } = useContext(UserContext);
  //const [listUsers, setListUsers] = useState([]);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  if (user.role != "ADMIN") {
    navigate("/");
  }

  const config = {
    headers: {
      Authorization: `Bearer ${user.token }`,
    },
  };

  const { data, isLoading } = useQuery("ListUsers", async () => {
    return await axios
      .get(`${BASE_URL}/listUsers`, config)
      .then((response) => response.data)
      .catch((error) => {
        if (error.response.data === undefined) {
          return notify("Tente novamnete mais tarde.");
        }
        //setToken(localStorage.getItem("newTR"));
        notify(error.response.data.error);
      });
  });


  const mutation = useMutation({
    
    mutationFn: ({ baseurl,id, config }) => {
      console.log("AAAAAAAAAAAAAAA: ", BASE_URL, id, config)
      return axios.delete(`${baseurl}/${id}`, config);
    },
    onError: (error) => {
      if (error.response.data === undefined) {
        return alert("Tente novamente mais tarde.");
      } else alert(error.response.data.error);
      navigate("/");
    },
    onSuccess: () => {
      queryClient.invalidateQueries("ListUsers");
    },
  });


  if (isLoading) return <><Center><Text><LoadSimbol /></Text></Center></>;
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

        {data?.data[0] === "none" ? (
          <LoadSimbol />
        ) : data?.data.length !== 0 ? (
          data?.data.map((myUser) => {
            return (
              <>
                <ContainerUser>
                  <User key={myUser.id}>
                    <Name>{myUser.name}</Name>
                    <Email>{myUser.email}</Email>
                    <Cpf>{myUser.cpf}</Cpf>
                    <Role>{myUser.role}</Role>
                    
                  </User>
                  {user.role === "ADMIN" ? (
                      <DeleteUser onClick={()=>{mutation.mutate({baseurl: BASE_URL, id: myUser.id, config });}}>
                        <UserMinus />
                      </DeleteUser>
                    ) : (
                      ""
                    )}
                </ContainerUser>
              </>
            );
          })
        ) : (
          <Center>
            <Text>Não há usuários cadastrados</Text>
          </Center>
        )}
      </Container>
    </>
  );
}

const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  font-size: 17px;
  height: 25px;
  padding: 5px;
`;

const Email = styled.div`
display: flex;
justify-content: center;
align-items: center;
  font-size: 17px;
width: auto;
height: 25px;
padding: 5px;
`;

const Cpf = styled.div`
display: flex;
justify-content: center;
align-items: center;
  font-size: 17px;
width: auto;
height: 25px;
padding: 10px;
`;

const Role = styled.div`
display: flex;
justify-content: center;
align-items: center;
  font-size: 17px;
width: auto;
height: 25px;
padding: 5px;
`;

const DeleteUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 45px;
  padding: 10px;
  margin-left: 10px;
  background-color: #942365;
  border: solid 1px white;
  cursor: pointer;
  border-radius: 8px;
`;

const ContainerUser = styled.div`
  display: flex;
  align-items: center;
  min-height: 45px;
  margin-bottom: 20px;
  width: 97vw;
`;

const User = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 45px;
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

