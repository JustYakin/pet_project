import * as React from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { ReactElement } from 'react';
import Link from '@mui/material/Link';
import { grey } from '@mui/material/colors';
import { Container } from '@mui/material';


const SuccessLink = styled(Link)(({ theme }) => ({
    color: grey[600]
  }));

function Footer():ReactElement {
    return (
      <Container maxWidth="xl">

        <Stack
  direction="column"
  alignContent="center"
  justifyContent="center"
  alignItems="flex-start"
  flexWrap= 'wrap'
  spacing={4}
  marginBottom="50px"
>

        <SuccessLink href="#" underline="hover">Questions? Contact us.</SuccessLink>
<Stack
  direction="row"
  justifyContent="center"
  alignItems="flex-start"
  spacing={22}
>

        <Stack
  direction="column"
  justifyContent="center"
  alignItems="flex-start"
  spacing={2}
><SuccessLink href="#" underline="hover">
FAQ 
  </SuccessLink>
<SuccessLink href="#" underline="hover">
  Investor Relations
  </SuccessLink>
<SuccessLink href="#" underline="hover">
  Privacy
  </SuccessLink>
<SuccessLink href="#" underline="hover">
  Speed Test
  </SuccessLink>  
</Stack>


<Stack
  direction="column"
  justifyContent="center"
  alignItems="flex-start"
  spacing={2}
><SuccessLink href="#" underline="hover">
Help Center 
  </SuccessLink>
<SuccessLink href="#" underline="hover">
Jobs
  </SuccessLink>
<SuccessLink href="#" underline="hover">
Cookie Preferences
  </SuccessLink>
<SuccessLink href="#" underline="hover">
Legal Notices
  </SuccessLink>  
</Stack>

<Stack
  direction="column"
  justifyContent="center"
  alignItems="flex-start"
  spacing={2}
><SuccessLink href="#" underline="hover">
Account 
  </SuccessLink>
<SuccessLink href="#" underline="hover">
Ways to Watch
  </SuccessLink>
<SuccessLink href="#" underline="hover">
Corporate Information
  </SuccessLink>
<SuccessLink href="#" underline="hover">
Only on Netflix
  </SuccessLink>  
</Stack>

<Stack
  direction="column"
  justifyContent="center"
  alignItems="flex-start"
  spacing={2}
><SuccessLink href="#" underline="hover">
Media Center 
  </SuccessLink>
<SuccessLink href="#" underline="hover">
Terms of Use
  </SuccessLink>
<SuccessLink href="#" underline="hover">
Contact Us
  </SuccessLink>

</Stack>
</Stack>
</Stack>
</Container>
    );
}
export default Footer;