import { Card } from "antd";
import styled from "styled-components";

export const Container = styled.div``;

export const CardStyled = styled(Card)`
  .ant-card-head {
    border-bottom: none !important;
  }

  .ant-card-body {
    padding: 0px 24px;
  }
`;
