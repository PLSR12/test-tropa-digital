// src/components/RoundedButton.tsx
import { Button as ButtonAntD } from "antd";
import styled from "styled-components";

export const Button = styled(ButtonAntD)`
  border-radius: 100px;
  font-weight: 500;

  &:hover,
  &:focus {
    color: white !important;
  }
`;
