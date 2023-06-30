import { Box, Button, CssBaseline, Grid, Typography } from "@mui/material";
import React from "react";

import created1 from "../../assets/unsplash22.png";
import created2 from "../../assets/unsplash23.png";
import created3 from "../../assets/unsplash24.png";
import person1 from "../../assets/person2.png";
import person2 from "../../assets/person1.png";

const SignUp = () => {
  return (
    <Grid
      container
      spacing={2}
      mt={9}
      sx={{ backgroundColor: "#FFF", paddingLeft: "84px" }}
    >
      <CssBaseline />
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={6}
        sx={{ marginTop: "5em" }}
        zeroMinWidth
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "60px",
            "@media (max-width: 768px)": {
              flexDirection: "column",
              gap: "30px",
            },
          }}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "60px",
            }}
          >
            <Box
              component="div"
              sx={{
                position: "relative",
                padding: "0",
                height: "auto",
                "@media (max-width: 768px)": {
                  width: "300px",
                },
              }}
            >
              <img src={created1} alt="creator1Nft" />

              <Box
                component="img"
                src={person1}
                alt="person1"
                sx={{
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                  transform: "translate(45%, 34%)",
                  "@media (max-width: 768px)": {
                    bottom: "0",
                    right: "0",
                  },
                }}
              />
            </Box>

            <Box
              component="div"
              sx={{
                position: "relative",
                perspective: "250px",
                marginLeft: "auto",
                padding: "0",
                height: "auto",
                "@media (max-width: 768px)": {
                  width: "195px",
                  marginLeft: "0",
                },
              }}
            >
              <Box
                component="img"
                src={created2}
                alt="creator2Nft"
                sx={{
                  transformStyle: "preserve-3d",
                }}
              />
              <Box
                component="img"
                src={person2}
                alt="person2"
                sx={{
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                  transform: "translate(45%,34%)",
                  "@media (max-width: 768px)": {
                    bottom: "0",
                    right: "0",
                  },
                }}
              />
            </Box>
          </Box>

          <Box component="div">
            <Box
              component="div"
              sx={{
                position: "relative",
                margin: "60% 0 0 0",
                padding: "0",
                height: "auto",
                "@media (max-width: 768px)": {
                  width: "240px",
                  marginTop: "0",
                },
              }}
            >
              <img src={created3} alt="creator3Nft" />
              <Box
                component="img"
                src={person2}
                alt="person3"
                sx={{
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                  transform: "translate(45%, 34%)",
                  "@media (max-width: 768px)": {
                    bottom: "0",
                    right: "0",
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={6}
        sx={{ marginTop: "5em" }}
        zeroMinWidth
      >
        <Box
          component="div"
          sx={{ display: "flex", flexDirection: "column", marginTop: "16.5%" }}
        >
          <Typography
            component="h2"
            sx={{
              color: "#000",
              fontSize: "33px",
              fontStyle: "normal",
              lineHeight: "normal",
              fontWeight: "800",
              maxWidth: "320px",
            }}
          >
            {"Create and sell your NFTs".toUpperCase()}
          </Typography>
          <Typography
            component="p"
            sx={{
              color: "#636363",
              fontSize: "18px",
              fontStyle: "normal",
              lineHeight: "160%",
              fontWeight: "500",
              maxWidth: "517px",
              marginTop: "15px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac
            phasellus placerat a pellentesque tellus sed egestas. Et tristique
            dictum sit tristique sed non. Lacinia lorem id consectetur pretium
            diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
          </Typography>
          <Button
            variant="contained"
            sx={{
              display: "block",
              padding: "20px 40px",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              borderRadius: "50px",
              marginTop: "15px",
              color: "#F4F4F4",
              backgroundColor: "#3D00B7",
              maxWidth: "25%",
              "&:hover": {
                border: "1px solid #3D00B7",
                backgroundColor: "#F4F4F4",
                color: "#3D00B7",
              },
              "@media (max-width: 768px)": {
                padding: "10px 20px",
                maxWidth: "40%",
              },
            }}
          >
            Sign Up Now
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignUp;
