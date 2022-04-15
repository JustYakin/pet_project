import { Box, Container, Stack } from "@mui/material";
import React from "react";
import Flex from "./base/flex";
import WrapperContent from "./base/wrapper";
import List from "./list/list";



function Main() {
    return (
        <>
    <WrapperContent>
           <Flex>
            <Box sx={{
                textAlign: "start",
            }}>
                <h1>Enjoy on your TV.</h1>
                <h2>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
            </Box>
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"></img>

            </Flex>  
    </WrapperContent> 

    <WrapperContent>
           <Flex>
           <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"></img>

             <Box sx={{
                textAlign: "start",
            }}>
                <h1>Download your shows to watch offline.</h1>
                <h2>Save your favorites easily and always have something to watch.</h2>
            </Box>
           
            </Flex>  
    </WrapperContent> 

      <WrapperContent>
           <Flex>
             <Box sx={{
                textAlign: "start",
            }}>
                <h1>Watch everywhere.</h1>
                <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h2>
         </Box>
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"></img>
            {/* <Box>
                <video autoPlay={true} loop playsInline muted>
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4"/>
                </video>
            </Box> */}
            </Flex>  
        </WrapperContent>

        <WrapperContent>
           <Flex>
            <img src="https://occ-0-3428-2773.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd"></img>
            <Box sx={{
                textAlign: "start",
            }}><h1>Create profiles for kids.</h1>
            <h2>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h2>
               

               </Box>
            </Flex>  
         </WrapperContent>  

                  

        <List/>
      </>
    );
}
export default Main;