import { ChevronLeft } from "lucide-react";
import { CircularBorder } from "../listUsers/ListUsers";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

    return(<>
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
    </>)
}