import { Provider } from "react-redux";

import { AppRouter } from "./routes/AppRouter";
import { GlobalStyle } from "./styleComponents/GlobalStyles";

import { store } from "./redux/store";
import { ThemeProvider } from "styled-components";
import { theme } from "./styleComponents/theme";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
