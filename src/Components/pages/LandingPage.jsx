import React from "react";
import {useNavigate} from "react-router-dom";
import {Div,Overlay,Box,Btn,H1,Title,WelcomeTilte} from "../style/LandingPageUI"

const LandingPage = () => {
   const navigate = useNavigate();
   const handleClick = () => {
      navigate("/allcatches");
   };
   return (
      <Div className="landingPage">
         <Box>
            <WelcomeTilte> Welcome to FishHook!</WelcomeTilte>
            <Title>What is FishHook?</Title>
            <div>
               <H1>
                  FishHook is a social platform to share and explore new
                  fruitful fishing areas based on a real-time user activities.
               </H1>
            </div>
            <Btn onClick={handleClick}>Get Fishin'</Btn>
         </Box>
         <Overlay />
      </Div>
   );
};

export default LandingPage;
