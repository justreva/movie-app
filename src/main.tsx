import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./components/layout/AppLayout";
import "./index.scss";
import { StyleProvider } from "@ant-design/cssinjs";

import Home from "./pages/home/Home";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StyleProvider layer>
      <AppLayout>
        <Home />
      </AppLayout>
    </StyleProvider>
  </React.StrictMode>
);
