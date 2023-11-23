import { dashboardRootStyles } from "../../pages/content/app-main/tabs/dashboard-root/dashboard-root.styles.tsx";
import { MaterialIcon } from "../../utils/icons.ts";
import { FieldRegistration } from "../../hooks/useForm.ts";
import { classIf } from "../../utils/tailwind.utils.ts";

interface CompanyProps {
    fieldRegistration: FieldRegistration;
    iconName: MaterialIcon;
    label: string;
    name: string;
}

export const CompanyComponent = ({
    fieldRegistration: { onChange, required, error, value },
    iconName,
    label,
    name
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
                value={name}
                onChange={onChange}
                />
            </div>
        </div>
    )
}