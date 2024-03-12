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
    path: "/signup/complete", // '/signup/complete' 경로를 독립적으로 추가
    element: React.lazy(() => import("@/components/signup/SignupComplete")),
  },
  
  
  {
    path: "/mainparent",
    element: React.lazy(() => import("@/pages/mainparent")),
    children: [
      {
        path: "", 
        element: React.lazy(() => import("@/components/mainparent/MainParent.jsx")),
      },
      {
        path: "nochild", 
        element: React.lazy(() => import("@/components/mainparent/NoChild.jsx")), 
      },
      {
        path: "childadd", 
        element: React.lazy(() => import("@/components/mainparent/ChildAdd.jsx")), 
      },
      {
        path: "childstatus", 
        element: React.lazy(() => import("@/components/mainparent/ChildStatus.jsx")), 
      }
    ],
  },
  {
    path: "/mainchild",
    element: React.lazy(() => import("@/pages/mainchild")),
    children: [
      {
        path: "", 
        element: React.lazy(() => import("@/components/mainchild/MainChild.jsx")),
      },
      {
        path: "loading", 
        element: React.lazy(() => import("@/components/mainchild/Loading.jsx")),
      },
      {
        path: "story", 
        element: React.lazy(() => import("@/components/mainchild/Story.jsx")),
      },
      {
        path: "worldmap", 
        element: React.lazy(() => import("@/components/mainchild/WorldMap.jsx")),
      },
      {
        path: "usa", 
        element: React.lazy(() => import("@/components/mainchild/USA.jsx")),
      },
      {
        path: "china", 
        element: React.lazy(() => import("@/components/mainchild/China.jsx")),
      },
      {
        path: "japan", 
        element: React.lazy(() => import("@/components/mainchild/Japan.jsx")),
      },
      {
        path: "italy", 
        element: React.lazy(() => import("@/components/mainchild/Italy.jsx")),
      },
      {
        path: "stage", 
        element: React.lazy(() => import("@/components/mainchild/Stage.jsx")),
      },
      {
        path: "stage/cartoon", 
        element: React.lazy(() => import("@/components/mainchild/Cartoon.jsx")),
      },
      {
        path: "stage/quiz", 
        element: React.lazy(() => import("@/components/mainchild/Quiz.jsx")),
      },
      {
        path: "stage/result", 
        element: React.lazy(() => import("@/components/mainchild/Result.jsx")),
      },
        ],
  },
  {
    path: "/parentwallet",
    element: React.lazy(() => import("@/pages/parentwallet")),
    children: [
      {
        path:"",
        element:React.lazy(() => import("@/components/parentwallet/ParentWallet.jsx")),
      },
      {
        path:"request",
        element:React.lazy(() => import("@/components/parentwallet/Request.jsx")),
      },
      {
        path:"send",
        element:React.lazy(() => import("@/components/parentwallet/Sending.jsx")),
      },
      {
        path:"complete",
        element:React.lazy(() => import("@/components/parentwallet/SendingComplete.jsx")),
      },
    ],
  },
  {
    path: "/childwallet",
    element: React.lazy(() => import("@/pages/childwallet")),
    children : [
      {
        path:"",
        element:React.lazy(() => import("@/components/childwallet/ChildWallet.jsx")),
      },
      {
        path:"status",
        element:React.lazy(() => import("@/components/childwallet/MyStatus.jsx")),
      },
      {
        path:"point",
        element:React.lazy(() => import("@/components/childwallet/MyPoint.jsx")),
      },
      {
        path:"ask",
        element:React.lazy(() => import("@/components/childwallet/AskWon.jsx")),
      },
      {
        path:"askcomplete",
        element:React.lazy(() => import("@/components/childwallet/AskComplete.jsx")),
      },
      {
        path:"account",
        element:React.lazy(() => import("@/components/childwallet/MyAccount.jsx")),
      },
    ],
  },
  {
    path: "/parentcurrency",
    element: React.lazy(() => import("@/pages/parentcurrency")),
  },
  {
    path: "/currency",
    element: React.lazy(() => import("@/components/parentcurrency/Currency.jsx")),
  },
  {
    path: "/currency/detail",
    element: React.lazy(() => import("@/components/parentcurrency/CurrencyDetail.jsx")),
  },
];

const RenderRoutes = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map((route, i) => (
          <Route key={i} path={route.path} element={<route.element />}>
            {route.children?.map((child, index) => (
              <Route key={index} path={child.path} element={<child.element />} />
            ))}
          </Route>
        ))}
      </Routes>
    </React.Suspense>
  );
};

export default RenderRoutes;