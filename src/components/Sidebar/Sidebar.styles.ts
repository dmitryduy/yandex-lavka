import styled from "styled-components";

export const SidebarContainer = styled.aside`
  flex: 1;
  user-select: none;
  margin-right: 15px;

  h2 {
    font-size: 20px;
    font-weight: 700;
    padding: 20px 0 10px 0;
  }

  ul {
    margin-left: 15px;
  }
`;

export const CatalogItem = styled.li`
  list-style: none;
  margin-bottom: 10px;
  cursor: pointer;

  ul {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
  }

  .header {
    display: flex;
    align-items: center;
  }

  & .header:hover h4 {
    color: #9e9b98;
  }

  & .header:hover svg {
    visibility: visible;
  }

  svg {
    visibility: hidden;
  }

  svg path {
    stroke: #9e9b98;
  }

  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  h4 {
    font-weight: 500;
    font-size: 16px;
    flex: 1;
  }
`;