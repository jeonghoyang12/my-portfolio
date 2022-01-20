import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
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

      {/* No.1 */}
      <Grid container columnSpacing={12} style={{ paddingTop: "25px" }}>
        <Grid item xs={8} lg>
          <Link
            href="https://www.mckinleyrice.com/"
            className={classes.mainText}
            color="inherit"
          >
            1. McKinley & Rice
          </Link>
          <Typography className={classes.mainText}>
            Fullstack software engineer intern
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
          Developed a front end web of online shopping mall that sells
          Accessories like necklaces and bracelets using Html and CSS.
        </li>
        <li style={{ marginLeft: "20px" }}>
          Maintained and fixed some front-end UI/UX bugs of the shopping mall
          that sells clothes for kids using React JS, Python and Django Rest
          Framework.
        </li>
        <li style={{ marginLeft: "20px" }}>
          Inspected bugs in video uploading app using Swift and Android Studio.
        </li>
        <li style={{ marginLeft: "20px" }}>
          Built a UI/UX front-end web and back-end server of Korean dating web
          application using React JS and Django rest framework. Built admin app
          and integrated with the user interface.
        </li>
      </Typography>
    </section>
  );
}
