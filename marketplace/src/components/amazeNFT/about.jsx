import React from "react";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Typography } from "@mui/material";
import { ReactComponent as TransactionLogo } from "../../assets/card-tick.svg";
import { ReactComponent as ChartLogo } from "../../assets/chart-square.svg";

const About = () => {
  const tagLine = "The amazing NFT art of the world here";

  return (
    <Grid
      container
      spacing={2}
      mt={12}
      sx={{
        backgroundColor: "rgba(217, 224, 236, 0.20)",
        backdropFilter: "blur(25px)",
        paddingLeft: "0",
        minHeight: "30.5vh",
      }}
    >
      <CssBaseline />
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={4}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "20.5vw",
            paddingLeft: "100px",

            "@media (max-width: 900px)": {
              maxWidth: "100%",
              paddingLeft: "0",
            },
          }}
        >
          <Typography
            component="h2"
            sx={{
              color: "#000",
              fontSize: "22px",
              fontWeight: "800",
              fontFamily: "Roboto",
            }}
          >
            {tagLine.toUpperCase()}
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={4}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "20.5vw",

            "@media (max-width: 900px)": {
              maxWidth: "100%",
              paddingLeft: "0",
              marginLeft: "50px",
            },
          }}
        >
          <Box component="div" sx={{ display: "flex", flexDirection: "row" }}>
            <TransactionLogo />
            <Typography
              component="h5"
              sx={{
                color: "#000",
                fontSize: "20px",
                fontWeight: "700",
                marginLeft: "12px",
                width: "100%",
                display: "block",
              }}
            >
              Fast Transaction
            </Typography>
          </Box>
          <Box component="div" sx={{ width: "249px", marginLeft: "48px" }}>
            <Typography
              component="p"
              sx={{ color: "#696969", fontSize: "14px", lineHeight: "160%" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              etiam viverra tellus imperdiet.
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={4}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "20.5vw",
            marginLeft: "50px",
            "@media (max-width: 900px)": {
              maxWidth: "100%",
              paddingLeft: "0",
            },
          }}
        >
          <Box component="div" sx={{ display: "flex", flexDirection: "row" }}>
            <ChartLogo />
            <Typography
              component="h5"
              sx={{
                color: "#000",
                fontSize: "20px",
                fontWeight: "700",
                marginLeft: "12px",
                width: "100%",
                display: "block",
              }}
            >
              Growth Transaction
            </Typography>
          </Box>
          <Box component="div" sx={{ width: "311px", marginLeft: "48px" }}>
            <Typography
              component="p"
              sx={{ color: "#696969", fontSize: "14px", lineHeight: "160%" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              etiam viverra tellus
              <br />
              <br />
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default About;
