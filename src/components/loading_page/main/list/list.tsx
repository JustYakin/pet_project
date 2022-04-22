import * as React from 'react';
import {TextField, Button, Container} from '@mui/material';
import { styled } from '@mui/material/styles';
import WrapperContent from '../base/wrapper';
import AccordionWrapper from '../base/item';




  const SuccessTextField = styled(TextField)(({ theme }) => ({
      maxWidth: "450px",
      width: "100%", 
      marginBottom: "100px",
      backgroundColor: "#fff",
      ".css-o943dk-MuiFormLabel-root-MuiInputLabel-root.Mui-focused":{
        color:"rgba(0, 0, 0, 0.6)"
        },
      ".css-cio0x1-MuiInputBase-root-MuiFilledInput-root:after":{
        borderBottom:"none",
        padding: "5px"
       },
       ".css-cio0x1-MuiInputBase-root-MuiFilledInput-root":{
        borderBottom:"none",
        padding: "5px"
       },


    }));

    const SuccessButton = styled(Button)(({ theme }) => ({
      backgroundColor: "#d32f2f",
      padding: "16px",
      borderRadius: "0",
      fontSize: "20px",
      maxWidth: "250px",
      width: "100%",
      ":hover":{
        backgroundColor: "#a72626",
      }

    }));





function List() {
  return (    
    <WrapperContent>
   <Container maxWidth="xl">
      <h1 color='#fff'>Frequently Asked Questions</h1>

      <AccordionWrapper title="What is Netflix?" text="Netflix is a streaming service that offers
       a wide variety
            of award-winning TV shows, movies, anime, documentaries,
            and more on thousands of internet-connected devices.">
      </AccordionWrapper>

      <AccordionWrapper title="How much does Netflix cost?" text="Watch Netflix on your smartphone, tablet, Smart TV,
            laptop, or streaming device, all for one fixed monthly fee.
            Plans range from EUR7.99 to EUR11.99 a month. No extra costs, no contracts.">
      </AccordionWrapper>

      <AccordionWrapper title="Where can I watch?" text=" Watch anywhere, anytime.
       Sign in with your Netflix account to watch instantly
            on the web at netflix.com from your personal computer or on any
            internet-connected device that offers the Netflix app, including smart TVs,
            smartphones, tablets, streaming media players and game consoles. 

            You can also download your favorite shows with the iOS, Android,
            or Windows 10 app. Use downloads to watch while you're on the go
            and without an internet connection. Take Netflix with you anywhere.">
      </AccordionWrapper>

      <AccordionWrapper title="How do I cancel?" text="  Netflix is flexible. There are no pesky contracts and no commitments.
            You can easily cancel your account online in two clicks.
            There are no cancellation fees – start or stop your account anytime.">
      </AccordionWrapper>


      <AccordionWrapper title="What can I watch on Netflix?" text=" Netflix has an extensive library of feature films,
            documentaries, TV shows, anime, award-winning Netflix originals,
            and more. Watch as much as you want, anytime you want.">
      </AccordionWrapper>

      <AccordionWrapper title="Is Netflix good for kids?" text=" The Netflix Kids experience is included in your membership
            to give parents control while kids enjoy family-friendly
            TV shows and movies in their own space.

            Kids profiles come with PIN-protected parental controls that
            let you restrict the maturity rating of content kids can watch and
            block specific titles you don`t want kids to see.">
      </AccordionWrapper>


      <AccordionWrapper title="Why am I seeing this language?" text="Your browser preferences determine the language shown here.">
      </AccordionWrapper>

      <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
      <SuccessTextField id="filled-basic" label="Email adress" variant="filled" />
      <SuccessButton variant="contained">Get Started {'>'}</SuccessButton>
    </Container>
    </WrapperContent>
  
  );
}


export default List;