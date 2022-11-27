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
   const [readData, listOfMarkers, isLoading] = useFetch();
   useEffect(() => {
      readData();
      // eslint-disable-next-line
   }, []);
   return (
      <AllCatchesDiv>
         {isLoading && <h1>Spinner</h1>}
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
