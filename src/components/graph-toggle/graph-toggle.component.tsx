import { classIf } from "../../utils/tailwind.utils.ts";
import { Icon } from "../icon.component.tsx";
import { MaterialIcon } from "../../utils/icons.ts";
import { Panel } from "reactflow";
import { GraphDirection } from "../../pages/graph/graph.types.ts";

export const GraphToggleComponent = ({
  direction,
  onLayout,
}: {
  direction: GraphDirection;
  onLayout: (direction: GraphDirection) => void;
}) => {
  return (
    <Panel position="top-right" className="dummy-panel">
      <div className="flex rounded bg-cyan-600 overflow-clip shadow">
        <button
          title={"Vertical layout"}
          className={`flex flex-grow p-2 transition-colors ${classIf(
            direction === "TB",
            "bg-cyan-800",
          )}`}
          onClick={() => onLayout("TB")}
        >
          <Icon name={MaterialIcon.Network} />
        </button>
        <button
          title={"Horizontal layout"}
          className={`flex flex-grow p-2 transition-colors ${classIf(
            direction === "LR",
            "bg-cyan-800",
          )}`}
          onClick={() => onLayout("LR")}
        >
          <Icon name={MaterialIcon.Account_Tree} />
        </button>
      </div>
    </Panel>
  );
};
