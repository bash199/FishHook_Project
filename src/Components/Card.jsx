import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
const CardDiv = styled.div`
   width: 500px;
   height: 200px;
   margin: 10px;
   border: solid black 2px;
   display: flex;
   background: rgba(255, 255, 255);
   /* box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); */
   /* backdrop-filter: blur(3.5px); */
   /* -webkit-backdrop-filter: blur(3.5px);  */
    border-radius: 10px;
   border: 1px solid rgba(255, 255, 255, 0.18);
`;
const IamgeDiv = styled.div`
   width: 40%;
   height: 100%;
`;
const Iamge = styled.img`
   width: 100%;
   height: 100%;
`;
const AboutDiv = styled.div`
   width: 60%;
   height: 100%;
   text-align: center;
`;
const H4 = styled.h4`
   margin-top: 5px;
`;

const Card = ({fish: {image, title, id}}) => {
   return (
      <CardDiv>
         <IamgeDiv>
            <Iamge src={image} alt={title} />
         </IamgeDiv>
         <AboutDiv>
            <Link to={`/allcatches/${id}`}>
               <H4>{title}</H4>
            </Link>
         </AboutDiv>
      </CardDiv>
   );
};

export default Card;
