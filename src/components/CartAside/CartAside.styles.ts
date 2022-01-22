import styled from "styled-components";

export const Cart = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 70px;
  height: calc(100vh - 70px);
  margin-top: -41px;
  padding: 50px 20px 30px 0;
  h2 {
    font-size: 20px;
    font-weight: 700;
  }
`;

export const OrderButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f4f2;
  border: none;
  padding: 20px;
  border-radius: 15px;
  p{
    color: #9e9b98;
  }
  p:first-child {
    font-size: 16px;
  }
  p:last-child {
    font-size: 20px;
    font-weight: 700;
  }
`;