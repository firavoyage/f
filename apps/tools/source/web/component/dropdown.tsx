import { createPortal } from 'react-dom';
import { useFloating, offset, flip, autoUpdate } from '@floating-ui/react';

export default function Portal({ children }) {
  const mountNode = document.getElementById('root_portal');

  if (!mountNode) return null;

  return createPortal(children, mountNode);
}

type dropdown = {
  ref: any
  align?: 'left' | 'center' | 'right' // horizontal alignment
}

export default function Dropdown() {
  const { refs, floatingStyles } = useFloating({
    open: true,
    onOpenChange: setIsOpen,
    placement: 'bottom-start', // Place dropdown below the button, aligned left
    whileElementsMounted: autoUpdate, // Continuously updates positions on scroll/resize
    middleware: [
      offset(4), // Add a 4px gap between button and dropdown
      flip()     // Automatically flip to the top if space runs out at the bottom
    ],
  });

  return (
    <div className="custom-select-container">
      <button
        ref={refs.setReference}
        className="custom-select-trigger"
        onClick={() => setIsOpen(!isOpen)}
      >
        Select an Option
      </button>

      <Portal>
        <div className="dropdown">
          <ul
            ref={refs.setFloating}
            className="custom-select-options"
            style={{
              position: 'fixed', // Bypasses overflow: hidden
              ...floatingStyles, // Injects the exact top/left pixel values
            }}
          >
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </div>
      </Portal>
    </div>
  );
}
