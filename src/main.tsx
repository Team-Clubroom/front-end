import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AuthContextProvider from "./contexts/auth/auth.context.tsx";
import { ContextMenuProvider } from "./contexts/context-menu/context-menu.context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ContextMenuProvider>
        <App />
      </ContextMenuProvider>
    </AuthContextProvider>
  </React.StrictMode>,
);
