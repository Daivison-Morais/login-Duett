import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function eyeView(eye, setEye) {

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