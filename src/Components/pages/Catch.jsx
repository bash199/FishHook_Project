import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import styled from "styled-components";
import {useCRUD} from "../../hooks/UseCRUD";
import Spinner from "../Spinner";
import { Overlay2 } from "./NewCatch";
const CatchDiv = styled.div`
   background: url("/catchback.jpg") center center / cover no-repeat ;
   position: relative;

   width: 100%;
   height: 100vh;
`;
const Catch = () => {
   const {catchId} = useParams();
   const {readById, deleteCatch, state, error, isLoading} = useCRUD();
   useEffect(() => {
      readById(catchId);
      // eslint-disable-next-line
   }, []);
   const handleDeleteClick = () => {
      deleteCatch(state.id);
   };
   {/* {error && <h1>{error.message}</h1>} */}

   return (
      <CatchDiv>
         <Overlay2/>
         {isLoading && <Spinner />}
         {!isLoading && (
            <center>
               {state && (
                  <div>
                     <img src={state.image} alt="dsd" />
                  </div>
               )}
            </center>
         )}
         {!isLoading && (
            <Link onClick={handleDeleteClick} to={"/allcatches"}>
               Delete
            </Link>
         )}
         {!isLoading && <Link to={`/allcatches/${catchId}/edit`}>EDIT</Link>}

         {/* <button onClick={handleDeleteClick}>Delete</button> */}
      </CatchDiv>
   );
};

export default Catch;
