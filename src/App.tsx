import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Transaction = lazy(() => import("./pages/Transaction"));
const Customers = lazy(() => import("./pages/Customers"));
const NewProduct = lazy(() => import("./pages/management/NewProduct"));
const ProductManagement = lazy(
  () => import("./pages/management/ProductManagement")
);
const TransactionManagement = lazy(
  () => import("./pages/management/TransactionManagement")
);

const BarCharts = lazy(() => import("./pages/charts/BarCharts"));
const LineCharts = lazy(() => import("./pages/charts/LineCharts"));
const PieCharts = lazy(() => import("./pages/charts/PieCharts"));

const Stopwatch = lazy(() => import("./pages/apps/Stopwatch"));
const Coupon = lazy(() => import("./pages/apps/Coupon"));
const Toss = lazy(() => import("./pages/apps/Toss"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product" element={<Products />} />
          <Route path="/customer" element={<Customers />} />
          <Route path="/transaction" element={<Transaction />} />

          {/* Charts */}

          <Route path="/chart/bar" element={<BarCharts />} />
          <Route path="/chart/pie" element={<PieCharts />} />
          <Route path="/chart/line" element={<LineCharts />} />

          {/* Apps */}

          <Route path="/app/stopwatch" element={<Stopwatch />} />
          <Route path="/app/coupon" element={<Coupon />} />
          <Route path="/app/toss" element={<Toss />} />

          {/* Management */}
          <Route path="/product/new" element={<NewProduct />} />
          <Route path="/product/:id" element={<ProductManagement />} />
          <Route path="/transaction/:id" element={<TransactionManagement />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
