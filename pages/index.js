import React from "react";
import { makeStyles } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

const useStyles = makeStyles({
  container: {
    paddingTop: "200px",
    position: "static",
    maxWidth: "700px",
  },
  typography: {
    paddingTop: "20px",
    color: "#707070",
    fontSize: "18px",
  },
  divider: {
    paddingTop: "50px",
  },
  nav: {
    paddingTop: "20px",
    color: "#707070",
  },
  navText: {
    fontSize: "10px",
  },
});

function NavRow() {
  return (
    <React.Fragment>
      <Grid item xs="auto" xs={6} sm={3}>
        <Link underline="none" color="#707070" href="#">
          <Typography fontSize="13px">👤 ABOUT</Typography>
        </Link>
      </Grid>
      <Grid item xs="auto" xs={6} sm={3}>
        <Link underline="none" color="#707070" href="#">
          <Typography fontSize="13px">💼 EXPERIENCES</Typography>
        </Link>
      </Grid>
      <Grid item xs="auto" xs={6} sm={3}>
        <Link underline="none" color="#707070" href="#">
          <Typography fontSize="13px">💻 SKILLS</Typography>
        </Link>
      </Grid>
      <Grid item xs="auto" xs={6} sm={3}>
        <Link underline="none" color="#707070" href="#">
          <Typography fontSize="13px">📋 PROJECTS</Typography>
        </Link>
      </Grid>
    </React.Fragment>
  );
}

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.container} maxWidth="sm">
        <Typography variant="h4" style={{ paddingBottom: "10px" }}>
          🧑‍💻
        </Typography>
        <Typography variant="h4">
          <strong>Hi!</strong>
        </Typography>
        <Typography className={classes.typography} variant="h6">
          I am <strong>Kevin</strong>, software engineer,
          <br />
          currently studying computer science in Ohio, United States.
        </Typography>
        <Divider className={classes.divider} />
        <Box sx={{ flexGrow: 1 }}>
          <Grid className={classes.nav} container spacing={3}>
            <Grid container item sx={1} spacing={3}>
              <NavRow />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
