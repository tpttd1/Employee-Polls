import React, { Suspense } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Error from "./components/Error";

const AppRoute = () => {
  let routes = useRoutes([
    { path: "login", element: <Login /> },
    { path: "/error", element: <Error /> },
    { path: "/questions", element: <Home /> },
    { path: "/questions/:question_id", element: <Home /> },
    { path: "/leaderboard", element: <Home /> },
    { path: "/new", element: <Home /> },
    { path: "/", element: <Home /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <Suspense fallback={<div className="loading" />}>
      <Router>
        <AppRoute />
      </Router>
    </Suspense>
  );
};

export default App;
