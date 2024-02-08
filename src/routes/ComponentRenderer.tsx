import { Routes, Route } from "react-router-dom";

import { RouterDomProps } from "@/types/router-dom";
import routes from '@/routes';
import { Suspense } from "react";

type ComponentRendererProps = {
  [key: string]: any;
};

const Loading = () => <p>Loading ...</p>;

const ComponentRenderer: React.FC<ComponentRendererProps> = (props) => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {routes && routes?.map((route: RouterDomProps, idx: number) => {
          return (route.component && !route.protected) && (
            <Route
              key={idx}
              path={route.path}
              element={
                <route.component />
              }
            />
          )
        })}
      </Routes>
    </Suspense>
  );
};

export default ComponentRenderer;