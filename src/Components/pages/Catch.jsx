import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useCRUD} from "../../hooks/UseCRUD";
import Spinner from "../Spinner";
import {Overlay2} from "../style/NewCatchUI";
import {
   CatchDiv,
   InnerDiv,
   ImageDiv,
   Image,
   AboutDiv,
   H3,
   H4,
   Hr,
   Para,
   FishDiv,
   LocationName,
   BtnsBox,
   Btn,
} from "../style/CatchUI";

const Catch = () => {
   const {catchId} = useParams();
   const navigate = useNavigate();
   const {readById, deleteCatch, state, isLoading} = useCRUD();
   const handleDeleteClick = () => {
      deleteCatch(state.id);
      navigate("/allcatches");
   };
   const handleEditClick = () => {
      navigate(`/allcatches/${catchId}/edit`);
   };
   const handleBackClick = () => {
      navigate("/allcatches");
   };
   useEffect(() => {
      readById(catchId);
      // eslint-disable-next-line
   }, []);

   return (
      <CatchDiv>
         <Overlay2 />
         {isLoading && <Spinner />}
         {state && (
            <InnerDiv>
               <ImageDiv>
                  <Image src={state.image} alt={state.fish} />
               </ImageDiv>
               <AboutDiv>
                  <H3>{state.title}</H3>
                  <Hr />
                  <FishDiv>
                     <H4>Fish Caught : {state.fish}.</H4>
                  </FishDiv>
                  <LocationName>
                     <Para>Description : {state.description}.</Para>
                  </LocationName>
                  <LocationName>
                     <Para>Fish Weight : {state.weight} kg.</Para>
                  </LocationName>
                  <LocationName>
                     <Para>Caught By: {state.caughtBy}.</Para>
                  </LocationName>
                  <LocationName>
                     <Para>Caught At: {state.locationName}.</Para>
                  </LocationName>
                  <BtnsBox>
                     <Btn onClick={handleDeleteClick}>DELETE </Btn>
                     <Btn onClick={handleEditClick}>EDIT</Btn>
                     <Btn onClick={handleBackClick}>BACK</Btn>
                  </BtnsBox>
               </AboutDiv>
            </InnerDiv>
         )}
      </CatchDiv>
   );
};
export default Catch;
