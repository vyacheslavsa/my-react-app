import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createTheme, MantineProvider } from "@mantine/core";
import { store } from "./store/store.ts";
import Routes from "./routes/index.tsx";
import "@mantine/core/styles.css";
import "./i18n/i18n.js";

const App = () => {
  const theme = createTheme({});

  return (
    <Provider store={store}>
      <MantineProvider theme={theme}>
        <Routes />
      </MantineProvider>
    </Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
