import * as React from 'react';
import Accordion, { AccordionProps } from '@mui/material/Accordion';
import AccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import AccordionDetails, { AccordionDetailsProps } from '@mui/material/AccordionDetails';
import {Typography,TextField, Button, Container,Box} from '@mui/material';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';



const SuccessAccordion = styled(Accordion)<AccordionProps>(({ theme }) => ({
    maxWidth: "850px",
    margin: "10px auto",
    textAlign: "start",

    "&.Mui-expanded":{
      margin: '10px auto'
    }

    
  }));

  const SuccessAccordionDetails = styled(AccordionDetails)<AccordionDetailsProps>(({ theme }) => ({
    backgroundColor:"#303030"
  }));

  const SuccessTypography = styled(Typography)(({ theme }) => ({
    color: "#fff",
    fontSize:"29px",
  }));

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

  const SuccessAccordionSummary = styled(AccordionSummary)<AccordionSummaryProps>(({ theme }) => ({
    backgroundColor:"#303030",
    padding:"5px 25px",
    ".css-yw020d-MuiAccordionSummary-expandIconWrapper.Mui-expanded":{
      transform:" rotate(135deg)"
      },
      ".css-yw020d-MuiAccordionSummary-expandIconWrapper":{
        color:'#fff' 
      },      

  }));

function List() {
  return (    
    <Box
      sx={{
        width: "100hw",
        height: "auto",
        backgroundColor: '#000',  
        margin:"50px 0",
        borderBottom: "8px solid #222"
      }}>
   <Container maxWidth="xl">
      <h1 color='#fff'>Frequently Asked Questions</h1>
      <SuccessAccordion sx={{ margin: 'auto' }}>
        <SuccessAccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <SuccessTypography>What is Netflix?</SuccessTypography>
        </SuccessAccordionSummary>
        <SuccessAccordionDetails>
          <SuccessTypography>
            Netflix is a streaming service that offers a wide variety
            of award-winning TV shows, movies, anime, documentaries,
            and more on thousands of internet-connected devices.
          </SuccessTypography>
        </SuccessAccordionDetails>
      </SuccessAccordion>
      <SuccessAccordion>
        <SuccessAccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <SuccessTypography>How much does Netflix cost?</SuccessTypography>
        </SuccessAccordionSummary>
        <SuccessAccordionDetails>
          <SuccessTypography>
            Watch Netflix on your smartphone, tablet, Smart TV,
            laptop, or streaming device, all for one fixed monthly fee.
            Plans range from EUR7.99 to EUR11.99 a month. No extra costs, no contracts.
          </SuccessTypography>
        </SuccessAccordionDetails>
      </SuccessAccordion>
      <SuccessAccordion>
        <SuccessAccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <SuccessTypography>Where can I watch?</SuccessTypography>
        </SuccessAccordionSummary>
        <SuccessAccordionDetails>
          <SuccessTypography>
            Watch anywhere, anytime. Sign in with your Netflix account to watch instantly
            on the web at netflix.com from your personal computer or on any
            internet-connected device that offers the Netflix app, including smart TVs,
            smartphones, tablets, streaming media players and game consoles.
            <br />
            <br />
            You can also download your favorite shows with the iOS, Android,
            or Windows 10 app. Use downloads to watch while you're on the go
            and without an internet connection. Take Netflix with you anywhere.
          </SuccessTypography>
        </SuccessAccordionDetails>
      </SuccessAccordion>
      <SuccessAccordion>
        <SuccessAccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <SuccessTypography>How do I cancel?</SuccessTypography>
        </SuccessAccordionSummary>
        <SuccessAccordionDetails>
          <SuccessTypography>
            Netflix is flexible. There are no pesky contracts and no commitments.
            You can easily cancel your account online in two clicks.
            There are no cancellation fees – start or stop your account anytime.
          </SuccessTypography>
        </SuccessAccordionDetails>
      </SuccessAccordion>
      <SuccessAccordion>
        <SuccessAccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <SuccessTypography>What can I watch on Netflix?</SuccessTypography>
        </SuccessAccordionSummary>
        <SuccessAccordionDetails>
          <SuccessTypography>
            Netflix has an extensive library of feature films,
            documentaries, TV shows, anime, award-winning Netflix originals,
            and more. Watch as much as you want, anytime you want.
          </SuccessTypography>
        </SuccessAccordionDetails>
      </SuccessAccordion>
      <SuccessAccordion>
        <SuccessAccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel7a-content"
          id="panel7a-header"
        >
          <SuccessTypography>Is Netflix good for kids?</SuccessTypography>
        </SuccessAccordionSummary>
        <SuccessAccordionDetails>
          <SuccessTypography>
            The Netflix Kids experience is included in your membership
            to give parents control while kids enjoy family-friendly
            TV shows and movies in their own space.
            <br />
            <br />
            Kids profiles come with PIN-protected parental controls that
            let you restrict the maturity rating of content kids can watch and
            block specific titles you don`t want kids to see.
          </SuccessTypography>
        </SuccessAccordionDetails>
      </SuccessAccordion>
      <SuccessAccordion>
        <SuccessAccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel8a-content"
          id="panel8a-header"
        >
          <SuccessTypography>How much does Netflix cost?</SuccessTypography>
        </SuccessAccordionSummary>
        <SuccessAccordionDetails>
          <SuccessTypography>
            Watch Netflix on your smartphone, tablet, Smart TV,
            laptop, or streaming device, all for one fixed monthly fee.
            Plans range from EUR7.99 to EUR11.99 a month. No extra costs, no contracts.
          </SuccessTypography>
        </SuccessAccordionDetails>
      </SuccessAccordion>
      <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
      <SuccessTextField id="filled-basic" label="Email adress" variant="filled" />
      <SuccessButton variant="contained">Get Started {'>'}</SuccessButton>
    </Container>
    </Box>
  
  );
}


export default List;