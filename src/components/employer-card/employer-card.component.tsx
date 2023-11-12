import { EmployerCardStyles } from "./employer-card-styles";
import { Employer } from "../../models/employer.types";

interface EmployerCardProps {
    employer: Employer
}

export const EmployerCard = (props: EmployerCardProps) => {
    return (
        <div className={EmployerCardStyles.card}>
            <div className={EmployerCardStyles.companyWrapper}>
                <div className={EmployerCardStyles.name}>
                    {props.employer.name}
                </div>
                <div className={EmployerCardStyles.info}>
                    {props.employer.industrySectorCode}
                </div>
            </div>
            <div className={EmployerCardStyles.dateWrapper}>
                <div className={EmployerCardStyles.info}>
                    {props.employer.foundedDate}
                </div>
                <div className={EmployerCardStyles.info}>
                    {props.employer.dissolvedDate}
                </div>
            </div>
            <div className={EmployerCardStyles.addressWrapper}>
                <div className={EmployerCardStyles.info}>
                    {props.employer.address.line1}
                </div>
                <div className={EmployerCardStyles.info}>
                    {props.employer.address.line2}
                </div>
                <div className={EmployerCardStyles.info}>
                    {props.employer.address.city + ", " + props.employer.address.state + " " + props.employer.address.zipCode}
                </div>
            </div>
            <div className={EmployerCardStyles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
        </div>
    )
}