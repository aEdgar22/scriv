import { Provider } from "react-redux";

import { AppRouter } from "./routes/AppRouter";
<<<<<<< HEAD
import { GlobalStyle } from "./styleComponents/GlobalStyles";

function App() {
  return (
    <>
    <GlobalStyle />
    <AppRouter />
    </>
  )
=======
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
>>>>>>> f50623ba2278196a97cc9db047c89920389f63be
}

export default App;
