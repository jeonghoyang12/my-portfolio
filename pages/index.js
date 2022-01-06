import React from "react";
import { makeStyles } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import NavRow from "../components/NavRow";
import About from "../components/About";
import Experiences from "../components/Experiences";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const useStyles = makeStyles({
  container: {
    paddingTop: "200px",
    position: "static",
    maxWidth: "700px",
  },
  typography: {
    // paddingTop: "10px",
    fontWeight: "bold",
    fontSize: "28px",
  },
  divider: {
    paddingTop: "40px",
  },
  nav: {
    paddingTop: "20px",
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.container} maxWidth="sm">
        {/* Main page */}
        <Typography variant="h4" style={{ paddingBottom: "10px" }}>
          🧑‍💻
        </Typography>
        <Typography className={classes.typography} variant="h4">
          I am Kevin, a software engineer, <br /> based in Seoul, South Korea.
        </Typography>
        <Typography
          variant="h6"
          style={{ fontSize: "15px", paddingTop: "20px" }}
        >
          I like to build a server structure using back-end programming, and
          little bit of UI front-end programming.
        </Typography>
        <Divider className={classes.divider} />
        <Box sx={{ flexGrow: 1 }}>
          <Grid className={classes.nav} container spacing={1}>
            <Grid container item sx={3} spacing={4}>
              <NavRow />
            </Grid>
          </Grid>
        </Box>

        {/* Body */}
        <About />
        <Experiences />
        <Skills />
        <Projects />
        <Footer />
      </Container>
    </React.Fragment>
  );
}
