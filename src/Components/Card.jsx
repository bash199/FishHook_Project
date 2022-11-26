import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const CardDiv = styled.div`
   width: 400px;
   height: 200px;
   margin: 5px;
   border: solid black 2px;
   display: flex;
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

const Card = ({fish: {image, title,id}}) => {
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
