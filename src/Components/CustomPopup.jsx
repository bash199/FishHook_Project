import {useContext} from "react";
import {Popup} from "react-map-gl";
import {Link} from "react-router-dom";
import {popupCtx} from "./AllCatchMap";
import styled from "styled-components";
const PopUpDiv = styled.div`
   width: 100%;
   /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
   /* border-radius: 10px; */
   cursor: default;
`;
const PopUpImage = styled.img`
   width: 220px;
   height: 165px;
   /* padding: 5px 0; */
   /* margin: 10px 0; */
   /* margin-bottom: 0.5rem; */
`;
const CustomPopup = () => {
   const {selectedCatch, setSelectedCatch} = useContext(popupCtx);
   const closePop = () => {
      setSelectedCatch(null);
   };
   return (
      <Popup
         latitude={selectedCatch.lat}
         longitude={selectedCatch.lng}
         onClose={closePop}
         closeButton={true}
         closeOnClick={false}
      >
         <PopUpDiv style={{padding: "0px"}}>
            <PopUpImage
               src={selectedCatch.image}
               className="popupPost-img"
               alt={selectedCatch.title}
            />
            <section className="markerPopup-info">
               <h5>{selectedCatch.title}</h5>
               {/* <p className="popupPost-user">
                  <em>Posted By: {selectedCatch.user.username}</em>
               </p> */}
               {/* {displayCatchLocation()} */}
               <Link to={`/allcatches/${selectedCatch.id}`}>Read More</Link>
            </section>
         </PopUpDiv>
      </Popup>
   );
};
export default CustomPopup;
