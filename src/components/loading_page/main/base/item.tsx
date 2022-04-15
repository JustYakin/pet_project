import * as React from 'react';
import Accordion, { AccordionProps } from '@mui/material/Accordion';
import AccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import AccordionDetails, { AccordionDetailsProps } from '@mui/material/AccordionDetails';
import {Typography} from '@mui/material';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import { PropsWithChildren } from 'react';

interface HeaderProps {
    title: string;
    text:string;
  }

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

const AccordionWrapper:  React.FC<PropsWithChildren<HeaderProps>> =({title, text}) => {
  return (
      <>
        <SuccessAccordion>
        <SuccessAccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <SuccessTypography>{title}</SuccessTypography>
        </SuccessAccordionSummary>
        <SuccessAccordionDetails>
          <SuccessTypography>
         {text}
          </SuccessTypography>
        </SuccessAccordionDetails>
      </SuccessAccordion>
    </>
  )
}

export default AccordionWrapper