import styled from "styled-components";

export const CustomButtonContainer = styled.button<{hoveredColor: string, bgColor: string}>`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 10px;
  border-radius: 15px;
  background-color: ${props => props.bgColor};
  outline: none;
  border: 2px solid transparent;
  cursor: pointer;
  transition: .2s;
  font-size: 16px;
  &:hover {
    background-color: ${props => props.hoveredColor};
  }
  &:focus {
    border: 2px solid #000;
  }
  img {
    margin-right: 7px;
  }
`;