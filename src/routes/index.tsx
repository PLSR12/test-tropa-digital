import type { ReactElement } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NAVIGATION_CONSTANTS from "../constants/navigations";
import PrivateRoute from "./privateRoute";
import Login from "../pages/Login";
import EventsPage from "../pages/Events";

export default function Router(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={NAVIGATION_CONSTANTS.LOGIN} replace />} />

      <Route element={<Login />} path={NAVIGATION_CONSTANTS.LOGIN} />

      <Route element={<PrivateRoute />}>
        <Route path={NAVIGATION_CONSTANTS.EVENTS} element={<EventsPage />} />
      </Route>
    </Routes>
  );
}
