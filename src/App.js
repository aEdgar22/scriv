import { Provider } from "react-redux";

import { AppRouter } from "./routes/AppRouter";
import { GlobalStyle } from "./styleComponents/GlobalStyles";

import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <AppRouter />
    </Provider>
  );
}

export default App;
