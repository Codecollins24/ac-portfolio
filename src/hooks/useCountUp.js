import { useEffect, useRef, useState } from "react";

export function useCountUp(target, { duration = 1400, startWhen = true } = {}) {
  const [value, setValue] = useState(0);
  const frameRef = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!startWhen || hasRun.current) return;
    hasRun.current = true;

    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [startWhen, target, duration]);

  return value;
}
