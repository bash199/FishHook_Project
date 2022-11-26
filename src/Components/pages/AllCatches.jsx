import AllCatchMap from "../AllCatchMap";
import styled from "styled-components";
import Card from "../Card";
import {useFetch} from "../../hooks/UseFetch";
import {useEffect} from "react";

const AllCatchesDiv = styled.div`
   width: 100%;
   height: 100%;
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
   const [readData, state, isLoading] = useFetch();
   useEffect(() => {
      setTimeout(() => {
         readData();
      }, 500);
   }, []);
   return (
      <AllCatchesDiv>
         {state && <AllCatchMap listOfMarkers={state} />}
         {state && (
            <CardsBox>
               <h1>Recent Catches:</h1>
               {state &&
                  state
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
