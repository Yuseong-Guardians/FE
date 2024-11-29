import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import * as serviceWorker from "./serviceWorker";
import { GlobalStyle } from "./themes/globalStyle";
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toast.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      staleTime: 60_000,
      retry: 2,
    },
  },
});

root.render(
  <QueryClientProvider client={queryClient}>
    <HashRouter>
      <App />
      <ToastContainer
        toastStyle={{
          backgroundColor: "#8E8E8E",
          color: "white",
          fontSize: "26px",
          width: "700px",
          borderRadius: "60px",
        }}
      />
      <GlobalStyle />
    </HashRouter>
  </QueryClientProvider>
);

serviceWorker.unregister();
