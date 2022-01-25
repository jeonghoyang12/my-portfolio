import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { makeStyles } from "@mui/styles";
import { data } from "./data";

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

      {data.experiences.map((experience) => {
        return (
          <>
            <Grid container columnSpacing={12} sx={{ pt: "25px" }}>
              <Grid item xs={8} lg>
                <Link
                  href={experience.link}
                  className={classes.mainText}
                  color="inherit"
                >
                  {experience.name}
                </Link>
                <Typography className={classes.mainText}>
                  {experience.title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.mainText}>
                  {experience.period}
                </Typography>
              </Grid>
            </Grid>
            {experience.description.map((des) => {
              return (
                <Typography sx={{ fontSize: "14px", pt: "10px" }}>
                  <li>{des}</li>
                </Typography>
              );
            })}
          </>
        );
      })}
    </section>
  );
}
