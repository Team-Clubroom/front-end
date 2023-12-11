export const EdgeLabelComponent = ({
  relationName,
  date,
}: {
  relationName: string;
  date: string;
}) => (
  <div className={"flex flex-col"}>
    <span className={"font-bold text-sm"}>{relationName}</span>
    <span className={"text-xs"}>{date}</span>
  </div>
);
