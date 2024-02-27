import styled from "styled-components";
import { InputProps } from "./Input.types";

export const Label = styled.label`
  color: #222222;
  font-size: 1rem;
  font-weight: 400;
  font-family: Inter;
`;

export const Input = styled.input<InputProps>`
  background: #fff;
  border: 0;
  border-radius: 0.313rem;
  width: ${({ width }) => width || "210px"};
  font-size: 1rem;
  padding: 10px 1rem;
  margin: 0.2rem 0 1rem 0;
  box-shadow: 0px 1px 3px 0px rgb(0, 0, 0, 0.5);
  outline: none;

  &::placeholder {
    color: #d9d9d9;
  }

  /* &:not(:focus):not([value=""]) {
    color: #d9d9d9;
  } */
`;

export const InputRadio = styled.input`
  display: none;
`;

export const InputRadioLabel = styled.label`
  display: inline-block;
  position: relative;
  padding-left: 30px;
  margin-right: 15px;
  color: #222222;
  cursor: pointer;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    left: 0;
    top: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 6px solid #fff;
    background-color: #fff;
  }

  ${InputRadio}:checked + &::before {
    background-color: #048380;
    border-color: #fff;
  }
`;
