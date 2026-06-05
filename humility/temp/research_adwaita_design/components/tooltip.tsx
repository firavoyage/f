import { Tooltip } from "@base-ui/react/tooltip";
import "./tooltip.css";

export function MyTooltip({
  children,
  content,
}: {
  children: React.ReactNode;
  content: React.ReactNode;
}) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger className="my-tooltip-trigger">
          {children}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Positioner sideOffset={8} className="my-tooltip-positioner">
            <Tooltip.Popup className="my-tooltip-popup">
              <Tooltip.Arrow className="my-tooltip-arrow" />
              {content}
            </Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}