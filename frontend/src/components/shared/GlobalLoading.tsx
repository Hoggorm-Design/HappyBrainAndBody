import { useIsFetching } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

const GlobalLoading = () => {
  const isFetching = useIsFetching();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isFetching) {
      // Show loader immediately when fetching starts
      setShowLoader(true);
    } else {
      // Only add delay when hiding the loader to prevent rapid flickering
      timeoutId = setTimeout(() => {
        setShowLoader(false);
      }, 300); // Reduced delay for better UX
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isFetching]);

  return showLoader ? (
    <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-white">
      <Spinner size="large" />
    </div>
  ) : null;
};

export default GlobalLoading;
