import { Box, Container, Stack } from "@mui/material";
import { blue } from "@mui/material/colors";
import { padding } from "@mui/system";
import React from "react";
import Flex from "./base/flex";
import WrapperContent from "./base/wrapper";
import List from "./list/list";


const h2 = {
    fontSize: "26px",
    fontWeight: "400"
  }

  const h1 = {
    fontSize: "50px",
    marginBottom: "5px"
  }



function Main() {
    return (
        <>
    <WrapperContent>
           <Flex>
            <Box sx={{
                textAlign: "start",
                width:"50%",

            }}>
                <h1 style={h1}>Enjoy on your TV.</h1>
                <h2 style={h2}>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
            </Box>
            <Box sx={{    width:"50%",

           position: "relative",
         }}>
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" style={{ position: "relative", zIndex: "1", maxWidth: "90%"}}></img>
            
            <Box >
            <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" autoPlay loop muted playsInline style={{ width: "100%",
            maxWidth: "73%",
            position: "absolute",
            top: "48%",
            transform: "translate(-50%,-50%)",
            left: "50%"}}></video>
            </Box>
            </Box>

            </Flex>  
    </WrapperContent> 

    <WrapperContent>
           <Flex>
           <Box sx={{
               
           position: "relative",
           margin: "0 0 0 -6%"
            }}>
             <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" ></img>
             <Box sx={{
                   maxWidth: "60%",
                   position: "absolute",
                   top: "80%",
                   transform: "translate(-50%,-50%)",
                   left: "50%",
                   background: "black",
                   boxShadow:" 0 0 2em 0 #000",
                   borderRadius: "15px",
                   padding: "0 20px",
                   border: "solid grey 2px",
                   display: "flex",
                   gap: "20px",
                   alignItems: "center"                   
                }}>
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" style={{maxWidth: "50px"}}></img>
                
                <Box sx={{
                        textAlign: "start"

                }}>
                    <h4 style={{ margin:"0"}}>Stranger Things</h4>
                    <p style={{color:"blue", margin:"0"}}>Downloading...</p>
                </Box>
                <Box>
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" style={{maxWidth: "65px"}}></img>
                </Box>
                </Box>
                </Box>

             <Box sx={{
                textAlign: "start",
                width:"50%",
                
            }}>
                <h1 style={h1}>Download your shows to watch offline.</h1>
                <h2 style={h2}>Save your favorites easily and always have something to watch.</h2>
               
            </Box>
           
            </Flex>  
    </WrapperContent> 


      <WrapperContent>
           <Flex>
             <Box sx={{
                textAlign: "start", 
                width: "50%"               
            }}>
                <h1 style={h1}>Watch everywhere.</h1>
                <h2 style={h2}>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h2>
         </Box>
         <Box sx={{
           position: "relative",
           width: "50%"

         }}>
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" style={{ position: "relative", zIndex: "1"} } ></img>
       
            <Box >
            <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" autoPlay loop muted playsInline style={{ width: "100%",
            maxWidth: "70%",
            position: "absolute",
            top: "33%",
            transform: "translate(-50%,-50%)",
            left: "55%"}}></video>
            </Box>
        </Box>
            </Flex>  
        </WrapperContent>

        <WrapperContent>
           <Flex>
            <img src="https://occ-0-3428-2773.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd" style={{    width:"50%"}}></img>
            
            <Box sx={{    width:"50%",

                textAlign: "start",
            }}><h1 style={h1}>Create profiles for kids.</h1>
            <h2 style={h2}>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h2>
               

               </Box>
            </Flex>  
         </WrapperContent>  

                  

        <List/>
      </>
    );
}
export default Main;