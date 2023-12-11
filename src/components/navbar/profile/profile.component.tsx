import {
  useAuthActionContext,
  useAuthContext,
} from "../../../contexts/auth/auth.context.tsx";
import { useMenuContext } from "../../../contexts/context-menu/context-menu.context.tsx";
import React, { useEffect, useState } from "react";
import { MaterialIcon } from "../../../utils/icons.ts";
import { Icon } from "../../icon.component.tsx";
import { ApiRoutes } from "../../../models/api.types.ts";
import { useFetch } from "../../../models/useFetch.ts";
import { dashboardRootStyles } from "../../../sharedStyles/dashboard-root.styles.tsx";

export const ProfileComponent = () => {
  const { logout, setAdminPending } = useAuthActionContext();
  const user = useAuthContext();
  const { showContextMenu, updateChildren } = useMenuContext();
  const { customFetch } = useFetch();

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    // FIXME: not a good way to update the contents of the menu
    updateChildren(profileSection());
  }, [user, error, isLoading]);

  const handleAdminRequest = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLoading(true);
    setError("");
    try {
      if (user.isAdmin) {
        return setError("You are already an admin");
      } else if (user.adminPending) {
        return setError("You have already requested admin permission");
      }
      await customFetch(ApiRoutes.RequestAdmin, "POST");
      setAdminPending();
      console.log("Success");
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const profileSection = () => {
    return (
      <div className={"flex flex-col items-center px-10 py-2"}>
        <Icon
          name={MaterialIcon.Person}
          size={"64px"}
          className={"text-white bg-gray-500 p-3"}
        />
        <h2 className={"font-bold text-lg"}>
          <span>{user.firstName}</span> <span>{user.lastName}</span>
        </h2>
        <h3 className={"text-base text-gray-600"}>{user.email}</h3>
        <p className={"text-xs text-gray-500"}>
          {user.isAdmin ? "Administrator" : "Basic User"}
        </p>
        {isLoading ? (
          <span>Requesting...</span>
        ) : user.adminPending ? (
          <p>Admin request pending</p>
        ) : (
          !user.isAdmin && (
            <button className={"text-blue-500"} onClick={handleAdminRequest}>
              Request admin account
            </button>
          )
        )}
        {error && <p className={dashboardRootStyles.error}>{error}</p>}
        <button
          className={
            "text-center w-full border border-cyan-600 text-cyan-600 rounded py-1 px-8 mt-3 hover:bg-cyan-600" +
            " hover:text-white font-semibold transition-colors"
          }
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    );
  };

  const handlePopupOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    showContextMenu({
      event,
      width: "auto",
      height: "auto",
      alignToEdge: true,
      marginTop: 10,
      children: profileSection(),
      menu: [],
    });
  };
  return (
    <button
      onClick={handlePopupOpen}
      className={
        "text-white bg-cyan-600 font-bold hover:bg-cyan-700 flex rounded-full p-3 transition-colors"
      }
    >
      <span>{user.firstName[0].toUpperCase()}</span>
      <span>{user.lastName[0].toUpperCase()}</span>
    </button>
  );
};
