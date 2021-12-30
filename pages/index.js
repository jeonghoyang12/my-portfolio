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
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    position: "static",
  },
  typography: {
    paddingTop: "20px",
    color: "#707070",
  },
  divider: {
    paddingTop: "50px",
  },
  nav: {
    paddingTop: "20px",
    color: "#707070",
  },
});

function NavRow() {
  return (
    <React.Fragment>
      <Grid item xs={12} sm={3}>
        <Link underline="none" color="#707070" href="#">
          <Typography>👤 ABOUT</Typography>
        </Link>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Link underline="none" color="#707070" href="#">
          <Typography>🧑‍💻 EXPERIENCES</Typography>
        </Link>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Link underline="none" color="#707070" href="#">
          <Typography>💻 SKILLS</Typography>
        </Link>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Link underline="none" color="#707070" href="#">
          <Typography>📋 PROJECTS</Typography>
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
        <Typography variant="h4">
          <strong>Kevin Yang</strong>
        </Typography>
        <Typography className={classes.typography} variant="h6">
          I am a software engineer,
          <br />
          currently studying computer science in Ohio, United States.
        </Typography>
        <Divider className={classes.divider} />
        <Box sx={{ flexGrow: 1 }}>
          <Grid className={classes.nav} container spacing={1} sx={2}>
            <Grid container item sx={3}>
              <NavRow />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
