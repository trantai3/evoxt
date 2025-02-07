import { Suspense, useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

const SuspenseWithProgress = ({ children }: any) => {
  const LazyLoad = () => {
    useEffect(() => {
      NProgress.start();

      return () => {
        NProgress.done();
      };
    });
    return "";
  };

  return <Suspense fallback={<LazyLoad />}>{children}</Suspense>;
};

export default SuspenseWithProgress;
