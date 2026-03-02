import { useState, useEffect } from "react";

export const useToast = (duration = 2500) => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!showToast) return;

    const timer = setTimeout(() => {
      setShowToast(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [showToast, duration]);

  return { showToast, setShowToast };
};
