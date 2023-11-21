import { dashboardRootStyles } from "../../pages/content/app-main/tabs/dashboard-root/dashboard-root.styles.tsx";
import { FieldRegistration } from "../../hooks/useForm.ts";
import { MaterialIcon } from "../../utils/icons.ts";
import { classIf } from "../../utils/tailwind.utils.ts";

interface InputProps {
  fieldRegistration: FieldRegistration;
  iconName: MaterialIcon;
  placeholder: string;
  label: string;
  id: string;
  type?: "password" | "email" | "text";
  error?: string;
}

export const InputComponent = ({
  fieldRegistration: { onChange, required, error, value },
  iconName,
  placeholder,
  label,
  type = "text",
  id,
}: InputProps) => {
  return (
    <div className={dashboardRootStyles.formField + " pr-1"}>
      <label htmlFor={id} className={dashboardRootStyles.label}>
        {label}
        {required && "*"}
      </label>
      <div className={dashboardRootStyles.inputContainer}>
        <span
          className={`${dashboardRootStyles.inputIcon} ${classIf(
            error,
            "text-red-500",
          )}`}
          style={{ display: "flex", fontSize: "20px" }}
        >
          {iconName}
        </span>
        <input
          id={id}
          type={type}
          className={
            dashboardRootStyles.input +
            ` ${classIf(error, dashboardRootStyles.inputError)}`
          }
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
      <span className={"text-xs text-red-500"}>{error}</span>
    </div>
  );
};
