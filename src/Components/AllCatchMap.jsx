import ReactMapGL, {Marker} from "react-map-gl";
import {useState, createContext, useEffect} from "react";
import CustomPopup from "./CustomPopup";
import {MapDiv, Img, InfoViewPort} from "./style/AllCatchMapUI";

export const popupCtx = createContext();
const AllCatchMap = ({listOfMarkers}) => {
   const [viewport, setViewport] = useState({
      latitude: 32.944556777342385,
      longitude: 35.183476025375484,
      zoom: 8,
   });
   const [selectedCatch, setSelectedCatch] = useState(null);
   const [currentViewport, setCurrentViewport] = useState({lat: "", lng: ""});

   useEffect(() => {
      const listener = (e) => {
         if (e.key === "Escape") {
            setSelectedCatch(null);
         }
      };
      window.addEventListener("keydown", listener);
      //cleanup event listener on unmount
      return () => {
         window.removeEventListener("keydown", listener);
      };
   }, []);

   return (
      <MapDiv className="allChatchesMap">
         <ReactMapGL
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle={process.env.REACT_APP_MAPBOX_STYLE}
            style={{borderRadius: "10px"}}
            initialViewState={viewport}
            onMove={(viewport) => {
               setViewport(viewport);
            }}
            onMouseMove={(e) => {
               setCurrentViewport({lat: e.lngLat.lat, lng: e.lngLat.lng});
            }}
         >
            {listOfMarkers &&
               listOfMarkers.map((spot) => {
                  return (
                     <Marker
                        style={{cursor: "pointer"}}
                        key={spot._id}
                        latitude={spot.lat}
                        longitude={spot.lng}
                     >
                        <Img
                           src={"/images/marker.png"}
                           alt="fish"
                           onClick={() => setSelectedCatch(spot)}
                        />
                     </Marker>
                  );
               })}
            <InfoViewPort id="info">
               {currentViewport.lat} | {currentViewport.lng}
            </InfoViewPort>
            <popupCtx.Provider value={{selectedCatch, setSelectedCatch}}>
               {selectedCatch && <CustomPopup />}
            </popupCtx.Provider>
         </ReactMapGL>
      </MapDiv>
   );
};

export default AllCatchMap;
