import styled from "styled-components";
import { Card, Row, Col } from "antd";

export const LoginWrapper = styled.div`
  min-height: 100vh;
  background-color: #f7f7f9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const LoginCard = styled(Card)`
  width: 900px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  .ant-card-body {
    padding: 0;
    height: 100%;
  }
`;

export const LoginRow = styled(Row)`
  height: 100%;
  padding: 12px 12px;
`;

export const FormColumn = styled(Col)`
  padding: 48px 64px 48px 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #ffffff;
  z-index: 1;
  height: 550px;

  @media (max-width: 768px) {
    padding: 32px 24px;
    flex: 1 1 100% !important;
    max-width: 100% !important;
    height: 100%;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Logo = styled.img`
  margin-bottom: 20px;
  width: 150px;
`;

export const LoginTitle = styled.h3`
  color: #b94e17;
  font-size: 24px;
`;

export const LoginSubtitle = styled.span`
  color: #2a4d8e;
  margin: -10px -0px;
`;

export const LoginForm = styled.div`
  margin-top: 32px;
  width: 100%;
`;

export const ImageColumn = styled(Col)`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #cc6237;
  border-radius: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  flex-direction: row;
  justify-content: start;
`;

export const LoginImage = styled.img`
  height: 100%;
  position: fixed;
  width: 120%;
  max-width: 400px;
  height: auto;
  object-fit: contain;
  transform: translateX(-48px);
  z-index: 1000;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LoginButton = styled.button`
  background-color: #cc6237;
  border-color: #cc6237;
  color: white;
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b94e17;
  }
`;
