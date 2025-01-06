import { appTitlte } from "@codeBase/src/common/appTitle";
import React, { useEffect } from "react";

const Inventory = () => {
  useEffect(() => {
    document.title = appTitlte.inventory;
  }, []);
  return <div></div>;
};

export default Inventory;
