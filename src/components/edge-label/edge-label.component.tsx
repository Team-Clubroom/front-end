export const EdgeLabelComponent = ({
  relationName,
  date,
}: {
  relationName: string;
  date: string;
}) => (
  <div className={"flex flex-col"}>
    <span className={"text-bold"}>{relationName}</span>
    <span>{date}</span>
  </div>
);
