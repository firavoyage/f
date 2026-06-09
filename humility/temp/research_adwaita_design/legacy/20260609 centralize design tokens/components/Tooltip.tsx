import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import "./Tooltip.css";

export function Tooltip({
  children,
  content,
}: {
  children: React.ReactNode;
  content: React.ReactNode;
}) {
  return (
    <BaseTooltip.Provider>
      <BaseTooltip.Root>
        <BaseTooltip.Trigger className="Tooltip_trigger">
          {children}
        </BaseTooltip.Trigger>
        <BaseTooltip.Portal>
          <BaseTooltip.Positioner
            sideOffset={8}
            className="Tooltip_positioner"
          >
            <BaseTooltip.Popup className="Tooltip_popup">
              <BaseTooltip.Arrow className="Tooltip_arrow" />
              {content}
            </BaseTooltip.Popup>
          </BaseTooltip.Positioner>
        </BaseTooltip.Portal>
      </BaseTooltip.Root>
    </BaseTooltip.Provider>
  );
}