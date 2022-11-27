import {Routes as AllRoutes, Route} from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import NewCatch from "../pages/NewCatch";
import Error from "../pages/Error";
import AllCatches from "../pages/AllCatches";
import Catch from "../pages/Catch";
import React from "react";
import EditCatch from "../pages/EditCatch";

const Routes = () => {
   return (
      <div>
         <AllRoutes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/allcatches" element={<AllCatches />} />
            <Route path="/allcatches/:catchId" element={<Catch />} />
            <Route path="/allcatches/:catchId/edit" element={<EditCatch />} />
            <Route path="/newcatch" element={<NewCatch />} />
            <Route path="*" element={<Error />} />
         </AllRoutes>
      </div>
   );
};

export default Routes;
