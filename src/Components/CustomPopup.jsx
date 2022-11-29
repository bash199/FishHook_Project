import {useContext} from "react";
import {Popup} from "react-map-gl";
import {Link} from "react-router-dom";
import {popupCtx} from "./AllCatchMap";
import styled from "styled-components";

const PopUpDiv = styled.div`
   width: 100%;
   cursor: default;
`;
const PopUpImage = styled.img`
   width: 220px;
   height: 165px;
`;

const CustomPopup = () => {
   const {selectedCatch, setSelectedCatch} = useContext(popupCtx);
   const closePop = () => {
      setSelectedCatch(null);
   };

   return (
      <Popup
         style={{cursor: "pointer"}}
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
               <Link className="links" to={`/allcatches/${selectedCatch.id}`}>
                  Read More
               </Link>
            </section>
         </PopUpDiv>
      </Popup>
   );
};
export default CustomPopup;
