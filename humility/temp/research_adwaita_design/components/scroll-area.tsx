import { ScrollArea } from "@base-ui/react/scroll-area";
import "./scroll-area.css";

export function MyScrollArea({
  children,
  ...props
}: ScrollArea.Root.Props & { children: React.ReactNode }) {
  return (
    <ScrollArea.Root className="my-scroll-area" {...props}>
      <ScrollArea.Viewport className="my-scroll-viewport">
        <ScrollArea.Content className="my-scroll-content">
          {children}
        </ScrollArea.Content>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical" className="my-scrollbar">
        <ScrollArea.Thumb className="my-scrollbar-thumb" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
}