import { Employer } from "../../models/employer.types";
import "./employer-card-styles.css";
import { INDUSTRY_SECTOR_CODES } from "../../data/naics-codes.ts";
import { useMenuContext } from "../../contexts/context-menu/context-menu.context.tsx";
import React from "react";
import { MaterialIcon } from "../../utils/icons.ts";
import { Icon } from "../icon.component.tsx";

interface EmployerCardProps {
  employer: Employer;
  showNameChangeModal: () => void;
}

export const EmployerCard = ({
  employer,
  showNameChangeModal,
}: EmployerCardProps) => {
  const { shortName, color } =
    INDUSTRY_SECTOR_CODES[employer.industrySectorCode];
  const showContextMenu = useMenuContext();

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    showContextMenu({
      event,
      menu: [
        {
          text: "Merge Employer",
          icon: MaterialIcon.Merge,
          onClick: () => {
            console.log("merge");
          },
        },
        {
          text: "Split Employer",
          icon: MaterialIcon.Split,
          onClick: () => {
            console.log("split");
          },
        },
        {
          text: "Change Name",
          icon: MaterialIcon.Person,
          onClick: showNameChangeModal,
        },
        {
          text: "Delete",
          icon: MaterialIcon.Delete,
          onClick: () => {
            console.log("delete");
          },
        },
      ],
    });
  }

  const handleEdit: React.MouseEventHandler = () => {
    console.log("edit");
  };

  return (
    <div className={"employer-card"}>
      <div className={"employer-company-wrapper"}>
        <div className={"flex justify-between items-center"}>
          <h3 className={"employer-name"}>{employer.name}</h3>
          <div className={"flex gap-1"}>
            <div className={"employer-header-icons"}>
              <Icon
                name={MaterialIcon.Edit}
                onClick={handleEdit}
                className={"text-gray-600"}
              />
              <Icon
                name={MaterialIcon.Network}
                to={"/dashboard/graph"}
                className={"text-gray-600"}
              />
            </div>
            <Icon
              name={MaterialIcon.More_Vert}
              onClick={handleClick}
              className={"text-gray-600"}
            />
          </div>
        </div>
        <div className={"flex gap-2 items-center"}>
          <p className={"employer-sector"} style={{ backgroundColor: color }}>
            {shortName}
          </p>
          <span className={"text-gray-600 italic text-sm"}>
            {employer.status}
          </span>
        </div>
      </div>
      <p className={"text-sm text-gray-600"}>
        Auctor utamur verear neque offendit habitant veri. Offendit legere
        principes signiferumque sapientem. Iaculis felis imperdiet nihil
      </p>
      <div className={"employer-date-wrapper"}>
        <span>
          <span className={"font-medium text-gray-700"}>Founded: </span>
          <span className={"text-gray-500"}>{employer.foundedDate}</span>
        </span>
        {employer.dissolvedDate && (
          <span>
            <span className={"font-medium text-gray-700"}>Dissolved: </span>
            <span className={"text-gray-500"}>{employer.dissolvedDate}</span>
          </span>
        )}
      </div>
      <div className={"employer-address-wrapper"}>
        <p className={"font-medium text-gray-700"}>Address</p>
        <p>
          {employer.address.line1}
          {employer.address.line2 && `, ${employer.address.line2}`}
        </p>
        <p>
          {employer.address.city}, {employer.address.state}{" "}
          {employer.address.zipCode}
        </p>
      </div>
    </div>
  );
};
