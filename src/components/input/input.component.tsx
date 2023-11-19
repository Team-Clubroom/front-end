import { dashboardRootStyles } from "../../pages/content/app-main/tabs/dashboard-root/dashboard-root.styles.tsx";
import { FieldRegistration } from "../../hooks/useForm.ts";
import { MaterialIcon } from "../../utils/icons.ts";

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
  fieldRegistration,
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
      </label>
      <div className={dashboardRootStyles.inputContainer}>
        <span
          className={`material-symbols-outlined ${dashboardRootStyles.inputIcon}`}
          style={{ display: "flex", fontSize: "20px" }}
        >
          {iconName}
        </span>
        <input
          id={id}
          type={type}
          required
          className={dashboardRootStyles.input}
          placeholder={placeholder}
          value={fieldRegistration.value}
          onChange={fieldRegistration.onChange}
        />
      </div>
      <span className={"text-xs text-red-500"}>{fieldRegistration.error}</span>
    </div>
  );
};
