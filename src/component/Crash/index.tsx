"use client";

import { useModal } from "@template/context/ModalProvider";

const CrashTestClient = () => {
  throw new Error("Render crash test");
};

export default CrashTestClient;
