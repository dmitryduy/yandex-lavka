import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled(Link)<{grid: number}>`
  width: 100%;
  margin-bottom: 20px;
  flex: ${props => props.grid};
  figure{
    position: relative;
    height: 150px;
    cursor: pointer;
  }
  figcaption {
    position: absolute;
    z-index: 1;
    top: 10px;
    left: 10px;
    color: #264040;
    font-weight: 500;
  }
  img {
    border-radius: 15px;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;