import { FieldRegistration } from "../../../hooks/useForm.ts";
import { dashboardRootStyles } from "../../../sharedStyles/dashboard-root.styles.tsx";
import { classIf } from "../../../utils/tailwind.utils.ts";
import { MaterialIcon } from "../../../utils/icons.ts";
import { useEffect } from "react";

export type SelectOptions = Array<{ text: string; value: string }>;

type SelectProps = {
  fieldRegistration: FieldRegistration;
  iconName: MaterialIcon;
  label: string;
  id: string;
  options: SelectOptions;
  placeholder: string;
  constantValue?: string;
};
export const SelectComponent = ({
  fieldRegistration: { value, onChange, error, required, forceUpdate },
  iconName,
  options,
  placeholder,
  label,
  id,
  constantValue,
}: SelectProps) => {
  useEffect(() => {
    if (constantValue) forceUpdate(constantValue);
  }, []);

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
          className={`${dashboardRootStyles.input} ${classIf(
            !value,
            "text-gray-300",
          )} ${classIf(error, dashboardRootStyles.inputError)}`}
          value={constantValue ?? value}
          onChange={onChange}
          disabled={constantValue !== undefined}
        >
          {/* add default empty option at the start */}
          {[{ text: placeholder, value: "" }, ...options].map((option) => (
            <option
              className={"text-gray-300"}
              key={option.value}
              value={option.value}
            >
              {option.text}
            </option>
          ))}
        </select>
      </div>
      <span className={"text-xs text-red-500"}>{error}</span>
    </div>
  );
};
