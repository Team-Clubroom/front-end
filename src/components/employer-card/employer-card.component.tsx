import { Employer } from "../../models/employer.types";
import "./employer-card-styles.css";

interface EmployerCardProps {
  employer: Employer;
}

export const EmployerCard = ({ employer }: EmployerCardProps) => {
  return (
    <div className={"employer-card"}>
      <div className={"employer-company-wrapper"}>
        <h3 className={"employer-name"}>{employer.name}</h3>
        <div className={"flex gap-2"}>
          <p className={"employer-sector"}>{employer.industrySectorCode}</p>
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
