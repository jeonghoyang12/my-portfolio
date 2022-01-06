import React from "react";
import Image from "next/image";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import image from "../public/portfolio.png";

const commonStyles = {
  bgcolor: "#F0F0F0",
  borderRadius: "3px",
};

const useStyles = makeStyles({
  box: {
    minWidth: 275,
    height: "550px",
    borderRadius: "3px",
  },
  boxText: {
    textAlign: "center",
    fontSize: "13px",
    position: "static",
  },
  buttonText: {
    textAlign: "center",
    fontSize: "15px",
    position: "static",
  },
});

export default function Projects() {
  const classes = useStyles();
  return (
    <section id="projects">
      <Typography style={{ paddingTop: "130px", fontSize: "20px" }}>
        <strong>📋 PROJECTS</strong>
      </Typography>
      <Divider style={{ paddingTop: "10px" }} />
      <Box sx={{ paddingTop: "35px", paddingBottom: "30px" }}>
        <Card className={classes.box}>
          <Image src={image} alt="" minWidth={275} />
          <Divider />
          <CardContent>
            <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
              Portfolio website
            </Typography>
            <Grid container sx={{ paddingTop: "5px" }} spacing={1}>
              <Grid item>
                <Box sx={{ ...commonStyles, width: "3.8rem" }}>
                  <Typography className={classes.boxText}>Next JS</Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box sx={{ ...commonStyles, width: "3rem" }}>
                  <Typography className={classes.boxText}>HTML</Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box sx={{ ...commonStyles, width: "2.5rem" }}>
                  <Typography className={classes.boxText}>CSS</Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box sx={{ ...commonStyles, width: "4.8rem" }}>
                  <Typography className={classes.boxText}>
                    Material UI
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Typography sx={{ paddingTop: "10px", fontSize: "13px" }}>
              This is my portfolio website that I update from time to time what
              I accomplish and what I experience. This website includes my
              personal information, skills I have studied, my work experiences,
              and the projects I have done or participated in.
            </Typography>
            <Button
              sx={{ marginTop: "10px" }}
              size="small"
              color="inherit"
              variant="outlined"
              startIcon={<GitHubIcon />}
              href="https://github.com/jeonghoyang12/my-portfolio"
            >
              Github
            </Button>
          </CardContent>
        </Card>
      </Box>
    </section>
  );
}
