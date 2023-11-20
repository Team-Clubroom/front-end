import { FieldRegistration } from "../../hooks/useForm.ts";
import { dashboardRootStyles } from "../../pages/content/app-main/tabs/dashboard-root/dashboard-root.styles.tsx";
import { classIf } from "../../utils/tailwind.utils.ts";
import { MaterialIcon } from "../../utils/icons.ts";

type SelectProps = {
  fieldRegistration: FieldRegistration;
  iconName: MaterialIcon;
  label: string;
  id: string;
  options: Array<{ text: string; value: string }>;
};
export const SelectComponent = ({
  fieldRegistration: { value, onChange, error, required },
  iconName,
  options,
  label,
  id,
}: SelectProps) => {
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
        <select
          id={id}
          className={
            dashboardRootStyles.input +
            ` ${classIf(error, dashboardRootStyles.inputError)}`
          }
          value={value}
          onChange={onChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </div>
      <span className={"text-xs text-red-500"}>{error}</span>
    </div>
  );
};