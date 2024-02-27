import styled from "styled-components";
import { ButtonProps } from "./Button.types";

export const Button = styled.button<ButtonProps>`
  width: ${({ width }) => width || "450px"};
  background-color: #048380;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  padding: 1rem 0;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
`;
