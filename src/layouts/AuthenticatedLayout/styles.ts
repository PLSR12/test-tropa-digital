import { Layout } from "antd";
import styled from "styled-components";

const { Content } = Layout;

export const LayoutStyled = styled(Layout)`
  margin-left: 210px;
  transition: margin-left 0.3s;

  @media (max-width: 768px) {
    margin-left: 90px;
  }
`;

export const ContentContainer = styled(Content)`
  background: #f2f2f2;
  padding: 24px;
  min-height: 100vh;
  transition: padding-left 0.3s;
`;

export const OutletContainer = styled.div`
  background: #f2f2f2;
  width: 100%;
  min-height: 100vh;
  overflow-y: auto;
`;
