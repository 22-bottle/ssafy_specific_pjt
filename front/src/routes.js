import React from "react";
// import { EventSourcePolyfill, NativeEventSource } from "event-source-polyfill";
import { Route, Routes } from "react-router-dom";


const routes = [
  {
    path: "/",
    element: React.lazy(() => import("@/pages/login")),
  },
  {
    path: "/signup",
    element: React.lazy(() => import("@/pages/signup")),
  },
  {
    path: "/mainparent",
    element: React.lazy(() => import("@/pages/mainparent")),
  },
  {
    path: "/mainchild",
    element: React.lazy(() => import("@/pages/mainchild")),
  },
  {
    path: "/parentwallet",
    element: React.lazy(() => import("@/pages/parentwallet")),
  },
  {
    path: "/childwallet",

    element: React.lazy(() => import("@/pages/childwallet")),
  },
  {
    path: "/parentcurrency",

    element: React.lazy(() => import("@/pages/parentcurrency")),
  }
 
];

const RenderRoutes = () => {
  return (
    <React.Suspense
      fallback={
        <div>
        </div>
      }
    >
      <Routes>
        {routes.map((route, i) => {
          const RouteElement = route.element;
          // const RouteLayout = route.layout || React.Fragment;
          //   const Guard = route.guard || React.Fragment;

          return (
            <Route
              key={i}
              path={route.path}
              element={
                // <RouteLayout>
                  <RouteElement />
                // </RouteLayout>
              }
            />
          );
        })}
      </Routes>
    </React.Suspense>
  );
};

export default RenderRoutes;