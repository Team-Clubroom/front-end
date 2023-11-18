import { dashboardRootStyles } from "../../pages/content/app-main/tabs/dashboard-root/dashboard-root.styles.tsx";
import { FieldRegistration } from "../../hooks/useForm.ts";

interface InputProps {
  fieldRegistration: FieldRegistration;
  iconName: string;
  placeholder: string;
  label: string;
  id: string;
}

export const InputComponent = ({
  fieldRegistration,
  iconName,
  placeholder,
  label,
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
          type="text"
          required
          className={dashboardRootStyles.input}
          placeholder={placeholder}
          {...fieldRegistration}
        />
      </div>
    </div>
  );
};
