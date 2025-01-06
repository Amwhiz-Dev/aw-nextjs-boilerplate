import { appTitlte } from "@codeBase/src/common/appTitle";
import React, { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    document.title = appTitlte.dashboard;
  }, []);
  return <div></div>;
};

export default Dashboard;
