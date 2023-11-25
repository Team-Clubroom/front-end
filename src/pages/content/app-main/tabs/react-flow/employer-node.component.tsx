import { Handle, Position } from "reactflow";
import { API_Employer_Node } from "./graph.types.ts";

interface EmployerNodeProps {
  data: API_Employer_Node;
}

export function EmployerNodeComponent({ data }: EmployerNodeProps) {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400">
      <div className="flex">
        <div className="ml-2">
          <div className="text-lg font-bold">{data.name}</div>
          <div className="text-gray-500 text-sm">
            <span className={"font-bold"}>Established: </span>
            {data.estDate}
          </div>
        </div>
      </div>

      <Handle
        isConnectable={false}
        type="target"
        position={Position.Left}
        className="!bg-teal-500 rounded-full"
      />
      <Handle
        isConnectable={false}
        type="source"
        position={Position.Right}
        className="!bg-teal-500 rounded-full"
      />
    </div>
  );
}
