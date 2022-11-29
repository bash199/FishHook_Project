import "./app.css";
import MarkerImg from "../Components/pages/marker.png";
import ReactMap, {Marker} from "react-map-gl";
import {useState, createContext, useEffect} from "react";
import "./app.css";
import styled from "styled-components";
import CustomPopup from "./CustomPopup";

ReactMap.mapboxAccessToken ="pk.eyJ1IjoiYmFzaDE5OSIsImEiOiJjbGF3YnpxODAwZTh5M3ptcHV0dmZzZzB5In0.WjmYm8krzXdzyufBd6hSDA";

const MapDiv = styled.div`
   width: calc(100% - 20px);
   height: 90vh;
   margin: 10px;
`;
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
         {console.log(process.env.REACT_APP_MAPBOX_TOKEN)}
         <ReactMap
            // mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapboxAccessToken={ReactMap.mapboxAccessToken}
            mapStyle="mapbox://styles/mapbox/navigation-night-v1"
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
               listOfMarkers.map((spot, i) => {
                  return (
                     <Marker
                        style={{cursor: "pointer"}}
                        key={spot.id}
                        latitude={spot.lat}
                        longitude={spot.lng}
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
      </MapDiv>
   );
};

export default AllCatchMap;
