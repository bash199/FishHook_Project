import React, {useEffect, useState} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import {useCRUD} from "../../hooks/UseCRUD";

const Catch = () => {
   const param = useParams();
   const {readById, deleteCatch, state, error, isLoading} = useCRUD();
   // const [direct, setRedirect] = useState(false);
   useEffect(() => {
      setTimeout(() => {
         readById(param.catchId);
      }, 500);
   }, []);
   const handleDeleteClick = () => {
      deleteCatch(state.id);
      // setTimeout(() => {
      //    setRedirect(true);
      // }, 500);
   };
   // const navigate = useNavigate();
   // if (direct) {
   //    return navigate("/allcatches");
   // }
   return (
      <div>
         Catch
         {!error && (
            <center>
               {state && (
                  <div>
                     <img src={state.image} alt="dsd" />
                  </div>
               )}
            </center>
         )}
         {error && <h1>{error.message}</h1>}
         <Link onClick={handleDeleteClick} to={"/allcatches"}>
            Delete
         </Link>
         {/* <button onClick={handleDeleteClick}>Delete</button> */}
      </div>
   );
};

export default Catch;
