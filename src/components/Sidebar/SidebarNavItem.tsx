import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  label: string;
  isActive: boolean;
};

const SidebarNavItem = (props: Partial<Props>) => {
  return (
    <li>
      <a
        className={`inline-flex items-center gap-4 py-2 ${
          props.isActive ? "text-white" : "text-white/50"
        } duration-200`}
        href="#"
      >
        <span className="text-2xl hover:text-white duration-300">
          {props.children}
        </span>
        <span className="flex-1 text-[14px] font-medium hover:text-white duration-300 ">
          {props.label}
        </span>
      </a>
    </li>
  );
};

export default SidebarNavItem;
