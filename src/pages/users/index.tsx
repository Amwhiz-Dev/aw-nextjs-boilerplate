import { userColumns } from "@/component/Table/columns";
import { GenericTable } from "@/component/Table/GenericTable";
import { userData } from "@/constants/users";
import DashBoardLayout from "@/Layout/dashboardLayout";

const User = () => {
  return (
    <>
      <DashBoardLayout>
        <GenericTable
          data={userData}
          columns={userColumns}
          rowLink={(row) => `/users/${row.id}`}
        />
      </DashBoardLayout>
    </>
  );
};

export default User;
