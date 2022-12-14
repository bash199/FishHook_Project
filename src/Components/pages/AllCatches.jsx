import AllCatchMap from "../AllCatchMap";
import Card from "../Card";
import {useFetch} from "../../hooks/UseFetch";
import {useEffect} from "react";
import Spinner from "../Spinner";
import {Overlay} from "../style/LandingPageUI";
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
         {!isLoading && <AllCatchMap listOfMarkers={listOfMarkers} />}
         {listOfMarkers && (
            <CardsBox>
               <H1>Recent Catches:</H1>
               {!isLoading &&
                  listOfMarkers
                     .map((fish) => {
                        return <Card key={fish._id} fish={fish}></Card>;
                     })
                     .reverse()}
            </CardsBox>    
         )}
      </AllCatchesDiv>
   );
};

export default AllCatches;
