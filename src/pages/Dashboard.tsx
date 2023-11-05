import AdminSideBar from "../components/AdminSideBar";

const Dashboard = () => {
  return (
    <div className="adminContainer">
      <AdminSideBar />
      <main>inside admin sidebar</main>
    </div>
  );
};

export default Dashboard;
