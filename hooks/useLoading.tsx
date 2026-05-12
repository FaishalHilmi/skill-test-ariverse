import { useEffect, useState } from "react";

export default function useLoading({ delay = 0 }: { delay?: number } = {}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isLoading;
}
