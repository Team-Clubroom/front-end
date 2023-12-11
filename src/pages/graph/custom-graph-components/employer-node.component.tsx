import { Handle, Position } from "reactflow";

export interface EmployerNodeProps {
  id: string;
  name: string;
  estDate: string;
  isMainNode: boolean;
  targetPosition: Position;
  sourcePosition: Position;
}

export function EmployerNodeComponent({ data }: { data: EmployerNodeProps }) {
  return (
    <div
      className={`px-4 py-2 shadow-md rounded-md border-2 border-stone-400 ${
        data.isMainNode ? "bg-cyan-600" : "bg-gray-200"
      }`}
    >
      <div className="flex">
        <div className="ml-2">
          <div
            className={`text-lg font-bold ${
              data.isMainNode ? "text-gray-100" : "text-cyan-700"
            }`}
          >
            {data.name}
          </div>
          <div
            className={`text-sm ${
              data.isMainNode ? "text-gray-200" : "text-gray-500"
            }`}
          >
            <span className={"font-bold"}>Established: </span>
            {data.estDate}
          </div>
        </div>
      </div>

      <Handle
        isConnectable={false}
        type="target"
        position={data.targetPosition}
        className="!bg-cyan-400 rounded-full"
      />
      <Handle
        isConnectable={false}
        type="source"
        position={data.sourcePosition}
        className="!bg-cyan-400 rounded-full"
      />
    </div>
  );
}
