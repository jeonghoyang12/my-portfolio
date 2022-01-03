import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  mainText: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  bodyText: {
    fontSize: "14px",
    paddingTop: "10px",
  },
});

export default function Experiences() {
  const classes = useStyles();
  return (
    <section id="exp">
      <Typography style={{ paddingTop: "130px", fontSize: "20px" }}>
        <strong>💼 EXPERIENCES</strong>
      </Typography>
      <Divider style={{ paddingTop: "10px" }} />

      {/* N0.1 */}
      <Grid container columnSpacing={12} style={{ paddingTop: "15px" }}>
        <Grid item xs={8} lg>
          <Typography className={classes.mainText}>
            1. Technology class
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.mainText}>
            2016.01 ~ 2016.04
          </Typography>
        </Grid>
      </Grid>
      <Typography className={classes.mainText}>Hackathon planning</Typography>
      <Typography className={classes.bodyText}>
        <li style={{ marginLeft: "20px" }}>
          Hosted Hackathon with tech class students and teacher.
        </li>
        <li style={{ marginLeft: "20px" }}>
          Taught students how to code with a fun projects.
        </li>
        <li style={{ marginLeft: "20px" }}>
          Scheduled and planned what to do for the students not Interested in{" "}
          tech during the Hackathon.
        </li>
      </Typography>

      {/* No.2 */}
      <Grid container columnSpacing={12} style={{ paddingTop: "25px" }}>
        <Grid item xs={8} lg>
          <Typography className={classes.mainText}>
            2. CS club in high school
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.mainText}>
            2017.09 ~ 2018.05
          </Typography>
        </Grid>
      </Grid>
      <Typography className={classes.bodyText}>
        <li style={{ marginLeft: "20px" }}>Learned how to code.</li>
        <li style={{ marginLeft: "20px" }}>
          Learned how to create a game using Unity.
        </li>
        <li style={{ marginLeft: "20px" }}>
          Developed a hide-and-seek game using Unity.
        </li>
      </Typography>

      {/* No.3 */}
      <Grid container columnSpacing={12} style={{ paddingTop: "25px" }}>
        <Grid item xs={8} lg>
          <Typography className={classes.mainText}>
            3. Software engineer intern
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.mainText}>
            2019.12 ~ 2020.05
          </Typography>
        </Grid>
      </Grid>
      <Typography className={classes.bodyText}>
        <li style={{ marginLeft: "20px" }}>
          Developed a front-end web of online shopping mall that sells
          Accessories like necklaces and bracelets using Html and CSS.
        </li>
        <li style={{ marginLeft: "20px" }}>
          Maintained and fixed some front-end UI/UX bugs of the shopping Mall
          that sells clothes for kids using React JS and Python.
        </li>
        <li style={{ marginLeft: "20px" }}>
          Inspected bugs in video uploading app using Swift and Android Studio.
        </li>
        <li style={{ marginLeft: "20px" }}>
          Built a UI/UX front-end web and back-end server of Korean dating App
          using React JS and Django rest framework. Built admin app And
          integrated with the user interface.
        </li>
      </Typography>
    </section>
  );
}
