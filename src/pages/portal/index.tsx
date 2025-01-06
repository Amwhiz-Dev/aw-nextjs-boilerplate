import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Portal = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/portal/dashboard");
  }, [router]);

  return <div></div>;
};

export default Portal;
