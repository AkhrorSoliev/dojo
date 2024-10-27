import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import { Create, Dashboard, Login, Project, Signup } from "./pages";

// layouts
import MainLayout from "./layouts/MainLayout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "/create",
          element: <Create />,
        },
        {
          path: "/project/:id",
          element: <Project />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
