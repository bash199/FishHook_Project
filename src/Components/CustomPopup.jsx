import {useContext} from "react";
import {Popup} from "react-map-gl";
import {Link} from "react-router-dom";
import {popupCtx} from "./AllCatchMap";
import "./style/popup.css";
import {
   PopUpDiv,
   PopUpImage,
   Section,
   BtnBox,
   Btn,
   H3,
   H4,
} from "./style/CustomPopupUI";

const CustomPopup = () => {
   const {selectedCatch, setSelectedCatch} = useContext(popupCtx);
   const closePop = () => {
      setSelectedCatch(null);
   };

   return (
      <Popup
         style={{cursor: "pointer", padding: "0"}}
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
            <Section className="markerPopup-info">
               <H3>{selectedCatch.title}</H3>
               <H4>Fish Caught : {selectedCatch.fish}</H4>
               <H4>Caught By : {selectedCatch.caughtBy}</H4>
               <Link
                  style={{textDecoration: "none", color: "#222"}}
                  to={`/allcatches/${selectedCatch._id}`}
               >
                  <BtnBox>
                     <Btn>Read More</Btn>
                  </BtnBox>
               </Link>
            </Section>
         </PopUpDiv>
      </Popup>
   );
};
export default CustomPopup;
