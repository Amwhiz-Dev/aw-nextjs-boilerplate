"use client";

import { Card } from "primereact/card";
import { useRouter } from "next/navigation";
import Layout from "@template/Layout";
import Head from "next/head";
import { appTitlte } from "@template/common/appTitle";

const componentList = [
  { label: "Input", key: "custominput" },
  { label: "Number", key: "customnumber" },
  { label: "Password", key: "custompassword" },
  { label: "Auto Complete", key: "customautocomplete" },
  { label: "Checkbox", key: "customcheckbox" },
  { label: "Chips", key: "customchips" },
  { label: "Textarea", key: "customtextarea" },
  { label: "Toggle", key: "customtoggle" },
  { label: "Radio", key: "customradio" },
  { label: "Switch", key: "customswitch" },
];

const ComponentsIndex = () => {
  const router = useRouter();

  const handleClick = (key: string) => {
    router.push(`/component/${key}`);
  };

  return (
    <>
      <Head>
        <title>{appTitlte.component}</title>
      </Head>
      <Layout>
        <h1>List of Component</h1>
        <div className="component_layout">
          {componentList.map((item) => (
            <Card
              key={item.key}
              title={item.label}
              className="cursor-pointer transition-all hover:shadow-xl text-primary-menu"
              onClick={() => handleClick(item.key)}
            >
              <p className="text-sm opacity-80">
                Click to view {item.label} component demo
              </p>
            </Card>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default ComponentsIndex;
