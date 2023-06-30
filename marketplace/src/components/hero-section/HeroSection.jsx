import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { CustomButton } from "../top-menu/TopMenu";

import image1 from "../../assets/unsplash_1.png";
import image2 from "../../assets/unsplash_2.png";
import image3 from "../../assets/unsplash_3.png";
import profile from "../../assets/Ellipse 95.png";
const HeroSection = () => {
  const heroTitle = "Discover, and collect Digital Art NFTs";
  const subTitle =
    "Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.";
  return (
    <Grid
      container
      spacing={2}
      mt={9}
      sx={{ backgroundColor: "#FFF", paddingLeft: "84px" }}
      zeroMinWidth
    >
      <CssBaseline />
      <Grid item xs={12} sm={12} md={12} lg={6} sx={{ marginTop: "5em" }}>
        {/* Content for the left side */}
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "38.25vw",
              flexShrink: "0",
            }}
          >
            <Typography
              component="h1"
              variant="h1"
              sx={{
                color: "#000",
                fontSize: "2.5em",
                fontWeight: "700",
                letterSpacing: "2px",
              }}
            >
              {heroTitle.toUpperCase()}
            </Typography>
          </Box>

          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "29.4375vw",
              flexShrink: "0",
            }}
          >
            <Typography
              component="p"
              variant="h6"
              sx={{
                color: "#565656",
                fontSize: "1.375em",
                lineHeight: "160%",
                marginTop: "1.3em",
              }}
            >
              {subTitle}
            </Typography>
          </Box>
          <CustomButton
            variant="contained"
            sx={{
              backgroundColor: "#3D00B7",
              width: "14em",
              padding: "1.25em 2.5em",
              margin: "1.875em 0",
              "&:hover": {
                border: "1px solid #3D00B7",
                backgroundColor: "#F4F4F4",
                color: "#3D00B7",
              },
            }}
          >
            Explore Now
          </CustomButton>

          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "25em",
              "@media (max-width: 768px)": {
                flexDirection: "column",
                alignItems: "flex-start",
              },
              "@media (max-width: 500px)": {
                width: "10em",
              },
            }}
          >
            <Box component="div">
              <Typography
                component="h2"
                variant="h2"
                sx={{
                  color: "#000",
                  fontSize: "2.5em",
                  fontWeight: "700",
                  letterSpacing: "0.125em",
                }}
              >
                98K+
              </Typography>
              <Typography
                component="p"
                variant="h6"
                sx={{
                  color: "#565656",
                  fontSize: "1.375em",
                  lineHeight: "160%",
                  marginTop: "-0.5em",
                }}
              >
                Artwork
              </Typography>
            </Box>

            <Box component="div">
              <Typography
                component="h2"
                variant="h2"
                sx={{
                  color: "#000",
                  fontSize: "2.5em",
                  fontWeight: "700",
                  letterSpacing: "0.125em",
                }}
              >
                12K+
              </Typography>
              <Typography
                component="p"
                variant="h6"
                sx={{
                  color: "#565656",
                  fontSize: "1.375em",
                  lineHeight: "160%",
                  marginTop: "-0.5em",
                }}
              >
                Auction
              </Typography>
            </Box>

            <Box component="div">
              <Typography
                component="h2"
                variant="h2"
                sx={{
                  color: "#000",
                  fontSize: "2.5em",
                  fontWeight: "700",
                  letterSpacing: "0.125em",
                }}
              >
                15K+
              </Typography>
              <Typography
                component="p"
                variant="h6"
                sx={{
                  color: "#565656",
                  fontSize: "1.375em",
                  lineHeight: "160%",
                  marginTop: "-0.5em",
                }}
              >
                Artist
              </Typography>
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
        ml="auto"
        sx={{ marginTop: "5em" }}
        zeroMinWidth
      >
        {/* Content for the right side */}
        <Box
          component="div"
          sx={{
            position: "relative",
            maxWidth: "45vw",
            height: "100%",
            perspective: "210px",
            marginLeft: "150px",
            "@media (max-width: 1200px)": {
              marginLeft: "0px",
              height: "80vh",
              padding: "0",
            },
            "@media (max-width: 500px)": {
              marginLeft: "-80px",
            },
          }}
        >
          <Box
            component="img"
            src={image1}
            alt="hero-image1"
            sx={{
              minWidth: "20.5vw",
              height: "400px",
              borderRadius: "24px",
              zIndex: "100",
              position: "absolute",
              top: "0",
              left: "0",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              transform: "translateZ(0)",
            }}
          />
          <Box
            component="div"
            sx={{
              zIndex: "110",
              display: "flex",
              minWidth: "24.8vw",
              height: "36.923px",
              flexDirection: "column",
              flexShrink: "0",
              position: "absolute",
              top: "20px",
              left: "20px",
            }}
          >
            <Typography
              component="h4"
              sx={{
                color: "#FFF",
                fontSize: "25px",
                fontWeight: "700",
                letterSpacing: "-1.4px",
              }}
            >
              Abstr Gradient NFT
            </Typography>
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "row",
                marginTop: "5px",
              }}
            >
              <img src={profile} alt="profileimage" />
              <Typography
                component="h4"
                sx={{
                  color: "#FFF",
                  fontSize: "15px",
                  fontWeight: "700",
                  marginLeft: "16px",
                  marginTop: "5px",
                }}
              >
                Arkhan17
              </Typography>
            </Box>

            <Box
              component="div"
              sx={{
                position: "absolute",

                top: "290px",
                minWidth: "18.125vw",
                height: "73.846px",
                borderRadius: "12px",
                background: "rgba(255, 255, 255, 0.20)",
                backdropFilter: "blur(25px)",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                component="div"
                sx={{
                  marginLeft: "15px",
                }}
              >
                <p
                  style={{
                    color: "#FFF",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Current Bid
                </p>
                <span
                  style={{ width: "13px", height: "21px", marginTop: "5px" }}
                >
                  <svg
                    width="13"
                    height="22"
                    viewBox="0 0 13 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="ethereum 2" clip-path="url(#clip0_0_143)">
                      <path
                        id="Vector"
                        d="M12.671 11.3796L6.50006 15.2463L0.325058 11.3796L6.50006 0.512939L12.671 11.3796ZM6.50006 16.4879L0.325058 12.6213L6.50006 21.8463L12.6751 12.6213L6.50006 16.4879Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_0_143">
                        <rect
                          width="13"
                          height="21.3333"
                          fill="white"
                          transform="translate(0 0.512939)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>

                <span
                  style={{
                    color: "#FFF",
                    fontSize: "18px",
                    fontWeight: "500",
                    marginLeft: "8px",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  0.25 ETH
                </span>
              </Box>
              <Box
                component="div"
                sx={{
                  marginRight: "15px",
                  color: "#FFF",
                }}
              >
                <p
                  style={{
                    color: "#FFF",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Ends in
                </p>
                <span
                  style={{
                    color: "#FFF",
                    fontSize: "18px",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  12
                </span>
                h
                <span
                  style={{
                    color: "#FFF",
                    fontSize: "18px",
                    fontWeight: "500",
                    marginLeft: "8px",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  43
                </span>
                m
                <span
                  style={{
                    color: "#FFF",
                    fontSize: "18px",
                    fontWeight: "500",
                    marginLeft: "8px",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  42
                </span>
                s
              </Box>
            </Box>
          </Box>
          <Box
            component="div"
            sx={{
              position: "absolute",
              bottom: "40px",
              transform: "translate(-50%,-50%)",
              zIndex: "120",
            }}
          >
            <Box component="div">
              <Box
                component="div"
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "row",
                  "@media (max-width: 1200px)": {
                    display: "none",
                  },
                }}
              >
                <svg
                  width="102"
                  height="102"
                  viewBox="0 0 102 102"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    id="Ellipse 4"
                    cx="50.9843"
                    cy="50.9843"
                    r="50.5"
                    transform="rotate(30 50.9843 50.9843)"
                    fill="#FFE0D4"
                  />
                </svg>

                <Box
                  component="div"
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                  }}
                >
                  <svg
                    width="32"
                    height="38"
                    viewBox="0 0 32 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="ethereum 2" clip-path="url(#clip0_0_182)">
                      <path
                        id="Vector"
                        d="M23.5794 23.7803L12.9942 24.1631L8.02793 14.8017L23.7091 5.60434L23.5794 23.7803ZM12.0912 25.7272L7.12492 16.3657L8.19429 32.4768L22.6815 25.3474L12.0912 25.7272Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_0_182">
                        <rect
                          width="18.9087"
                          height="31.0296"
                          fill="white"
                          transform="translate(15.5215 0.877197) rotate(30)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            component="img"
            src={image2}
            alt="hero-image2"
            sx={{
              maxWidth: "18.54vw",
              height: "391.6px",
              borderRadius: "21px",
              zIndex: "90",
              position: "absolute",
              left: "80px",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              transform: "translateZ(-30px)",
            }}
          />
          <Box
            component="img"
            src={image3}
            alt="hero-image3"
            sx={{
              maxWidth: "17.14vw",
              height: "391.6px",
              borderRadius: "18.6px",
              zIndex: "80",
              position: "absolute",
              left: "157px",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              transform: "translateZ(-90px)",
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default HeroSection;
