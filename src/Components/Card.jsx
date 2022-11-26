import React from "react";
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

const Card = ({fish: {iamge, title}}) => {
   return (
      <CardDiv>
         <IamgeDiv>
            <Iamge src={iamge} alt={title} />
         </IamgeDiv>
         <AboutDiv>
            <H4>{title}</H4>
         </AboutDiv>
      </CardDiv>
   );
};

export default Card;
