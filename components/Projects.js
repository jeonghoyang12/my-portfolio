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
import Modal from "@mui/material/Modal";
import GitHubIcon from "@mui/icons-material/GitHub";
import { data } from "./data";

const commonStyles = {
  bgcolor: "#F0F0F0",
  borderRadius: "3px",
  p: "0px 5px 0px 5px",
};

const useStyles = makeStyles({
  box: {
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
  modalBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    p: 4,
  },
});

export default function Projects() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <section id="projects">
      <Typography style={{ paddingTop: "130px", fontSize: "20px" }}>
        <strong>📋 PROJECTS</strong>
      </Typography>
      <Divider style={{ paddingTop: "10px" }} />
      {data.projects.map((project) => {
        return (
          <Box
            key={project.name}
            sx={{ paddingTop: "35px", paddingBottom: "30px" }}
          >
            <Card className={classes.box}>
              <Image
                src={project.placeholder}
                alt=""
                minWidth={275}
                onClick={handleOpen}
              />
              <Modal open={open} onClose={handleClose}>
                <Box className={classes.modalBox}>
                  <Image src={project.placeholder} alt="" />
                </Box>
              </Modal>
              <Divider />
              <CardContent>
                <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
                  {project.name}
                </Typography>

                <Grid container sx={{ pt: "5px" }} spacing={1}>
                  {project.tags.map((tag) => {
                    return (
                      <Grid item>
                        <Box sx={{ ...commonStyles }}>
                          <Typography className={classes.boxText}>
                            {tag}
                          </Typography>
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>

                <Typography sx={{ paddingTop: "10px", fontSize: "13px" }}>
                  {project.description}
                </Typography>
                <Button
                  sx={{ mt: "10px" }}
                  size="small"
                  color="inherit"
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                  href={project.githubLink}
                >
                  Github
                </Button>
              </CardContent>
            </Card>
          </Box>
        );
      })}
    </section>
  );
}
