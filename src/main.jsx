import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { setupCrud } from "react-smart-crud";
import toast from "react-hot-toast";

setupCrud({
   baseUrl: "http://localhost:5000/",
  getToken: () => localStorage.getItem("token"),
  notify: (type, message) => {
    if (type === "success") toast.success(message);
    if (type === "error") toast.error(message);
  },
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
