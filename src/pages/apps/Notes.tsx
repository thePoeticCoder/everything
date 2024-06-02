import { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const Notes = () => {
  const [angle, setAngle] = useState<number>(0);

  return (
    <div className="admin-container">
      <AdminSidebar />
      <h1>This feature is coming soon.</h1>
    </div>
  );
};

export default Notes;
