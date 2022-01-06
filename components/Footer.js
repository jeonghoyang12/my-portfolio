import React from "react";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles((theme) => ({
  footer: {
    width: `100%`,
    position: "relative",
    overflow: "hidden",
    marginTop: "6em",
    padding: "2em 0",
  },
  copyright: {
    color: "black",
    fontSize: "13px",
    paddingTop: "10px",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Divider />
      <Container maxWidth="lg">
        <Grid
          item
          container
          component={"a"}
          target="_blank"
          rel="nonreferrer noopener"
          href="#"
          justify="center"
          style={{
            textDecoration: "none",
          }}
        >
          <Typography className={classes.copyright}>
            &copy; 2022 Kevin Yang
          </Typography>
        </Grid>
      </Container>
    </footer>
  );
}
