import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import ReactMap, {Marker} from "react-map-gl";
import {useCRUD} from "../../hooks/UseCRUD";
import MarkerImg from "./marker.png";
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
} from "./NewCatch";

ReactMap.mapboxAccessToken =
   "pk.eyJ1IjoiYmFzaDE5OSIsImEiOiJjbGF3YnpxODAwZTh5M3ptcHV0dmZzZzB5In0.WjmYm8krzXdzyufBd6hSDA";

const EditCatch = () => {
   const {catchId} = useParams();
   const [direct, setRedirect] = useState(false);
   const {readById, update, setState, state} = useCRUD();
   const [viewport, setViewport] = useState({
      latitude: 32.944556777342385,
      longitude: 35.183476025375484,
      zoom: 10,
   });
   const navigate = useNavigate();
   useEffect(() => {
      readById(catchId);
   }, [catchId,readById]);
   const handleFormSubmit = (event) => {
      event.preventDefault();
      update(state);
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
      return navigate(`/allcatches/${catchId}`);
   }

   return (
      <NewCatchContainer>
         {state && (
            <Form onSubmit={handleFormSubmit}>
               <h1>submit a new post!</h1>
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
               <h2>Drag the pin to edit your coordinates!</h2>
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
                        <Img src={MarkerImg} alt="fish" />
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
               <button type="submit" className="btn btn-primary">
                  Confirm
               </button>
            </Form>
         )}
      </NewCatchContainer>
   );
};

export default EditCatch;