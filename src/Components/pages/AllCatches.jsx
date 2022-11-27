import AllCatchMap from "../AllCatchMap";
import styled from "styled-components";
import Card from "../Card";
import {useFetch} from "../../hooks/UseFetch";
import {useEffect} from "react";
import Spinner from "../Spinner";

const AllCatchesDiv = styled.div`
   width: 100%;
   min-height: 100vh;
   /* background: url('https://fishingpoints.app/sites/default/files/upload/images/hero/fp_hero_desktop_l_1.jpg') ; */
   background: #B4C9AF;
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   display: flex;
   flex-direction: row;
   @media (max-width: 768px) {
      flex-direction: column;
      /* justify-content: center; */
      align-items: center;
      flex-wrap: wrap;
   }
`;
const CardsBox = styled.div`
   text-align: center;
`;

const AllCatches = () => {
   const [readData, listOfMarkers, isLoading] = useFetch();
   useEffect(() => {
      readData();
      // eslint-disable-next-line
   }, []);
   return (
      <AllCatchesDiv>
         {isLoading && <Spinner/>}
         {listOfMarkers && <AllCatchMap listOfMarkers={listOfMarkers} />}
         {listOfMarkers && (
            <CardsBox>
               <h1>Recent Catches:</h1>
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
