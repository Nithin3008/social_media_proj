import { useEffect } from "react";

export function ClearToken() {
  useEffect(() => {
    localStorage.clear();
  }, []);
  return <></>;
}
