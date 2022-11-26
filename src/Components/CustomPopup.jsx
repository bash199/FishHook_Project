import {useContext} from "react";
import {Popup} from "react-map-gl";
import {Link} from "react-router-dom";
import {popupCtx} from "./AllCatchMap";
import {PopUpDiv, PopUpImage} from "./UI/CustomPopupUI";

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
