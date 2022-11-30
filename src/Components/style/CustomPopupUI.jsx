import styled from "styled-components";
export const PopUpDiv = styled.div`
width: 100%;
color: white;
cursor: default;
/* font-family: 'Montserrat', sans-serif; */
`;
export const PopUpImage = styled.img`
width: 220px;
height: 150px;
border-radius: 5px 5px 0 0;
`;
export const Section = styled.section`
font-family: 'Montserrat', sans-serif;
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 5px;
`;
export const BtnBox = styled.div`
width: 210px;
display: flex;
justify-content: center;
`;
export const Btn = styled.button`
width: 95px;
height: 25px;
color: white;
font-size: 1rem;
cursor: pointer;
background: rgba(255, 255, 255, 0.05);
box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
backdrop-filter: blur(1px);
-webkit-backdrop-filter: blur(1px);
border-radius: 3px;
border: 1px solid rgba(255, 255, 255, 0.18);
font-family: 'Montserrat', sans-serif;
margin: 7px;
&:hover {
   transition: 0.1s ease-in-out;
   transform: scale(1.03);
}
`;
export const H3 = styled.h3`
font-size: 1.2rem;
font-weight: 500;
font-family: 'Montserrat', sans-serif;
margin: 2px;
`;
export const H4 = styled.h4`
font-size: 0.9rem;
font-weight: 500;
font-family: 'Montserrat', sans-serif;
margin: 2px;
`;