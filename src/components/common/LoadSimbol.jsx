import styled from "styled-components";

// eslint-disable-next-line react/prop-types
export default function LoadSimbol({size}) {
  return (
    <>
    <Center>
      <LoadSimboll size={size}></LoadSimboll>
    </Center>
    </>
  );
}

export const Center = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
`;

export const LoadSimboll = styled.div`
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  width: ${({size})=> size ? size : "18px"};
  height: ${({size})=> size ? size : "18px"};
  border: 5px solid;
  border-color: #e6e6e6 #4cb89e #4cb89e;
  border-radius: 50%;
  animation: spin 1s linear infinite;
`;
