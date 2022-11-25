import "./app.css";
import AllCatchMap from "./AllCatchMap";
import {createContext, useEffect, useState} from "react";
import {useFetch} from "../hooks/UseFetch";
export const ctx = createContext();
function App() {
   const [state] = useFetch();
   return (
      <div className="app">
         <ctx.Provider value={state}>
            <AllCatchMap />
         </ctx.Provider>
      </div>
   );
}

export default App;
