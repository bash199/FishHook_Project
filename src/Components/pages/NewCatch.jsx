import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import MarkerImg from "./marker.png";
import ReactMap, {Marker} from "react-map-gl";
ReactMap.mapboxAccessToken =
   "pk.eyJ1IjoiYmFzaDE5OSIsImEiOiJjbGF3YnpxODAwZTh5M3ptcHV0dmZzZzB5In0.WjmYm8krzXdzyufBd6hSDA";
const NewCatchContainer = styled.div`
   display: flex;
   justify-content: center;
   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
const Form = styled.form`
   width: calc(100% - 20px);
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
`;
const InputDiv = styled.div`
   width: 90%;
   display: flex;
   flex-direction: column;
   & > small {
      margin-bottom: 3px;
   }
`;
const Label = styled.label`
   margin: 1rem 0;
   font-size: 1.4rem;
`;
const MapBox = styled.div`
   margin-top: 1rem;
   width: 90%;
   height: 50vh;
`;
const Img = styled.img`
   width: 25px;
   height: 25px;
`;
const NewCatch = () => {
   const [marker, setMarker] = useState({
      lat: 33.01305774552368,
      lng: 35.08856616177496,
   });
   const [viewport, setViewport] = useState({
      latitude: 32.944556777342385,
      longitude: 35.183476025375484,
      zoom: 10,
   });
   const navigate = useNavigate();
   const [state, setState] = useState({
      title: "",
      description: "",
      fish: "",
      locationName: "",
      lat: undefined,
      lng: undefined,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Fish_icon.svg/1200px-Fish_icon.svg.png",
      redirectToPosts: false,
   });
   const handleFormSubmit = (event) => {
      event.preventDefault();

      setState({redirectToPosts: true});
   };
   const handleInputChange = (event) => {
      setState({[event.target.name]: event.target.value});
   };

   if (state.redirectToPosts) {
      return navigate("/allcatches");
   }

   return (
      <NewCatchContainer>
         <Form onSubmit={handleFormSubmit}>
            <h1>submit a new post!</h1>
            <InputDiv>
               <Label htmlFor="titleInput">Title</Label>
               <small>required</small>
               <input id="titleInput" name="title" type="text" />
            </InputDiv>
            <InputDiv>
               <Label htmlFor="descInput">Description</Label>
               <small>short description about your catch!</small>
               <input id="descInput" name="description" type="text" />
            </InputDiv>
            <InputDiv>
               <Label htmlFor="fishInput">Fish Caught:</Label>
               <input id="fishInput" name="fish" type="text" />
            </InputDiv>
            <MapBox>
               <ReactMap
                  style={{borderRadius: "10px"}}
                  initialViewState={viewport}
                  mapboxAccessToken={ReactMap.mapboxAccessToken}
                  onMove={(viewport) => {
                     setViewport(viewport);
                  }}
                  mapStyle="mapbox://styles/mapbox/outdoors-v12"
               >
                  <Marker
                     draggable={true}
                     onDragEnd={(view) => {
                        console.log(view.lngLat);
                        setMarker(view.lngLat);
                     }}
                     latitude={marker.lat}
                     longitude={marker.lng}
                  >
                     <Img src={MarkerImg} alt="fish" />
                  </Marker>
               </ReactMap>
            </MapBox>
            {/* <button type="submit" className="btn btn-primary">
                  Submit Post
               </button> */}
         </Form>
      </NewCatchContainer>
   );
};

export default NewCatch;
