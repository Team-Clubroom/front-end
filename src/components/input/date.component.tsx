import { dashboardRootStyles } from "../../pages/content/app-main/tabs/dashboard-root/dashboard-root.styles.tsx";
import { FieldRegistration } from "../../hooks/useForm.ts";
import { MaterialIcon } from "../../utils/icons.ts";
import { classIf } from "../../utils/tailwind.utils.ts";
import { useEffect, useRef } from "react";

type InputProps = {
  fieldRegistration: FieldRegistration;
  constantValue?: string;
  iconName: MaterialIcon;
  placeholder: string;
  label: string;
  id: string;
  error?: string;
};

export const DateComponent = ({
  fieldRegistration,
  constantValue,
  iconName,
  label,
  placeholder,
  id,
}: InputProps) => {
  useEffect(() => {
    if (constantValue) fieldRegistration.forceUpdate(constantValue);
  }, []);

  const datePickerRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className={dashboardRootStyles.formField + " pr-1"}>
      <label htmlFor={id} className={dashboardRootStyles.label}>
        {label}
        {fieldRegistration.required && "*"}
      </label>
      <div className={dashboardRootStyles.inputContainer}>
        <input
          ref={datePickerRef}
          type={"date"}
          tabIndex={-1}
          onChange={fieldRegistration.onChange}
          className={
            "absolute bg-yellow-200 h-full w-full opacity-0 pointer-events-none"
          }
        />
        <span
          className={`${dashboardRootStyles.inputIcon} ${classIf(
            fieldRegistration.error,
            "text-red-500",
          )}`}
          style={{ display: "flex", fontSize: "20px" }}
        >
          {iconName}
        </span>
        <input
          id={id}
          autoComplete={"off"}
          aria-label={"hidden"}
          onClick={() => datePickerRef.current?.showPicker()}
          onFocus={() => datePickerRef.current?.showPicker()}
          placeholder={"yyyy-mm-dd"}
          className={`cursor-default ${dashboardRootStyles.input} ${classIf(
            fieldRegistration.error,
            dashboardRootStyles.inputError,
          )}`}
          value={constantValue ?? fieldRegistration.value}
          readOnly={true}
        />
      </div>
      <span className={"text-xs text-red-500"}>{fieldRegistration.error}</span>
    </div>
  );
};
