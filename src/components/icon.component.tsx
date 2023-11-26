import { MaterialIcon } from "../utils/icons.ts";
import React from "react";
import { Link } from "react-router-dom";
import { classIf } from "../utils/tailwind.utils.ts";

export const Icon = ({
  name,
  onClick,
  to,
  className,
}: {
  name: MaterialIcon;
  to?: string;
  className?: string;
  onClick?: React.MouseEventHandler;
}) => {
  const props = {
    className: `material-symbols-outlined ${classIf(
      Boolean(onClick),
      "hover:bg-gray-200",
    )} ${className ?? ""}`,
    style: { fontSize: "20px" },
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
