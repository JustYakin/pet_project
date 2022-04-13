import { Box, Container, Stack } from "@mui/material";
import React from "react";
import List from "./list/list";



function Main() {
    return (
        <>
    <Box
        sx={{
          width: "100hw",
          height: "auto",
          backgroundColor: '#000',  
          margin:"50px 0",
          borderBottom: "8px solid #222"
    }}>
      <Container maxWidth="xl">
           <Stack
             direction="row"
             justifyContent="center"
             alignItems="center"
             spacing={6}
             padding="50px"
            >
            <img src="https://occ-0-3428-2773.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd"></img>
            <Box sx={{
                textAlign: "start",
            }}>
                <h1>Create profiles for kids.</h1>
                <h2>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h2>
            </Box>
            </Stack>
            </Container>
    </Box>
             <List/>
      </>
    );
}
export default Main;