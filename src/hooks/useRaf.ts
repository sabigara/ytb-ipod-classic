import React from "react";

export default function useRaf(callback?: () => void) {
  const reqIdRef = React.useRef<number>();
  const loop = React.useCallback(() => {
    reqIdRef.current = requestAnimationFrame(loop);
    callback?.();
  }, [callback]);

  React.useEffect(() => {
    reqIdRef.current = requestAnimationFrame(loop);
    return () => {
      if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
    };
  }, [loop]);
}
