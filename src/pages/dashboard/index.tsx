"use client";

//  React & Hooks ──
import { useEffect } from "react";

//  Shadcn Components
import { Card, CardHeader, CardTitle, CardContent } from "@/ui/card";

//  Modal
import { ModalTrigger } from "@template/component/Dialogue";

//  Context & Layout ─
import { usePermission } from "@template/context/PermissionContext";
import DashBoardLayout from "@/Layout/dashboardLayout";
import { transactionColumns } from "@/component/Table/columns";
import { GenericTable } from "@/component/Table/GenericTable";

//  Data
import { transactionData } from "@/constants/transactionData";
import { reportData } from "@/constants/reports";

// Enums
import { Permission } from "@/enum/permission.enum";
import { DashboardText } from "@/enum/dashboard.enum";

const Dashboard = () => {
  const { hasPermission, setPermissions } = usePermission();

  useEffect(() => {
    setPermissions([Permission.DASHBOARD]);
  }, [setPermissions]);

  const canView = hasPermission(Permission.DASHBOARD);

  return (
    <DashBoardLayout>
      {/* <h1 className="pb-4 text-2xl font-bold">Dashboard</h1> */}

      {/* <div className="pb-6">
        <ModalTrigger
          label="Open Modal"
          title="Delete Item?"
          description="Are you sure you want to delete this item?"
          onOk={() => console.log("Confirmed")}
          onCancel={() => console.log("Cancelled")}
        />
      </div> */}
      {/* Report Cards */}
      {canView && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-8">
          {reportData.map((report) => (
            <Card key={report.title} className="p-4">
              <CardHeader>
                <CardTitle className="text-lg">{report.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{report.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Table Section */}
      {canView && (
        <Card>
          <CardHeader>
            <CardTitle>{DashboardText.TRANSACTION_TABLE}</CardTitle>
          </CardHeader>

          <CardContent className="overflow-x-auto">
            <GenericTable data={transactionData} columns={transactionColumns} />
          </CardContent>
        </Card>
      )}
    </DashBoardLayout>
  );
};

export default Dashboard;
