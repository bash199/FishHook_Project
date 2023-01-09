import React from "react";
import {Link} from "react-router-dom";
import {
   CardDiv,
   ImageDiv,
   Image,
   AboutDiv,
   H4,
   Hr,
   FishDiv,
   LocationName,
} from "./style/CardUI";

const Card = ({fish: {image, title, _id, locationName, fish, caughtBy}}) => {
   return (
      <CardDiv>
         <ImageDiv>
            <Image src={image} alt={title} />
         </ImageDiv>
         <AboutDiv>
            <Link
               style={{textDecoration: "none", color: "#222"}}
               className="links "
               to={`/allcatches/${_id}`}
            >
               <H4>{title}</H4>
            </Link>
            <Hr />
            <FishDiv>
               <p>Fish caught : {fish}</p>
            </FishDiv>
            <LocationName>
               <p>Caught At: {locationName}</p>
            </LocationName>
            <LocationName>
               <p>Caught By: {caughtBy}</p>
            </LocationName>
         </AboutDiv>
      </CardDiv>
   );
};

export default Card;
