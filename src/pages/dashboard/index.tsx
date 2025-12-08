import { useEffect } from "react";
import Layout from "@template/Layout";
import { ModalTrigger } from "@template/component/Dialogue";
import { usePermission } from "@template/context/PermissionContext";

const Dashboard = () => {
  const { hasPermission, setPermissions } = usePermission();

  useEffect(() => {
    setPermissions(["dashboard"]);
  }, [setPermissions]);

  return (
    <Layout>
      <h1>Dashboard</h1>
      {hasPermission("dashboard") && <p>You have access to view dashboard.</p>}
      <ModalTrigger
        label="Open Modal"
        title="Delete Item?"
        description="Are you sure you want to delete this item?"
        onOk={() => console.log("Confirmed")}
        onCancel={() => console.log("Cancelled")}
      />
    </Layout>
  );
};

export default Dashboard;
