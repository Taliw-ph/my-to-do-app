import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TodoPage from "./pages/TodoPage";
import AppLayout from "./components/Layout";

export const PATH = {
  home: "/home",
  todo: "/to-do",
};

export const router = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to={PATH.home} replace />,
  },
  {
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={PATH.home} replace />,
      },
      {
        path: PATH.home,
        element: <HomePage />,
      },
      {
        path: PATH.todo,
        element: <TodoPage />,
      },
    ],
  },
]);
