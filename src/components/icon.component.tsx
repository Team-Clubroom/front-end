import { MaterialIcon } from "../utils/icons.ts";
import React from "react";
import { Link } from "react-router-dom";
import { classIf } from "../utils/tailwind.utils.ts";

interface IconProps {
  name: MaterialIcon;
  to?: string;
  className?: string;
  onClick?: React.MouseEventHandler;
  size?: "24px" | "28px" | "32px" | "48px" | "64px";
}

export const Icon = ({ name, onClick, to, className, size }: IconProps) => {
  const props = {
    className: `material-symbols-outlined rounded-full transition-colors ${classIf(
      Boolean(onClick || to),
      "hover:bg-gray-300 p-1",
    )} ${className ?? ""}`,
    style: { fontSize: size || "20px" },
  };

  return onClick ? (
    <button {...props} onClick={onClick}>
      {name}
    </button>
  ) : to ? (
    <Link {...props} to={to}>
      {name}
    </Link>
  ) : (
    <span {...props}>{name}</span>
  );
};
