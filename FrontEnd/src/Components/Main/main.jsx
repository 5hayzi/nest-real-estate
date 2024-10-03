import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../../Style/index.css";
import { Provider } from "react-redux";
import { store } from "../../Redux/store.js";
import { persistor } from "../../Redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";
import Homepage from "./Homepage/Homepage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
]);
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
