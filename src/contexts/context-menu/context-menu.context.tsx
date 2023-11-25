import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ContextMenuPayload, ContextMenuState } from "./context-menu.types.ts";
import { ContextMenuComponent } from "../../components/context-menu/context-menu.component.tsx";
import "../../components/context-menu/context-menu.styles.css";

export type ShowContextMenuFunction = (contextMenu: ContextMenuPayload) => void;

const ContextMenuContext = createContext<ShowContextMenuFunction | null>(null);

export const useMenuContext = () => useContext(ContextMenuContext)!;

export const ContextMenuProvider = ({ children }: { children: ReactNode }) => {
  const [contextMenu, setContextMenu] = useState<ContextMenuState | null>(null);
  const contextMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = () => {
      setContextMenu(null);
    };

    if (contextMenu) {
      setTimeout(() => {
        document.addEventListener("click", handleClick);
      }, 0);
    }
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [contextMenu]);
  const showContextMenu = ({ event, ...props }: ContextMenuPayload) => {
    const { currentTarget, clientX, clientY } = event;
    setContextMenu({ currentTarget, clientX, clientY, ...props });
  };
  return (
    <ContextMenuContext.Provider value={showContextMenu}>
      {children}
      {contextMenu && (
        <div role={"presentation"} className={"context-menu-wrapper"}>
          <ContextMenuComponent ref={contextMenuRef} {...contextMenu} />
        </div>
      )}
    </ContextMenuContext.Provider>
  );
};
