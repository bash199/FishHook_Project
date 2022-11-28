import AllCatchMap from "../AllCatchMap";
import styled from "styled-components";
import Card from "../Card";
import {useFetch} from "../../hooks/UseFetch";
import {useEffect} from "react";
import Spinner from "../Spinner";
import {Overlay} from "./LandingPage";

const AllCatchesDiv = styled.div`
   width: 100%;
   min-height: 100vh;
   background-image: url("back.jpg");
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   position: relative;
   display: flex;
   flex-direction: row;
   @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      flex-wrap: wrap;
   }
`;
const CardsBox = styled.div`
   color: white;
   text-align: center;
`;
const H1 = styled.h1`
   margin:10px ;
   font-weight: 200;
`;

const AllCatches = () => {

   const [readData, listOfMarkers, isLoading] = useFetch();

   useEffect(() => {
      readData();
      // eslint-disable-next-line
   }, []);

   return (
      <AllCatchesDiv>
         <Overlay />
         {isLoading && <Spinner />}
         {listOfMarkers && <AllCatchMap listOfMarkers={listOfMarkers} />}
         {listOfMarkers && (
            <CardsBox>
               <H1>Recent Catches:</H1>
               {listOfMarkers &&
                  listOfMarkers
                     .map((fish) => {
                        return <Card key={fish.id} fish={fish}></Card>;
                     })
                     .reverse()}
            </CardsBox>
         )}
      </AllCatchesDiv>
   );
};

export default AllCatches;
