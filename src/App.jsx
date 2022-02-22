import { ThemeProvider } from "styled-components";

import Header from "./components/common/Header";
import Router from "./pages/Router";
import GlobalStyle from "./styles/globalStyle";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Router />
    </ThemeProvider>
  );
}

export default App;
