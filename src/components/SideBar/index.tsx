import { Layout, Menu, Avatar, Typography, Divider } from "antd";
import styled from "styled-components";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineCalendarMonth } from "react-icons/md";
import TeamsIcon from "../../icons/TeamsIcon";
import SubscribeIcon from "../../icons/SubscribeIcon";
import ProfileIcon from "../../icons/ProfileIcon";
import LogoutIcon from "../../icons/LogoutIcon";
import { useState } from "react";

const { Sider } = Layout;
const { Text } = Typography;

interface ICollapsedComponent {
  collapsed: boolean;
}

const MenuText = styled.div`
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

const Logo = styled.div<ICollapsedComponent>`
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

const BottomUserInfo = styled.div<ICollapsedComponent>`
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

const MenuStyled = styled(Menu)`
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

const DividerStyled = styled(Divider)<ICollapsedComponent>`
  position: absolute;
  bottom: 30%;
  transition: all 0.3s ease;
  width: 100%;
`;

const AvatarStyled = styled(Avatar)`
  width: 45px !important;
  height: 45px !important;
  border-radius: 30%;
  border: 1px solid #cc6237;
`;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const signOut = () => {
    localStorage.removeItem("authToken");
    window.location.reload();
  };

  return (
    <Sider
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      breakpoint="md"
      onBreakpoint={(broken) => setCollapsed(broken)}
      collapsedWidth={90}
      width={210}
      style={{
        minHeight: "100vh",
        position: "fixed",
        zIndex: 1000,
        left: 0,
        background: "#fff",
        borderRight: "1px solid #f0f0f0",
      }}
    >
      <Logo collapsed={collapsed}>
        <img src={collapsed ? "/src/assets/logo-small.png" : "/src/assets/logo.png"} alt="Logo" />
      </Logo>

      <MenuText>
        <span>MENU</span>
      </MenuText>

      <MenuStyled
        mode="inline"
        defaultSelectedKeys={["2"]}
        style={{ borderRight: 0 }}
        selectable={false}
        items={[
          { key: "1", icon: <RxDashboard />, label: "Dashboard" },
          { key: "2", icon: <MdOutlineCalendarMonth />, label: "Eventos" },
          { key: "3", icon: <TeamsIcon />, label: "Equipes" },
          { key: "4", icon: <SubscribeIcon />, label: "Inscrições" },
        ]}
      />

      <DividerStyled collapsed={collapsed} />

      <BottomUserInfo collapsed={collapsed}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            justifyContent: collapsed ? "center" : "flex-start",
          }}
        >
          <AvatarStyled src="/src/assets/profile.png" alt="profile-img" />
          <div className="user-details">
            <Text strong>Kaique Steck</Text>
            <Text type="secondary" style={{ fontSize: 12 }}>
              Administrador
            </Text>
          </div>
        </div>
        <MenuStyled
          style={{ border: "none", marginLeft: collapsed ? 0 : -5, marginTop: 12 }}
          mode="vertical"
          items={[
            { key: "5", icon: <ProfileIcon />, label: "Alterar dados" },
            {
              key: "6",
              icon: <LogoutIcon />,
              label: "Sair",
              onClick: () => {
                signOut();
              },
            },
          ]}
        />
      </BottomUserInfo>
    </Sider>
  );
};

export default Sidebar;
