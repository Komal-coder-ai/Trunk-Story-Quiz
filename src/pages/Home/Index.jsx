import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import homeImage from '../../assets/homePage.png';
import ButtonDynamic from '../../components/button/Index';
import Footer from '../../components/footer/Index';
import './index.css';
import { BsFillArrowDownLeftSquareFill } from "react-icons/bs";
import  arrowimage from'../../assets/arrow.png'

const Home = () => {
  return (
    <>

      <Container>
        <Grid container  alignItems="center">
          <Grid item xs={10}>
            <h2>
              Welcome  the to Trunk Story Quiz
            </h2>
          </Grid>
          <Grid item xs={2} container justifyContent="flex-end">

            <span className="arrow-btn" >
              {/* <CallReceivedIcon
              /> */}
              <img src={arrowimage} alt="" 
               style={{ fontWeight: '900' ,fontSize:"30px" , marginBottom:"20px"}}
             
              />
              {/* <ArrowOutwardIcon sx={{ fontWeight: 'bold' ,fontSize:"30px"}} /> */}
            </span>    </Grid>
        </Grid>

        <Grid container justifyContent="center" alignItems="center" >
          <Box className="outerdiv">
            <Box className="innerdiv"></Box>
          </Box>
        </Grid>

        <Grid container justifyContent="center" alignItems="center">

         <Grid item xs={11} justifyContent={"center"}>
         <h3  
         style={{
          fontWeight: '500',

         }}>
            Play our Indian Armed Forces Quizzes and win shopping discount coupons
          </h3>
          </Grid>
        </Grid>

      </Container>

      <Grid container justifyContent="center" sx={{ my: 3 }}>
        <Link to="/startquiz">
          <ButtonDynamic width="200px" height="50px" bgColor="black" text="Let's Start" />
        </Link>
      </Grid>

   
    </>
  );
};

export default Home;
