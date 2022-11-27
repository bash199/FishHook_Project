import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import MarkerImg from "./marker.png";
import ReactMap, {Marker} from "react-map-gl";
import {useCRUD} from "../../hooks/UseCRUD";
import styled from 'styled-components'
ReactMap.mapboxAccessToken =
   "pk.eyJ1IjoiYmFzaDE5OSIsImEiOiJjbGF3YnpxODAwZTh5M3ptcHV0dmZzZzB5In0.WjmYm8krzXdzyufBd6hSDA";

export const NewCatchContainer = styled.div`
   height: 100%;
   display: flex;
   justify-content: center;
   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
export const Form = styled.form`
   width: calc(100% - 20px);
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
`;
export const InputDiv = styled.div`
   width: 90%;
   display: flex;
   flex-direction: column;
   & > small {
      margin-bottom: 3px;
   }
`;
export const InputDiv2 = styled.div`
   width: 25%;
   margin: 1rem;
   display: flex;
   flex-direction: column;
   & > small {
      margin-bottom: 3px;
   }
`;
export const Label = styled.label`
   margin: 1rem 0;
   font-size: 1.2rem;
`;
export const MapBox = styled.div`
   margin-top: 1rem;
   width: 90%;
   height: 50vh;
`;
export const Img = styled.img`
   width: 25px;
   height: 25px;
`;
export const InputRowDiv = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
`;
export const Input = styled.input`
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
   const navigate = useNavigate();
   const [marker, setMarker] = useState({
      lat: 33.01305774552368,
      lng: 35.08856616177496,
   });
   const [viewport, setViewport] = useState({
      latitude: 32.944556777342385,
      longitude: 35.183476025375484,
      zoom: 10,
   });
   const [currCatch, setState] = useState({
      title: "",
      description: "",
      fish: "",
      locationName: "",
      weight: "",
      lat: 33.01305774552368,
      lng: 35.08856616177496,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Fish_icon.svg/1200px-Fish_icon.svg.png",
   });
   const [direct, setRedirect] = useState(false);
   const {create} = useCRUD();
   const handleFormSubmit = (event) => {
      event.preventDefault();
      create(currCatch);
      // setTimeout(() => {
         setRedirect(true);
      // }, 500);
   };
   const handleInputChange = (event) => {
      setState((prev) => {
         return {...prev, [event.target.name]: event.target.value};
      });
   };

   if (direct) {
      return navigate("/allcatches");
   }
   return (
      <NewCatchContainer>
         <Form onSubmit={handleFormSubmit}>
            <h1>Add a new catch!</h1>
            <InputDiv>
               <Label htmlFor="titleInput">Title</Label>
               <small>required</small>
               <Input
                  value={currCatch.title}
                  minLength={1}
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
                  value={currCatch.description}
                  id="descInput"
                  name="description"
                  type="text"
                  onChange={handleInputChange}
               />
            </InputDiv>
            <InputDiv>
               <Label htmlFor="fishInput">Fish Caught:</Label>
               <Input
                  value={currCatch.fish}
                  id="fishInput"
                  name="fish"
                  type="text"
                  onChange={handleInputChange}
               />
            </InputDiv>
            <InputDiv>
               <Label htmlFor="weightInput">Fish Weight:</Label>
               <Input
                  value={currCatch.weight}
                  id="weightInput"
                  name="weight"
                  type="number"
                  step={0.1}
                  onChange={handleInputChange}
               />
            </InputDiv>
            <h2>Drag the pin to get your coordinates!</h2>
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
                     value={currCatch.locationName}
                     id="locationInput"
                     name="locationName"
                     type="text"
                     onChange={handleInputChange}
                  />
               </InputDiv2>
               <InputDiv2>
                  <Label htmlFor="latInput">Latitude</Label>
                  <Input
                     value={currCatch.lat}
                     id="latInput"
                     step={0.1}
                     name="lat"
                     type="number"
                     onChange={handleInputChange}
                  />
               </InputDiv2>
               <InputDiv2>
                  <Label htmlFor="lngInput">Longitude</Label>
                  <Input
                     value={currCatch.lng}
                     id="lngInput"
                     step={0.1}
                     name="lng"
                     type="number"
                     onChange={handleInputChange}
                  />
               </InputDiv2>
            </InputRowDiv>
            <InputDiv>
               <Label htmlFor="imageInput">Submit a picture!</Label>
               <Input
                  value={currCatch.image}
                  id="imageInput"
                  name="image"
                  type="text"
                  onChange={handleInputChange}
               />
            </InputDiv>
            <button type="submit" className="btn btn-primary">
               Submit Post
            </button>
         </Form>
      </NewCatchContainer>
   );
};

export default NewCatch;
