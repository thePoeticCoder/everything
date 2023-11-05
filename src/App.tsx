import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loaders from "./components/Loaders";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Customers = lazy(() => import("./pages/Customers"));
const Trasactions = lazy(() => import("./pages/Trasactions"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loaders />}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/dashboard" element={<Trasactions />} />
          {/* charts,apps*/}
        </Routes>
      </Suspense>
    </Router>
  );
};
export default App;
