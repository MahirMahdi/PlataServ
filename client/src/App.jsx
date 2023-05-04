import { Routes, Route } from "react-router-dom";
import "../src/css/App.css";
import { lazy, Suspense } from "react";
import "@fontsource/poppins";
import "@fontsource/roboto";
import "@fontsource/cabin";
import "@fontsource/inter";

const Menu = lazy(() => import("./pages/POS/Menu"));
const Orders = lazy(() => import("./pages/POS/Orders"));
const Loading = lazy(() => import("./components/Shared/Loading"));
const Home = lazy(() => import("./pages/Home"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Inventory = lazy(() => import("./pages/Inventory"));
const Finance = lazy(() => import("./pages/Finance"));
const Sales = lazy(() => import("./pages/Sales"));
const Unauthorized = lazy(() => import("./pages/Unauthorized"));
const Error404 = lazy(() => import("./pages/Error"));
const ProtectedRoute = lazy(() => import("./components/Route/ProtectedRoute"));
const RouteHandler = lazy(() => import("./components/Route/RouteHandler"));
const POSProvider = lazy(() => import("./contexts/POSContext"));
const HelpAndSupport = lazy(() => import("./pages/HelpAndSupport"));

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/route-handler" element={<RouteHandler />} />
        <Route path="/help-support" element={<HelpAndSupport />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route element={<ProtectedRoute providedRole="cashier" />}>
          <Route
            path="/menu"
            element={
              <POSProvider>
                <Menu />
              </POSProvider>
            }
          />
          <Route
            path="/orders"
            element={
              <POSProvider>
                <Orders />
              </POSProvider>
            }
          />
        </Route>
        <Route element={<ProtectedRoute providedRole="manager" />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/sales" element={<Sales />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Suspense>
  );
}
