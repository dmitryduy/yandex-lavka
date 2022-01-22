import styled from "styled-components";
import { Link } from "react-router-dom";


export const Sublist = styled.ul`
  display: flex;
  flex-direction: column;
  margin-left: 50px !important;
  li {
    list-style: none;
    margin-bottom: 5px;
    &:hover a {
      color: #9e9b98;
    }
  }
`;

export const SublistItem = styled(Link)`
  font-weight: 500;
  font-size: 16px;
  color: #000;
  text-decoration: none;
`;