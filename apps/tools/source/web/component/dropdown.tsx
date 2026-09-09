import { useFloating, flip, autoUpdate, useDismiss } from '@floating-ui/react';

type dropdown = {
  ref: any
  align?: 'left' | 'center' | 'right' // horizontal alignment
  click_outside?: fn
  children
}

export default function Dropdown(props: dropdown) {
  const { ref, align = 'left', click_outside, children } = props

  const { refs: { setReference: set_reference, setFloating: set_floating }, floatingStyles: floating_styles, context } = useFloating({
    open: true,
    onOpenChange: (nextOpen, event, reason) => {
      if (reason == 'outside-press') {
        click_outside?.(false)
      }
    },
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

  useDismiss(context, {
    outsidePress: (event) => {
      const is_excluded = event.target.closest('.trigger');
      return !is_excluded;
    },
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
