// src/components/RoundedInput.tsx
import { Input as InputAntd } from "antd";
import styled from "styled-components";

const baseInputStyles = `
  border-radius: 100px;
  padding-left: 16px;
  font-size: 14px;
  background-color: #f4f4f4;
  border: 1px solid #d9d9d9;

  &::placeholder {
    color: #aaa;
  }

  &:hover,
  &:focus {
    border-color: #CC6237 !important;
    box-shadow: none;
  }
`;

export const Input = styled(InputAntd)`
  ${baseInputStyles}
`;

export const PasswordInput = styled(InputAntd.Password)`
  ${baseInputStyles}

  .ant-input-password-icon {
    color: #cc6237 !important;
    margin-right: 8px;

    &:hover {
      color: #666;
    }
  }
`;
