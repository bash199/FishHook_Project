import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import styled from "styled-components";
import {useCRUD} from "../../hooks/UseCRUD";
import Spinner from "../Spinner";
import {Overlay2} from "./NewCatch";

const CatchDiv = styled.div`
   background: url("/catchback.jpg") center center / cover no-repeat;
   position: relative;
   width: 100%;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
`;
const InnerDiv = styled.div`
   width: 800px;
   height: 550px;
   display: flex;
   align-items: center;
   justify-content: space-around;
   background: rgba(255, 255, 255, 0.1);
   box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
   backdrop-filter: blur(2px);
   -webkit-backdrop-filter: blur(2px);
   border-radius: 5px;
   border: 1px solid rgba(255, 255, 255, 0.18);
   @media screen and (max-width: 768px) {
      width: 500px;
      height: 730px;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
   }
   @media (max-width: 400px) {
      width: 280px;
      height: 680px;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
   }
`;
const ImageDiv = styled.div`
   width: 40%;
   height: 300px;
   /* margin-left: 10px; */
   background: rgba(255, 255, 255, 0.1);
   box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
   backdrop-filter: blur(2px);
   -webkit-backdrop-filter: blur(2px);
   border-radius: 5px;
   border: 1px solid rgba(255, 255, 255, 0.18);
   @media (max-width: 400px) {
      width: 92%;
      height: fit-content;
   }
`;
const Image = styled.img`
   width: 100%;
   height: 100%;
`;
const AboutDiv = styled.div`
   color: white;
   width: 58%;
   height: fit-content;
   padding: 5px;
   text-align: center;
   display: flex;
   flex-direction: column;
   align-items: center;
   background: rgba(255, 255, 255, 0.1);
   box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
   backdrop-filter: blur(2px);
   -webkit-backdrop-filter: blur(2px);
   border-radius: 5px;
   border: 1px solid rgba(255, 255, 255, 0.18);
   @media (max-width: 400px) {
      width: 92%;
      height: fit-content;
   }
`;
const H3 = styled.h3`
   font-size: 1.6rem;
   font-weight: 500;
   font-family: "Courier New", Courier, monospace;
   margin: 5px 0 2px 0;
`;
const H4 = styled.h4`
   font-size: 1.4rem;
   font-weight: 300;
   font-family: "Courier New", Courier, monospace;
   margin: 5px 0 2px 0;
   @media screen and (max-width: 768px) {
      font-size: 1.2rem;
   }
`;
const Hr = styled.hr`
   width: 90%;
   border-top: 0.5px solid #ffffff;
   border-bottom: 0;
`;
const Para = styled.p`
   height: fit-content;
   text-align: start;
   font-size: 1.1rem;
   @media screen and (max-width: 768px) {
      font-size: 1rem;
   }
`;
const FishDiv = styled.div`
   width: 90%;
   height: 30px;
   margin-top: 15px;
   display: flex;
   justify-content: flex-start;
   font-weight: 100;
`;
const LocationName = styled.div`
   width: 90%;
   height: fit-content;
   margin: 15px 0 15px 0;
   display: flex;
   justify-content: flex-start;
   font-weight: 100;
`;
const BtnsBox = styled.div`
   @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
   }
`;
const Btn = styled.button`
   width: 100px;
   height: 30px;
   font-size: 1rem;
   color: white;
   cursor: pointer;
   background: rgba(255, 255, 255, 0.05);
   box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
   backdrop-filter: blur(0px);
   -webkit-backdrop-filter: blur(0);
   border-radius: 3px;
   border: 1px solid rgba(255, 255, 255, 0.18);
   margin: 5px;
   &:hover {
      transition: 0.1s ease-in-out;
      transform: scale(1.05);
   }
`;
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
                  </BtnsBox>
               </AboutDiv>
            </InnerDiv>
         )}
      </CatchDiv>
   );
};
export default Catch;
