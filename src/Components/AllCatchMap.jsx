import "./app.css";
import ReactMap, {Marker} from "react-map-gl";
import {useContext, useState, createContext} from "react";
import "./app.css";
import {ctx} from "./App";
import CustomPopup from "./CustomPopup";
ReactMap.mapboxAccessToken =
   "pk.eyJ1IjoiYmFzaDE5OSIsImEiOiJjbGF3YnpxODAwZTh5M3ptcHV0dmZzZzB5In0.WjmYm8krzXdzyufBd6hSDA";
export const popupCtx = createContext();
const AllCatchMap = () => {
   const listOfMarkers = useContext(ctx);
   const [viewport, setViewport] = useState({
      latitude: 32.944556777342385,
      longitude: 35.183476025375484,
      zoom: 10,
   });
   const [selectedCatch, setSelectedCatch] = useState(null);
   const [currentViewport, setCurrentViewport] = useState({lat: "", lng: ""});

   return (
      <div className="app">
         <ReactMap
            initialViewState={viewport}
            mapboxAccessToken={ReactMap.mapboxAccessToken}
            onMove={(viewport) => {
               setViewport(viewport);
            }}
            onMouseMove={(e) => {
               setCurrentViewport({lat: e.lngLat.lat, lng: e.lngLat.lng});
            }}
            mapStyle="mapbox://styles/mapbox/outdoors-v12"
         >
            {/* <Marker
               draggable={true}
               onDragEnd={(view) => {
                  console.log(view.lngLat);
                  setSelectedCatch(view.lngLat);
               }}
               latitude={selectedCatch ? selectedCatch.lat : 32.944556777342385}
               longitude={
                  selectedCatch ? selectedCatch.lng : 35.183476025375484
               }
            >
               <button>
                  <div>marker</div>
               </button>
            </Marker> */}

            {listOfMarkers &&
               listOfMarkers.map((spot, i) => {
                  return (
                     <Marker
                        draggable={true}
                        onDragEnd={(view) => {
                           console.log(view.lngLat);
                           // setSelectedCatch(view.lngLat);
                        }}
                        key={spot.id}
                        latitude={spot.latitude}
                        longitude={spot.longitude}
                     >
                        <button
                           onClick={(e) => {
                              setSelectedCatch(spot);
                              e.preventDefault();
                           }}
                        >
                           marker
                        </button>
                     </Marker>
                  );
               })}
            <popupCtx.Provider value={{selectedCatch, setSelectedCatch}}>
               {selectedCatch && <CustomPopup />}
            <pre id="info">
               {currentViewport.lat} | {currentViewport.lng}
               </pre>
            </popupCtx.Provider>
         </ReactMap>
      </div>
   );
};

export default AllCatchMap;
