import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {useCRUD} from "../../hooks/UseCRUD";

const Catch = () => {
   const {catchId} = useParams();
   const {readById, deleteCatch, state, error, isLoading} = useCRUD();
   useEffect(() => {
      readById(catchId);
   }, []);
   const handleDeleteClick = () => {
      deleteCatch(state.id);
   };

   return (
      <div>
         {isLoading && <h1>Spinner</h1>}
         {!isLoading && (
            <center>
               {state && (
                  <div>
                     <img src={state.image} alt="dsd" />
                  </div>
               )}
            </center>
         )}
         {error && <h1>{error.message}</h1>}
         {!isLoading && (
            <Link onClick={handleDeleteClick} to={"/allcatches"}>
               Delete
            </Link>
         )}
         {!isLoading && <Link to={`/allcatches/${catchId}/edit`}>EDIT</Link>}

         {/* <button onClick={handleDeleteClick}>Delete</button> */}
      </div>
   );
};

export default Catch;
