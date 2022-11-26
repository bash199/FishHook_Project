import React, {useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import MarkerImg from "./marker.png";
import ReactMap, {Marker} from "react-map-gl";
import {useFetch} from "../../hooks/UseFetch";
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
const InputDiv2 = styled.div`
   width: 25%;
   margin: 1rem;
   display: flex;
   flex-direction: column;
   & > small {
      margin-bottom: 3px;
   }
`;
const Label = styled.label`
   margin: 1rem 0;
   font-size: 1.2rem;
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
const InputRowDiv = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
`;
const Input = styled.input`
   line-height: 28px;
   border: 2px solid transparent;
   border-bottom-color: #777;
   padding: 0.2rem 0;
   outline: none;
   background-color: transparent;
   color: #0d0c22;
   transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
   &:focus,
   :hover {
      outline: none;
      padding: 0.2rem 1rem;
      border-radius: 1rem;
      border-color: #7ac6b9;
   }

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
   const [state, setState] = useState({
      title: "",
      description: "",
      fish: "",
      locationName: "",
      lat: undefined,
      lng: undefined,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Fish_icon.svg/1200px-Fish_icon.svg.png",
   });
   const [fishState, isLoading, error, create] = useFetch();
   const handleFormSubmit = (event) => {
      event.preventDefault();
      // create(state)
   };
   const handleInputChange = (event) => {
      setState((prev) => {
         return {...prev, [event.target.name]: event.target.value};
      });
   };

   return (
      <NewCatchContainer>
         <Form onSubmit={handleFormSubmit}>
            <h1>submit a new post!</h1>
            <InputDiv>
               <Label htmlFor="titleInput">Title</Label>
               <small>required</small>
               <Input
               value={state.title}
                  id="titleInput"
                  name="title"
                  type="text"
                  onChange={handleInputChange}
               />
            </InputDiv>
            <InputDiv>
               <Label htmlFor="descInput">Description</Label>
               <small>short description about your catch!</small>
               <Input
               value={state.description}
                  id="descInput"
                  name="description"
                  type="text"
                  onChange={handleInputChange}
               />
            </InputDiv>
            <InputDiv>
               <Label htmlFor="fishInput">Fish Caught:</Label>
               <Input
               value={state.fish}
                  id="fishInput"
                  name="fish"
                  type="text"
                  onChange={handleInputChange}
               />
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
                        setState((prevState) => {
                           return {
                              ...prevState,
                              lat: view.lngLat.lat,
                              lng: view.lngLat.lng,
                           };
                        });
                     }}
                     latitude={marker.lat}
                     longitude={marker.lng}
                  >
                     <Img src={MarkerImg} alt="fish" />
                  </Marker>
               </ReactMap>
            </MapBox>
            <InputRowDiv>
               <InputDiv2>
                  <Label htmlFor="locationInput">Where Was Your Catch?</Label>
                  <Input
                  value={state.fish}
                     id="locationInput"
                     name="locationName"
                     type="text"
                     onChange={handleInputChange}
                  />
               </InputDiv2>
               <InputDiv2>
                  <Label htmlFor="latInput">Latitude</Label>
                  <Input
                     id="latInput" 
                     name="lat"
                     type="number"
                     onChange={handleInputChange}
                  />
               </InputDiv2>
               <InputDiv2>
                  <Label htmlFor="lngInput">Longitude</Label>
                  <Input
                     id="lngInput"
                     name="lng"
                     type="number"
                     onChange={handleInputChange}
                  />
               </InputDiv2>
            </InputRowDiv>
            <Link to={"/allcatches"}>
               <button type="submit" className="btn btn-primary">
                  Submit Post
               </button>
            </Link>
         </Form>
      </NewCatchContainer>
   );
};

export default NewCatch;
