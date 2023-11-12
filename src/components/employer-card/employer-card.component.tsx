import { EmployerCardStyles } from "./employer-card-styles";
import { Employer } from "../../models/employer.types";

interface EmployerCardProps {
  employer: Employer;
}

export const EmployerCard = (props: EmployerCardProps) => {
  return (
    <div className={EmployerCardStyles.card}>
      <div className={EmployerCardStyles.companyWrapper}>
        <h1 className={EmployerCardStyles.name}>{props.employer.name}</h1>
        <p className={EmployerCardStyles.info}>
          {props.employer.industrySectorCode}
        </p>
      </div>
      <div className={EmployerCardStyles.dateWrapper}>
        <p className={EmployerCardStyles.info}>{props.employer.foundedDate}</p>
        <p className={EmployerCardStyles.info}>
          {props.employer.dissolvedDate}
        </p>
      </div>
      <div className={EmployerCardStyles.addressWrapper}>
        <p className={EmployerCardStyles.info}>
          {props.employer.address.line1}
        </p>
        <p className={EmployerCardStyles.info}>
          {props.employer.address.line2}
        </p>
        <p className={EmployerCardStyles.info}>
          {props.employer.address.city +
            ", " +
            props.employer.address.state +
            " " +
            props.employer.address.zipCode}
        </p>
      </div>
      <p className={EmployerCardStyles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};
