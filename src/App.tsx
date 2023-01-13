import { Sidebar } from "./components/Sidebar/Sidebar";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import { AppContainer } from "./styles/App";

import { Router } from "./routes/Router";
import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AppContainer>
          <Sidebar />
          <Router />
          <GlobalStyle />
        </AppContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
}
