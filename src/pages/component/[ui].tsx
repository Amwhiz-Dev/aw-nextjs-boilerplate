"use client";

import CustomInputText from "@template/component/inputs/CustomInputText";
import Layout from "@template/Layout";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState } from "react";

const componentMap: Record<string, any> = {
  custominput: dynamic(
    () => import("@template/component/inputs/CustomInputText")
  ),
  customnumber: dynamic(
    () => import("@template/component/inputs/CustomNumber")
  ),
  custompassword: dynamic(
    () => import("@template/component/inputs/CustomPassword")
  ),
  customautocomplete: dynamic(
    () => import("@template/component/inputs/CustomAutoComplete")
  ),
  customcheckbox: dynamic(
    () => import("@template/component/inputs/CustomCheckbox")
  ),
  customchips: dynamic(() => import("@template/component/inputs/CustomChips")),
  customtextarea: dynamic(
    () => import("@template/component/inputs/CustomTextarea")
  ),
  customtoggle: dynamic(
    () => import("@template/component/inputs/CustomToggle")
  ),
  customradio: dynamic(() => import("@template/component/inputs/CustomRadio")),
  customswitch: dynamic(
    () => import("@template/component/inputs/CustomSwitch")
  ),
};

export default function DynamicComponentPage() {
  const router = useRouter();
  const { ui } = router.query;

  if (!ui) return null;

  const key = String(ui).toLowerCase();
  const Component = componentMap[key];

  if (!Component) return <div>Component Not Found</div>;

  //  Local States for Demo Purposes ─
  const [text, setText] = useState("");
  const [num, setNum] = useState<number | null>(null);
  const [pwd, setPwd] = useState("");
  const [checked, setChecked] = useState(false);
  const [chips, setChips] = useState([]);
  const [textarea, setTextarea] = useState("");
  const [toggle, setToggle] = useState(false);
  const [radio, setRadio] = useState("");
  const [sw, setSw] = useState(false);

  //  Render Component With Sample Props
  const renderPreview = () => {
    switch (key) {
      case "custominput":
        return <Component label="Name" value={text} onChange={setText} />;

      case "customnumber":
        return <Component label="Age" value={num} onChange={setNum} />;

      case "custompassword":
        return <Component label="Password" value={pwd} onChange={setPwd} />;

      case "customautocomplete":
        return (
          <Component
            label="Search City"
            value={text}
            suggestions={["Chennai", "Mumbai", "Delhi"]}
            onChange={setText}
            completeMethod={() => {}}
          />
        );

      case "customcheckbox":
        return (
          <Component
            label="Accept Terms"
            checked={checked}
            onChange={setChecked}
          />
        );

      case "customchips":
        return <Component label="Tags" value={chips} onChange={setChips} />;

      case "customtextarea":
        return (
          <Component
            label="Description"
            value={textarea}
            onChange={setTextarea}
          />
        );

      case "customtoggle":
        return (
          <Component
            label="Enable Notifications"
            checked={toggle}
            onChange={setToggle}
          />
        );

      case "customradio":
        return (
          <Component
            label="Gender"
            value={radio}
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
            onChange={setRadio}
          />
        );

      case "customswitch":
        return <Component label="Activate" value={sw} onChange={setSw} />;

      default:
        return <Component />;
    }
  };

  return (
    <Layout>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* ─── Title Section ───────────────────────────────────────────── */}
          <div className="md:col-span-1">
            <div className="p-4 border rounded-lg bg-white shadow-sm">
              <h1 className="title">{key}</h1>
              {/* <p className="text-sm text-gray-600">
                Preview of the selected UI component.
              </p> */}
            </div>
          </div>

          {/* ─── Component Preview Section ───────────────────────────────── */}
          <div className="md:col-span-2">
            <div className="p-6 border rounded-lg bg-white shadow-sm min-h-[200px] flex items-start">
              {renderPreview()}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
