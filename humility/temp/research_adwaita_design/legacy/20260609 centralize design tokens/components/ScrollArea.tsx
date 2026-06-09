import { ScrollArea as BaseScrollArea } from "@base-ui/react/scroll-area";
import "./ScrollArea.css";

export function ScrollArea(
  props: BaseScrollArea.Root.Props & { children: React.ReactNode }
) {
  return (
    <BaseScrollArea.Root className="ScrollArea" {...props}>
      <BaseScrollArea.Viewport className="ScrollArea_viewport">
        <BaseScrollArea.Content className="ScrollArea_content">
          {props.children}
        </BaseScrollArea.Content>
      </BaseScrollArea.Viewport>
      <BaseScrollArea.Scrollbar
        orientation="vertical"
        className="ScrollArea_scrollbar"
      >
        <BaseScrollArea.Thumb className="ScrollArea_thumb" />
      </BaseScrollArea.Scrollbar>
    </BaseScrollArea.Root>
  );
}