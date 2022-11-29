import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import ReactMap, {Marker} from "react-map-gl";
import {useCRUD} from "../../hooks/UseCRUD";
import {
   NewCatchContainer,
   Form,
   InputDiv,
   InputDiv2,
   Label,
   MapBox,
   Img,
   InputRowDiv,
   Input,
   Overlay2,
   H2,
   Btn,
   BtnBox
} from "../style/NewCatchUI";
const token =
   "pk.eyJ1IjoiZnJhbmtpMTYiLCJhIjoiY2xiMjNuMHlxMDBraDN2cHhscTNlbmc0cyJ9.0HeIdQyWwkDhKzrLR7wYFw";

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
      caughtBy: "",
      weight: "",
      lat: 33.01305774552368,
      lng: 35.08856616177496,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Fish_icon.svg/1200px-Fish_icon.svg.png",
   });
   const {create} = useCRUD();
   const handleFormSubmit = (event) => {
      event.preventDefault();
      create(currCatch);
      navigate("/allcatches");
   };

   const handleInputChange = (event) => {
      setState((prev) => {
         return {...prev, [event.target.name]: event.target.value};
      });
   };
   const handleBackClick = () => {
      navigate("/allcatches");
   };
   return (
      <NewCatchContainer>
         <Overlay2 />
         <Form onSubmit={handleFormSubmit}>
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
               <small>(In Kg)</small>
               <Input
                  value={currCatch.weight}
                  id="weightInput"
                  name="weight"
                  type="number"
                  step={0.1}
                  onChange={handleInputChange}
               />
            </InputDiv>
            <InputDiv>
               <Label htmlFor="caughtByInput">Caught By:</Label>
               <Input
                  value={currCatch.caughtBy}
                  id="caughtByInput"
                  name="caughtBy"
                  type="text"
                  onChange={handleInputChange}
               />
            </InputDiv>
            <H2 style={{marginTop: "10px"}}>
               Drag the pin to get your coordinates...
            </H2>
            <MapBox>
               <ReactMap
                  style={{borderRadius: "3px"}}
                  initialViewState={viewport}
                  mapboxAccessToken={token}
                  // mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                  onMove={(viewport) => {
                     setViewport(viewport);
                  }}
                  mapStyle="mapbox://styles/mapbox/navigation-night-v1"
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
                     <Img src={"/images/marker.png"} alt="fish" />
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
            <BtnBox>
            <Btn type="submit" className="btn btn-primary">
               Add Catch
            </Btn>
            <Btn onClick={handleBackClick}>
               BACK
            </Btn>
            </BtnBox>
         </Form>
      </NewCatchContainer>
   );
};

export default NewCatch;
