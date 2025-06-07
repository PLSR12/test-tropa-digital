import { type ReactElement } from "react";
import { Layout } from "antd";
import { ContentContainer, LayoutStyled, OutletContainer } from "./styles";
import Header from "../../components/Header";
import Sidebar from "../../components/SideBar";

export function AuthenticatedLayout({ children }: { children: ReactElement }): ReactElement {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />

      <LayoutStyled>
        <Header />

        <ContentContainer>
          <OutletContainer>{children}</OutletContainer>
        </ContentContainer>
      </LayoutStyled>
    </Layout>
  );
}
