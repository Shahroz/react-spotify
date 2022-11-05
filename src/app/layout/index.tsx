import React, { lazy, Suspense } from "react";
const Routing = lazy(() => import("../routing"));

const AppLayout = () => {
  return (
    <Suspense
      fallback={
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            height: "100vh",
            width: "100vw",
            backgroundColor: "#2b2f3b",
          }}
        >
          Loading...
        </div>
      }
    >
      <Routing />
    </Suspense>
  );
};

export default AppLayout;
