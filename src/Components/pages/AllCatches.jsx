import React, {useContext} from "react";
import AllCatchMap from "../AllCatchMap";
import styled from "styled-components";
import Card from "../Card";
import {ctx} from "../App";
import { useFetch } from "../../hooks/UseFetch";

const AllCatchesDiv = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
`;
const CardsBox = styled.div`
   display: flex;
   justify-content: center;
   flex-wrap: wrap;

`;
const AllCatches = () => {
   const [listOfCatches] = useFetch();
   console.log(listOfCatches);
   // const listOfCatches = useContext(ctx);
   return (
      <AllCatchesDiv>
         <AllCatchMap />
         <CardsBox>
            {listOfCatches&&
               listOfCatches.map((fish) => {
                  return <Card key={fish.id} fish={fish}></Card>;
               }).reverse()}
         </CardsBox>
      </AllCatchesDiv>
   );
};

export default AllCatches;
