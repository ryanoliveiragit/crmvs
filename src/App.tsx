import { Sidebar } from "./components/Sidebar/Sidebar";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import { AppContainer } from "./styles/App";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppContainer>
        <Sidebar />
        <h1>teste</h1>
        <GlobalStyle />
      </AppContainer>
    </ThemeProvider>
  );
}
