import React, {useContext} from "react";
import AllCatchMap from "../AllCatchMap";
import styled from "styled-components";
import Card from "../Card";
import {ctx} from "../App";

const AllCatchesDiv = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   flex-direction: column;
`;

const AllCatches = () => {
   const listOfCatches = useContext(ctx);
   return (
      <AllCatchesDiv>
         <AllCatchMap />
         {listOfCatches && listOfCatches.map((fish) => {
            return <Card key={fish.id} fish={fish}></Card>
         })}
      </AllCatchesDiv>
   );
};

export default AllCatches;
