import { dashboardRootStyles } from "../../pages/content/app-main/tabs/dashboard-root/dashboard-root.styles.tsx";
import { MaterialIcon } from "../../utils/icons.ts";

interface CompanyProps {
    iconName: MaterialIcon;
    label: string;
    value: string;
}

export const CompanyComponent = ({
    iconName,
    label,
    value
}: CompanyProps) => {
    return (
        <div className={dashboardRootStyles.formField + " pr-1"}>
            <label className={dashboardRootStyles.label}>
                {label}
            </label>
            <div className={dashboardRootStyles.inputContainer}>
                <span
                className={dashboardRootStyles.inputIcon}
                style={{ display: "flex", fontSize: "20px" }}
                >
                {iconName}
                </span>
                <input
                className={
                    dashboardRootStyles.input
                }
                readOnly={true}
                value={value}
                />
            </div>
        </div>
    )
}