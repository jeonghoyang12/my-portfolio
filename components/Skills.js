import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { data } from "./data";

const commonStyles = {
  bgcolor: "#F0F0F0",
  borderRadius: "3px",
  p: "0px 5px 0px 5px",
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

      {data.skills.map((skill) => {
        return (
          <>
            {/* Back End programming */}
            <Typography style={{ paddingTop: "15px", fontSize: "15px" }}>
              {skill.firstTitle}
            </Typography>
            <Box sx={{ display: "flex", paddingTop: "10px" }}>
              <Grid container spacing={1}>
                {skill.backend.map((back) => {
                  return (
                    <Grid item>
                      <Box sx={{ ...commonStyles }}>
                        <Typography className={classes.boxText}>
                          {back}
                        </Typography>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
            {/* Front End programming */}
            <Typography style={{ paddingTop: "25px", fontSize: "15px" }}>
              {skill.secondTitle}
            </Typography>
            <Box sx={{ display: "flex", paddingTop: "10px" }}>
              <Grid container spacing={1}>
                {skill.frontend.map((front) => {
                  return (
                    <Grid item>
                      <Box sx={{ ...commonStyles }}>
                        <Typography className={classes.boxText}>
                          {front}
                        </Typography>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </>
        );
      })}
    </section>
  );
}
