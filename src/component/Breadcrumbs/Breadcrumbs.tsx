"use client";

//  External Libraries
import { BreadCrumb } from "primereact/breadcrumb";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslation } from "react-i18next";

//  App Data
import { sideMenu } from "@template/common/sideMenu";

export interface BreadcrumbsProps {
  showIcon?: boolean;
  classNames?: string;
}

export default function Breadcrumbs({
  showIcon = false,
  classNames = "",
}: BreadcrumbsProps) {
  const pathname = usePathname();
  const { t } = useTranslation("common");

  /** ---------------------------
   * Build menu lookup map
   * "/portal" → { label, to, ... }
   ----------------------------- */
  const menuMap: Record<string, any> = {};

  sideMenu.forEach((item) => {
    if (item.to) menuMap[item.to] = item;

    item.children?.forEach((child) => {
      menuMap[child.to] = child;
    });
  });

  /** ---------------------------
   * Extract path segments
   ----------------------------- */
  const segments = pathname.replace(/\/$/, "").split("/").filter(Boolean);

  /** ---------------------------
   * Build breadcrumb items
   ----------------------------- */
  const items = segments.map((seg, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");

    const match = menuMap[href];

    const label = match
      ? t(match.label)
      : seg.charAt(0).toUpperCase() + seg.slice(1);

    const Icon = match?.Icon;

    return {
      label,
      template: () => (
        <Link
          href={href}
          className={`flex items-center gap-2 ${
            index === segments.length - 1
              ? "text-blue-600 font-semibold"
              : "text-gray-700"
          } hover:underline`}
        >
          {showIcon && Icon && <Icon className="w-4 h-4" />}
          {label}
        </Link>
      ),
    };
  });

  return <BreadCrumb model={items} className={classNames} />;
}
