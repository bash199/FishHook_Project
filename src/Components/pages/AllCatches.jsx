import AllCatchMap from "../AllCatchMap";
import Card from "../Card";
import {useFetch} from "../../hooks/UseFetch";
import {useEffect} from "react";
import Spinner from "../Spinner";
import {Overlay} from "./LandingPage";
import {AllCatchesDiv, CardsBox, H1} from "../style/AllCatchesUI";

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
