import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const ButtonMailto = ({ mailto, label }) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

const useStyles = makeStyles({
  bodyText: {
    paddingTop: "15px",
    fontSize: "15px",
  },
});

export default function About() {
  const classes = useStyles();
  return (
    <section id="about">
      <Typography style={{ paddingTop: "250px", fontSize: "20px" }}>
        <strong>👤 ABOUT</strong>
      </Typography>
      <Divider style={{ paddingTop: "10px" }} />
      <Typography className={classes.bodyText}>
        My name is Kevin or Jeongho Yang in Korean.
      </Typography>
      <Typography className={classes.bodyText}>
        I am a student majoring in cs at Bowling Green State University, Ohio,
        United States.
      </Typography>
      <Typography className={classes.bodyText}>
        I am interested and have some working experiences in back-end
        programming and little bit of web front-end programming.
      </Typography>
      <Grid container spacing={3} columns={10} style={{ paddingTop: "30px" }}>
        <Grid item xs={8}>
          <Typography style={{ fontSize: "15px" }}>
            Get in touch 👉 wjdwjdgh6998@gmail.com
          </Typography>
        </Grid>
        <Grid item>
          <Link
            href="https://github.com/jeonghoyang12"
            style={{ color: "black" }}
          >
            <GitHubIcon />
          </Link>
          <Link
            href="https://www.linkedin.com/in/kevin-yang-0194451a9/"
            style={{ marginLeft: "10px", color: "black" }}
          >
            <LinkedInIcon />
          </Link>
          <Link href="#" style={{ marginLeft: "10px", color: "black" }}>
            <InstagramIcon />
          </Link>
        </Grid>
      </Grid>
    </section>
  );
}
