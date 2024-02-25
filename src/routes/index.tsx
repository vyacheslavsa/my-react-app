import { FC } from "react";
import { BrowserRouter, Navigate, Route, Routes as RoutesCore } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Layout from "../components/Layout";

const Routes: FC = () => {
  return (
    <BrowserRouter>
      <RoutesCore>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<div>settings</div>} />
          <Route path="*" element={<h2>Ресурс не найден</h2>} />
        </Route>
      </RoutesCore>
    </BrowserRouter>
  );
};

export default Routes;
