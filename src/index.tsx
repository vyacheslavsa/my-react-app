import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createTheme, MantineProvider } from "@mantine/core";
import { store } from "./store/store.ts";
import "@mantine/core/styles.css";
import "./i18n/i18n.js";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.tsx";
import dayjs from "dayjs";

const App = () => {
  const theme = createTheme({});

  console.log(dayjs(1719316019239).format("HH:mm:ss DD/MM/YYYY"));

  return (
    <Provider store={store}>
      <MantineProvider>
        <RouterProvider router={router} />
      </MantineProvider>
    </Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
