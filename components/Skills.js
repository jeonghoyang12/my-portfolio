import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const commonStyles = {
  bgcolor: "#F0F0F0",
  borderRadius: "3px",
};

const useStyles = makeStyles({
  boxText: {
    textAlign: "center",
    fontSize: "15px",
    position: "static",
  },
});

export default function Skills() {
  const classes = useStyles();
  return (
    <section id="skills">
      <Typography style={{ paddingTop: "130px", fontSize: "20px" }}>
        <strong>💻 SKILLS</strong>
      </Typography>
      <Divider style={{ paddingTop: "10px" }} />

      {/* Back End programming */}
      <Typography style={{ paddingTop: "15px", fontSize: "15px" }}>
        Back End programming languages & tools
      </Typography>

      <Box sx={{ display: "flex", paddingTop: "10px" }}>
        <Grid container spacing={1}>
          <Grid item>
            <Box sx={{ ...commonStyles, width: "4rem" }}>
              <Typography className={classes.boxText}>Python</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ ...commonStyles, width: "11.5rem" }}>
              <Typography className={classes.boxText}>
                Django Rest Framework
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Front End programming */}
      <Typography style={{ paddingTop: "25px", fontSize: "15px" }}>
        Front End programming languages & tools
      </Typography>
      <Box sx={{ display: "flex", paddingTop: "10px" }}>
        <Grid container spacing={1}>
          <Grid item>
            <Box sx={{ ...commonStyles, width: "3.8rem" }}>
              <Typography className={classes.boxText}>HTML</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ ...commonStyles, width: "3rem" }}>
              <Typography className={classes.boxText}>CSS</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ ...commonStyles, width: "5rem" }}>
              <Typography className={classes.boxText}>React JS</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ ...commonStyles, width: "4.5rem" }}>
              <Typography className={classes.boxText}>Next JS</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ ...commonStyles, width: "5.8rem" }}>
              <Typography className={classes.boxText}>Material UI</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
