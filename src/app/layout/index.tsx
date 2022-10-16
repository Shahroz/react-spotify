import  { lazy, Suspense } from "react";

const Layout = lazy(() => import("../routes"));

const AppLayout = () => {
  return (
    <Suspense fallback={
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
      }>
      <Layout />
    </Suspense>
  )
}

export default AppLayout;