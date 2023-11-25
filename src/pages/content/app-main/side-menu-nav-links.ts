import { MaterialIcon } from "../../../utils/icons.ts";

export const SIDE_MENU_NAV_LINKS = [
  { to: "/dashboard", icon: MaterialIcon.Dashboard, text: "Dashboard" },
  {
    to: "/dashboard/employers",
    icon: MaterialIcon.Apartment,
    text: "Employers",
  },
  { to: "/dashboard/employees", icon: MaterialIcon.Badge, text: "Employees" },
  { to: "/dashboard/graph", icon: MaterialIcon.Account_Tree, text: "Graph" },
];
