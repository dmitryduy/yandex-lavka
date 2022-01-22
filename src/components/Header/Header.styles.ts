import styled from "styled-components";


export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
  background-color: #fff;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #e5e4e0;
  &>* {
    margin: 0 10px;
  }
`;