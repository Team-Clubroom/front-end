import { navbarStyles } from "../navbar.styles.tsx";
import {
  useAuthActionContext,
  useAuthContext,
} from "../../../contexts/auth/auth.context.tsx";
import { useMenuContext } from "../../../contexts/context-menu/context-menu.context.tsx";
import React from "react";
import { MaterialIcon } from "../../../utils/icons.ts";
import { Icon } from "../../icon.component.tsx";

export const ProfileComponent = () => {
  const { logout } = useAuthActionContext();
  const user = useAuthContext();
  const showContextMenu = useMenuContext();
  const handleLogout = () => {
    logout();
  };

  const renderProfile = () => (
    <div className={"flex flex-col items-center px-5 py-2"}>
      <Icon name={MaterialIcon.Person} size={"32px"} className={""} />
      <h2 className={"font-bold text-lg"}>
        <span>{user.firstName}</span> <span>{user.lastName}</span>
      </h2>
      <h3 className={"text-base text-gray-600"}>{user.email}</h3>
      <p className={"text-xs text-gray-500"}>
        {user.isAdmin ? "Administrator" : "Basic User"}
      </p>
      <button
        className={
          "text-center w-full border border-blue-500 text-blue-500 rounded py-1 px-8 mt-3 hover:bg-blue-500 hover:text-white font-semibold transition-colors"
        }
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );

  const handlePopupOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    showContextMenu({
      event,
      width: "auto",
      height: "auto",
      alignToEdge: true,
      children: renderProfile(),
      menu: [],
    });
  };
  return (
    <div className={navbarStyles.authButtons}>
      <button
        onClick={handlePopupOpen}
        className={
          "bg-white font-bold hover:bg-gray-600 flex rounded-full p-2 transition-colors"
        }
      >
        <span>{user.firstName[0]}</span>
        <span>{user.lastName[0]}</span>
      </button>
    </div>
  );
};
