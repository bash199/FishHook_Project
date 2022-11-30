import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import ReactMap, {Marker} from "react-map-gl";
import {useCRUD} from "../../hooks/UseCRUD";
import Spinner from "../Spinner";
import {
   EditCatchContainer,
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
   BtnBox,
} from "../style/NewCatchUI";

const token =
   "pk.eyJ1IjoiZnJhbmtpMTYiLCJhIjoiY2xiMjNuMHlxMDBraDN2cHhscTNlbmc0cyJ9.0HeIdQyWwkDhKzrLR7wYFw";
const EditCatch = () => {
   const {catchId} = useParams();
   const navigate = useNavigate();
   const {readById, update, setState, state} = useCRUD();
   const [viewport, setViewport] = useState({
      latitude: 32.944556777342385,
      longitude: 35.183476025375484,
      zoom: 10,
   });

   const handleFormSubmit = (event) => {
      event.preventDefault();
      update(state);
      navigate("/allcatches");
   };
   const handleInputChange = (event) => {
      setState((prev) => {
         return {...prev, [event.target.name]: event.target.value};
      });
   };
   const handleBackClick = () => {
      navigate(`/allcatches/${catchId}`);
   };
   useEffect(() => {
      readById(catchId);
      // eslint-disable-next-line
   }, []);

   return (
      <EditCatchContainer>
         <Overlay2 />
         {!state && <Spinner />}
         {state && (
            <Form onSubmit={handleFormSubmit}>
               <InputDiv>
                  <Label htmlFor="titleInput">Title</Label>
                  <small>required</small>
                  <Input
                     value={state.title}
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
               <InputDiv>
                  <Label htmlFor="weightInput">Fish Weight:</Label>
                  <Input
                     value={state.weight}
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
                     value={state.caughtBy}
                     id="caughtByInput"
                     name="caughtBy"
                     type="text"
                     onChange={handleInputChange}
                  />
               </InputDiv>
               <H2 style={{marginTop: "10px"}}>
                  Drag the pin to edit your coordinates!
               </H2>
               <MapBox>
                  <ReactMap
                     style={{borderRadius: "10px"}}
                     initialViewState={viewport}
                     mapboxAccessToken={token}
                     onMove={(viewport) => {
                        setViewport(viewport);
                     }}
                     mapStyle="mapbox://styles/mapbox/navigation-night-v1"
                  >
                     <Marker
                        draggable={true}
                        onDragEnd={(view) => {
                           setState((prevState) => {
                              return {
                                 ...prevState,
                                 lat: view.lngLat.lat,
                                 lng: view.lngLat.lng,
                              };
                           });
                        }}
                        latitude={state.lat}
                        longitude={state.lng}
                     >
                        <Img src={"/images/marker.png"} alt="fish" />
                     </Marker>
                  </ReactMap>
               </MapBox>
               <InputRowDiv>
                  <InputDiv2>
                     <Label htmlFor="locationInput">
                        Where Was Your Catch?
                     </Label>
                     <Input
                        value={state.locationName}
                        id="locationInput"
                        name="locationName"
                        type="text"
                        onChange={handleInputChange}
                     />
                  </InputDiv2>
                  <InputDiv2>
                     <Label htmlFor="latInput">Latitude</Label>
                     <Input
                        value={state.lat}
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
                        value={state.lng}
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
                     value={state.image}
                     id="imageInput"
                     name="image"
                     type="text"
                     onChange={handleInputChange}
                  />
               </InputDiv>
               <BtnBox>
                  <Btn type="submit" className="btn btn-primary">
                     SAVE
                  </Btn>
                  <Btn onClick={handleBackClick}>BACK</Btn>
               </BtnBox>
            </Form>
         )}
      </EditCatchContainer>
   );
};

export default EditCatch;
