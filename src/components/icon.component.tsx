import { MaterialIcon } from "../utils/icons.ts";
import React from "react";
import { Link } from "react-router-dom";

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
    className: `material-symbols-outlined hover:bg-gray-200 ${className ?? ""}`,
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
