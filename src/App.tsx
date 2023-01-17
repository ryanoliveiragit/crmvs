import { Sidebar } from "./components/Sidebar/Sidebar";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import { AppContainer } from "./styles/App";

import { Router } from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import { MyContext } from "./context/MyContext";
import { useState } from "react";


export function App() {
  const [itens, setItens] = useState([
    {
      company: 'Apple',
      value: 10,
      percentage: 0,
      id: 1,
    }
  ])
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AppContainer>
          <MyContext.Provider value={{itens, setItens}}>
            <Sidebar />
            <Router />
          </MyContext.Provider>
          <GlobalStyle />
        </AppContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
}
