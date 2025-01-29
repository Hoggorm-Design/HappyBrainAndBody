import React, { createContext, useContext, useState, useEffect } from "react";
import Spinner from "../components/shared/Spinner";

type LoadingContextType = {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
};

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};

export const LoadingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loadingCount, setLoadingCount] = useState(0);
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    if (loadingCount > 0) {
      setShowSpinner(true);
    } else {
      const timeout = setTimeout(() => setShowSpinner(false), 300); // Small delay to prevent flickering
      return () => clearTimeout(timeout);
    }
  }, [loadingCount]);

  const startLoading = () => setLoadingCount((prev) => prev + 1);
  const stopLoading = () => setLoadingCount((prev) => Math.max(0, prev - 1));

  return (
    <LoadingContext.Provider
      value={{ isLoading: loadingCount > 0, startLoading, stopLoading }}
    >
      {children}
      {showSpinner && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-white">
          <div className="rounded-lg p-4">
            <Spinner size="large" />
          </div>
        </div>
      )}
    </LoadingContext.Provider>
  );
};
