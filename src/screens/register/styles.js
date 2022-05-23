import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 400px;
  height: 520px;
  background-color: #611e94;
  border-radius: 10px;
`;

export const Subtitle = styled.h3`
  font-family: KoHo;
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  height: 450px;
`;

export const ContainerInput = styled.div`
  width: 90%;
  height: 55px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
//espacio suficiente para que entre el input, el error y un espacio entre ellos.
//se elineo el texto a la izquierda
//display flex y flex direction colum para que el error se vea abajo y no al costado del input
//justify content para que se genere esa distancia entre el input y el error

export const Error = styled.p`
front-size: 12px
color: red;
margin: 0;
font-family: Lato;
margin-left: 10px;
`;

export const Button = styled.button`
  width: 70%;
  height: 35px;
  border: none;
  background-color: #8460a0;
  border-radius: 50px;
  color: #0d0d0c;
  font-family: KoHo;
  font-weight: bold;
  border: 1px solid black;
  margin: 1px;
  :hover {
    background-color: #8460a0;
    color: #0d0d0c;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  width: 90%;
  height: 35px;
  border-radius: 50px;
  border: none;
  background-color: #f8f9f9;
  padding-left: 20px;
  font-family: KoHo;
  :focus-visible {
    outline: 1px;
    solid: #4fe0e0;
  }
`;
