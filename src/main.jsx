import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    <Toaster
      position="top-center"
      gutter={12}
      containerStyle={{ margin: "8px" }}
      toastOptions={{
        success: {
          duration: 2000,
        },
        error: {
          duration: 5000,
        },
        style: {
          maxWidth: "500px",
          padding: "16px 24px",
          backgroundColor: "#fff",
          fontFamily: "Dana DemiBold",
          color: "#353535",
          fontSize: "16px",
        },
      }}
    />
  </BrowserRouter>
  // </React.StrictMode>
);
