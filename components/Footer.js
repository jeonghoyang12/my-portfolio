import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"© Copyright "}
      {new Date().getFullYear()}{" "}
      <Link color="inherit" href="/">
        Kevin's portfolio
      </Link>{" "}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box>
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
