import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Shimer from "./components/Shimer";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Body from "./components/Body";
import SearchVideosPage from "./components/SearchVideosPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "",
            element: <MainContainer />,
          },
          {
            path: "watch",
            element: <WatchPage />,
          },
          {
            path: "/search/:text",
            element: <SearchVideosPage />,
          },
        ],
      },
    ],
    errorElement: <Shimer />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
