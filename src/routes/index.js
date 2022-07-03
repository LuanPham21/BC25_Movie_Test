import { Route } from "react-router-dom";
import { lazy } from "react";

const routes = [
  //Home Page
  {
    path: "",
    element: lazy(() => import("./../containers/HomeTemplate")),
    nested: [
      {
        path: "",
        element: lazy(() => import("./../containers/HomeTemplate/HomePage")),
      },
      {
        path: "about",
        element: lazy(() => import("./../containers/HomeTemplate/AboutPage")),
      },
      {
        path: "list-movie",
        element: lazy(() =>
          import("./../containers/HomeTemplate/ListMoviePage")
        ),
      },
      {
        path: "hook",
        element: lazy(() => import("./../containers/HomeTemplate/HooksPage")),
      },
      {
        path: "hoc",
        element: lazy(() => import("./../containers/HomeTemplate/HocPage")),
      },
    ],
  },
  //Admin page
  {
    path: "admin",
    element: lazy(() => import("./../containers/AdminTemplate")),
    nested: [
      {
        path: "dashboard",
        element: lazy(() =>
          import("./../containers/AdminTemplate/DashboardPage")
        ),
      },
      {
        path: "add-user",
        element: lazy(() =>
          import("./../containers/AdminTemplate/AddUserPage")
        ),
      },
      {
        path: "add-movie",
        element: lazy(() =>
          import("./../containers/AdminTemplate/AddMoviePage")
        ),
      },
    ],
  },
  //Auth Page
  {
    path: "auth",
    element: lazy(() => import("./../containers/AdminTemplate/AuthPage")),
  },
];

const renderRoutes = () => {
  return routes.map((route) => {
    if (route.nested) {
      return (
        <Route key={route.path} path={route.path} element={<route.element />}>
          {route.nested.map((item) => (
            <Route
              key={route.path}
              path={item.path}
              element={<item.element />}
            />
          ))}
        </Route>
      );
    } else {
      return (
        <Route key={route.path} path={route.path} element={<route.element />} />
      );
    }
  });
};

export { renderRoutes };
