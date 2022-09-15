import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  margin: 16px 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: orangered;
  }
`;