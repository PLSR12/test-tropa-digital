import { ConfigProvider } from "antd";
import { antDefaultTheme } from "./styles/ant/default";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import Router from "./routes";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import locale from "antd/locale/pt_BR";
import { makeServer } from "./mirage/server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";

function App() {
  const queryClient = new QueryClient();
  dayjs.extend(utc);
  dayjs.extend(timezone);

  // iniciar servidor simulando uma api
  useEffect(() => {
    makeServer();
  }, []);

  return (
    <ConfigProvider theme={antDefaultTheme} locale={locale}>
      <GlobalStyle />
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
