import { Employer } from "../../models/employer.types";
import "./employer-card-styles.css";
import { INDUSTRY_SECTOR_CODES } from "../../data/naics-codes.ts";
import { MaterialIcon } from "../../utils/icons.ts";

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
  return (
    <div className={"employer-card"}>
      <div className={"employer-company-wrapper"}>
        <div className={"flex"}>
          <h3 className={"employer-name"}>{employer.name}</h3>
          <span
            className={
              "material-symbols-outlined mt-0.5 ml-2 hover:cursor-pointer"
            }
            onClick={showNameChangeModal}
          >
            {MaterialIcon.Edit}
          </span>
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
