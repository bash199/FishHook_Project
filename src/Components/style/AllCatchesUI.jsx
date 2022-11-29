import styled from "styled-components";
export const AllCatchesDiv = styled.div`
   width: 100%;
   min-height: 100vh;
   background-image: url("/images/back.jpg");
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   position: relative;
   display: flex;
   flex-direction: row;
   overflow: hidden;
   @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      flex-wrap: wrap;
   }
`;
export const CardsBox = styled.div`
   color: white;
   text-align: center;
`;
export const H1 = styled.h1`
   margin:10px ;
   font-weight: 200;
`;