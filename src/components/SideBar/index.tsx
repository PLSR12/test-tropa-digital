import { Layout, Typography } from "antd";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineCalendarMonth } from "react-icons/md";
import TeamsIcon from "../../icons/TeamsIcon";
import SubscribeIcon from "../../icons/SubscribeIcon";
import ProfileIcon from "../../icons/ProfileIcon";
import LogoutIcon from "../../icons/LogoutIcon";
import { useState } from "react";
import LogoSmallImg from "../../assets/logo-small.png";
import LogoImg from "../../assets/logo.png";
import ProfileImg from "../../assets/profile.png";
import { AvatarStyled, BottomUserInfo, DividerStyled, Logo, MenuStyled, MenuText } from "./styles";

const { Sider } = Layout;
const { Text } = Typography;

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
        <img src={collapsed ? LogoSmallImg : LogoImg} alt="Logo" />
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
          <AvatarStyled src={ProfileImg} alt="profile-img" />
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
