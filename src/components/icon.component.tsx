import { MaterialIcon } from "../utils/icons.ts";
import React from "react";

export const Icon = ({
  name,
  onClick,
  className,
}: {
  name: MaterialIcon;
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
  ) : (
    <span {...props}>{name}</span>
  );
};
