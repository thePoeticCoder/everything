import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Customers = lazy(() => import("./pages/Customers"));
const Trasactions = lazy(() => import("./pages/Trasactions"));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/dashboard" element={<Trasactions />} />
      </Routes>
    </Router>
  );
};
export default App;
