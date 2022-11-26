import {useContext} from "react";
import {Popup} from "react-map-gl";
import {popupCtx} from "./AllCatchMap";
import { PopUpDiv,PopUpImage } from "./UI/CustomPopupUI";

const CustomPopup = () => {
   const {selectedCatch, setSelectedCatch} = useContext(popupCtx);
   const closePop = () => {
      setSelectedCatch(null);
   };
   return (
      <Popup
         latitude={selectedCatch.latitude}
         longitude={selectedCatch.longitude}
         onClose={closePop}
         closeButton={true}
         closeOnClick={false}
      >
         <PopUpDiv >
            <PopUpImage
               src={selectedCatch.iamge}
               className="popupPost-img"
               alt={selectedCatch.title}
            />

            <section className="markerPopup-info">
               <h5>
                  <strong>{selectedCatch.title}</strong>
               </h5>
               {/* <p className="popupPost-user">
                  <em>Posted By: {selectedCatch.user.username}</em>
               </p> */}
               {/* {displayCatchLocation()} */}
               {/* <Link
                  className="btn btn-primary popupBtn"
                  to={`/posts/${selectedCatch._id}`}
               >
                  Read More
               </Link> */}
            </section>
         </PopUpDiv>
      </Popup>
   );
};
export default CustomPopup;