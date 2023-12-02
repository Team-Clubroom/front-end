import { useEmployers } from "../../../hooks/useEmployers.ts";
import { SelectComponent } from "../select/select.component.tsx";
import { MaterialIcon } from "../../../utils/icons.ts";
import { FieldRegistration } from "../../../hooks/useForm.ts";

type EmployerSelectProps = {
  label: string;
  id: string;
  fieldRegistration: FieldRegistration;
};
export const EmployersSelectComponent = ({
  id,
  label,
  fieldRegistration,
}: EmployerSelectProps) => {
  const { employers } = useEmployers();

  return (
    <SelectComponent
      fieldRegistration={fieldRegistration}
      iconName={MaterialIcon.Work}
      label={label}
      id={id}
      options={employers.map((employer) => ({
        text: employer.name,
        value: employer.id.toString(),
      }))}
    />
  );
};
