"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function ClientWrapper() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1450);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;
  return <Loader />;
}
