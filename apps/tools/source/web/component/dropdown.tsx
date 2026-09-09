import { useFloating, flip, autoUpdate } from '@floating-ui/react';

type dropdown = {
  ref: any
  align?: 'left' | 'center' | 'right' // horizontal alignment
  children
}

export default function Dropdown(props: dropdown) {
  const { ref, align = 'left', children } = props

  const { refs: { setReference: set_reference, setFloating: set_floating }, floatingStyles: floating_styles } = useFloating({
    open: true,
    strategy: 'fixed',
    placement: {
      left: 'bottom-start',
      center: 'bottom',
      right: 'bottom-end'
    }[align],
    whileElementsMounted: autoUpdate,
    middleware: [
      flip()
    ],
  });

  useEffect(() => {
    if (ref && ref.current) {
      set_reference(ref.current);
    }
  }, [ref]);

  return (
    <div className="dropdown" {...p({ ref: set_floating, style: floating_styles })}>
      {children}
    </div>
  );
}
