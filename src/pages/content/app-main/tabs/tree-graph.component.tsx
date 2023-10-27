import ParentSize from "@visx/responsive/lib/components/ParentSize";
import TreeComponent from "../../../../components/tree/tree.component.tsx";

function TreeGraph() {
  return (
    <ParentSize>
      {({ width, height }) => <TreeComponent width={width} height={height} />}
    </ParentSize>
  );
}

export default TreeGraph;
