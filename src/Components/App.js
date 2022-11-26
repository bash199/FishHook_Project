import "./app.css";
// import AllCatchMap from "./AllCatchMap";
// import {createContext} from "react";
import {Routes, Route} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Navbar from "./Navbar";
import NewCatch from "./pages/NewCatch";
import Error from "./pages/Error";
import AllCatches from "./pages/AllCatches";
import Catch from "./pages/Catch";
// export const ctx = createContext();
function App() {
   return (
      <div className="app">
         <Navbar />
         {/* <ctx.Provider value={state}> */}
         <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/allcatches" element={<AllCatches />} />
            <Route path="/allcatches/:catchId" element={<Catch />} />
            <Route path="/newcatch" element={<NewCatch />} />
            <Route path="*" element={<Error />} />
         </Routes>
         {/* </ctx.Provider> */}
      </div>
   );
}

export default App;

{
   /* <div className="app">
     <ctx.Provider value={state}>
        <AllCatchMap />
     </ctx.Provider>
  </div> */
}
