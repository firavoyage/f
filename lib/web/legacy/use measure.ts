import { useMeasure } from "react-use";

export function use_measure(options?: Parameters<typeof useMeasure>) {
  const [measureRef, bounds] = useMeasure(options);
  const internalRef = useRef<HTMLElement | null>(null);

  const mergedCallback = useCallback((node: HTMLElement | null) => {
    internalRef.current = node;
    measureRef(node);
  }, [measureRef]);

  const mergedRef = Object.assign(mergedCallback, {
    get current() {
      return internalRef.current;
    }
  });

  return [mergedRef, bounds] as const;
}

