import { Avatar, Divider, Menu } from "antd";
import styled from "styled-components";

interface ICollapsedComponent {
  collapsed: boolean;
}

export const MenuText = styled.div`
  padding: 0px 24px;
  margin-top: 10px;
  transition: opacity 0.3s;

  span {
    color: #a3a3a3;
    font-size: 12px;
    font-weight: 600;
    font-family: "Roboto";
    letter-spacing: 1px;
    line-height: 15px;
  }
`;

export const Logo = styled.div<ICollapsedComponent>`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: ${({ collapsed }) => (collapsed ? "center" : "flex-start")};
  padding: ${({ collapsed }) => (collapsed ? "0" : "0 24px")};
  font-weight: bold;
  color: #cc6237;
  font-size: 20px;

  img {
    /* width: ${({ collapsed }) => (collapsed ? "80px" : "100%")}; */
    height: 24px;
    margin-right: ${({ collapsed }) => (collapsed ? "0" : "8px")};
    transition: margin 0.3s;
  }
`;

export const BottomUserInfo = styled.div<ICollapsedComponent>`
  position: absolute;
  bottom: 24px;
  left: 0;
  width: 100%;
  padding-left: ${({ collapsed }) => (collapsed ? "0" : "24px")};
  text-align: ${({ collapsed }) => (collapsed ? "center" : "left")};

  .user-details {
    display: ${({ collapsed }) => (collapsed ? "none" : "flex")};
    flex-direction: column;
  }
`;

export const MenuStyled = styled(Menu)`
  .ant-menu-item-selected {
    .ant-menu-title-content {
      color: #fff;
      font-weight: 600;
      font-size: 14px;
      line-height: 15px;
    }
  }
  .ant-menu-title-content {
    color: #252525;
    font-weight: 600;
    font-size: 14px;
    line-height: 15px;
  }
`;

export const DividerStyled = styled(Divider)<ICollapsedComponent>`
  position: absolute;
  bottom: 30%;
  transition: all 0.3s ease;
  width: 100%;
`;

export const AvatarStyled = styled(Avatar)`
  width: 45px !important;
  height: 45px !important;
  border-radius: 30%;
  border: 1px solid #cc6237;
`;
