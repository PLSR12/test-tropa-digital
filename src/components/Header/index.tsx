import { Layout, Typography } from "antd";
import styled from "styled-components";

const { Header: HeaderAnt } = Layout;
const { Text } = Typography;

const StyledHeader = styled(HeaderAnt)`
  background: #f2f2f2;
  display: flex;
  align-items: center;
  height: auto;
  min-height: 64px;
  &.ant-layout-header {
    padding: 24px 0px 0px 24px !important;
  }
`;

const ResponsiveText = styled(Text)`
  font-size: 16px;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <ResponsiveText>
        Bem vindo de volta, <b>Kaique Steck</b>
      </ResponsiveText>
    </StyledHeader>
  );
};

export default Header;
