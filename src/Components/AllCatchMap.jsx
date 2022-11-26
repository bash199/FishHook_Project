import "./app.css";
import MarkerImg from "../Components/pages/marker.png";
import ReactMap, {Marker} from "react-map-gl";
import {useContext, useState, createContext} from "react";
import "./app.css";
import {ctx} from "./App";
import styled from "styled-components";
import CustomPopup from "./CustomPopup";

ReactMap.mapboxAccessToken =
   "pk.eyJ1IjoiYmFzaDE5OSIsImEiOiJjbGF3YnpxODAwZTh5M3ptcHV0dmZzZzB5In0.WjmYm8krzXdzyufBd6hSDA";
const Img = styled.img`
   width: 25px;
   height: 25px;
`;
const InfoViewPort = styled.pre`
   display: block;
   position: relative;
   float: left;
   margin: 0px auto;
   width: 30%;
   padding: 10px;
   border: none;
   border-radius: 3px;
   font-size: 12px;
   text-align: center;
   color: #222;
`;
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
      <div className="allChatchesMap">
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
            {listOfMarkers &&
               listOfMarkers.map((spot, i) => {
                  return (
                     <Marker
                        key={spot.id}
                        latitude={spot.latitude}
                        longitude={spot.longitude}
                     >
                        <Img
                           src={MarkerImg}
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
         </ReactMap>
      </div>
   );
};

export default AllCatchMap;