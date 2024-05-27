import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import Root from "./Routes/Root";
import PageError from "./Pages/PageError";
import PageHome from "./Pages/PageHome";
import PageAlbums from "./Pages/PageAlbums";
import PageLogin from "./Pages/PageLogin";
import PageCreateAccount from "./Pages/PageCreateAccount";
import PageArticles from "./Pages/PageArticles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageError />,
    children: [
      { path: "home", element: <PageHome /> },
      { path: "albums/*", element: <PageAlbums /> },
      { path: "articles/*", element: <PageArticles /> },
      { path: "login", element: <PageLogin /> },
      { path: "create-account", element: <PageCreateAccount /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
