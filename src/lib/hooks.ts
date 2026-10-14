"use client";

import { useCallback, useSyncExternalStore } from "react";

export function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (callback: () => void) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", callback);
      return () => mql.removeEventListener("change", callback);
    },
    [query]
  );
  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query]);
  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

let cachedWebGLSupport: boolean | null = null;

function checkWebGLSupport() {
  if (cachedWebGLSupport !== null) return cachedWebGLSupport;
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") || canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    cachedWebGLSupport = Boolean(gl);
  } catch {
    cachedWebGLSupport = false;
  }
  return cachedWebGLSupport;
}

const noopSubscribe = () => () => {};

export function useWebGLSupported() {
  const getServerSnapshot = () => true;
  return useSyncExternalStore(noopSubscribe, checkWebGLSupport, getServerSnapshot);
}
