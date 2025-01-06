import { appTitlte } from "@codeBase/src/common/appTitle";
import React, { useEffect } from "react";

const Orders = () => {
  useEffect(() => {
    document.title = appTitlte.orders;
  }, []);
  return <div></div>;
};

export default Orders;
