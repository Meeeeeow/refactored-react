import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Divider } from "@mui/material";
import Grid from "@mui/material/Grid";
import cardImg from "../../assets/unsplash5.png";
import person from "../../assets/Ellipse 95.png";
import bidImg1 from "../../assets/unsplash4.png";
import bidImg2 from "../../assets/unsplash6.png";
import bidImg3 from "../../assets/unsplash7.png";
import topImg1 from "../../assets/unsplash8.png";
import topImg2 from "../../assets/unsplash9.png";
import topImg3 from "../../assets/unsplash10.png";
import topImg4 from "../../assets/unsplash11.png";
import topImg5 from "../../assets/unsplash12.png";

import { ReactComponent as CubicLogo } from "../../assets/ethereum 4.svg";
import { ReactComponent as VerifyLogo } from "../../assets/verify 1.svg";

const Collection = () => {
  const topImgCollection = [topImg1, topImg2, topImg3, topImg4, topImg5];
  const topImgHeaderCollection = [
    "CryptoFunks",
    "Cryptix",
    "Frensware",
    "PunkArt",
    "Art Crypto",
  ];
  const bidCollection = [
    "19,769.39",
    "2,769.39",
    "9,232.39",
    "3,769.39",
    "10,769.39",
  ];
  const shareCollection = ["+26.52%", "+10.52%", "+2.52%", "+1.52%", "+2.52%"];
  return (
    <Grid container spacing={2} mt={12} mb={6} sx={{ paddingLeft: "84px" }}>
      <Grid item xs={12} sm={12} md={4}>
        <Card sx={{ maxWidth: 345, border: "none", boxShadow: "none" }}>
          <CardMedia
            component="img"
            height="100%"
            image={cardImg}
            alt="hero image highest bid"
          />
          <CardContent>
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                component="div"
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Box
                  component="div"
                  sx={{ display: "flex", flexDirection: "row" }}
                >
                  <img src={person} alt="profileimage" />
                  <Typography
                    component="h5"
                    sx={{
                      color: "#000",
                      fontSize: "18px",
                      fontWeight: "700",
                      marginLeft: "12px",
                      display: "inline-block",
                    }}
                  >
                    The Futr Abstr
                  </Typography>
                </Box>
                <Typography
                  component="p"
                  sx={{
                    color: "#363639",
                    fontSize: "14px",
                    marginLeft: "46px",
                    marginTop: "-6px",
                  }}
                >
                  10 in the stock
                </Typography>
              </Box>

              <Box
                component="div"
                sx={{
                  marginLeft: "15px",
                }}
              >
                <p
                  style={{
                    color: "#3A3A3A",
                    fontSize: "14px",
                    fontWeight: "700",
                    marginBottom: "5px",
                  }}
                >
                  Highest Bid
                </p>
                <span
                  style={{ width: "13px", height: "21px", marginTop: "5px" }}
                >
                  <CubicLogo />
                </span>
                <Typography
                  component="span"
                  sx={{
                    color: "#3A3A3A",
                    fontSize: "18px",
                    fontWeight: "500",
                    marginLeft: "7px",
                  }}
                >
                  {" "}
                  0.25 ETH
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: "15px",
            }}
          >
            <img src={bidImg1} alt="bid-img1" />
            <Box
              component="div"
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Typography
                component="h5"
                sx={{
                  color: "#000",
                  fontSize: "18px",
                  fontWeight: "700",
                  display: "inline-block",
                }}
              >
                The Futr Abstr
              </Typography>
              <Box
                component="div"
                sx={{ display: "flex", flexDirection: "row", marginTop: "8px" }}
              >
                <img src={person} alt="profile" />
                <Box
                  component="div"
                  sx={{
                    display: "inline-flex",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "5px",
                    border: "1px solid #00AC4F",
                    borderRadius: "6px",
                    color: "#00AC4F",
                    marginLeft: "12px",
                  }}
                >
                  <CubicLogo />
                  <Typography
                    component="span"
                    sx={{ fontSize: "12px", fontWeight: "500" }}
                  >
                    {" "}
                    0.25 ETH
                  </Typography>
                </Box>
                <Typography
                  component="span"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#757575",
                    padding: "6px 8px",
                  }}
                >
                  {" "}
                  1 of 8
                </Typography>
              </Box>
              <Button
                variant="contained"
                sx={{
                  display: "inline-block",
                  padding: "14px 20px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "50px",
                  backgroundColor: "#3D00B7",
                  color: "#FFF",
                  marginTop: "15px",
                  "&:hover": {
                    border: "1px solid #3D00B7",
                    backgroundColor: "#F4F4F4",
                    color: "#3D00B7",
                  },
                }}
              >
                Place a bid
              </Button>
            </Box>
          </Box>

          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: "15px",
              marginTop: "20px",
            }}
          >
            <img src={bidImg2} alt="bid-img2" />
            <Box
              component="div"
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Typography
                component="h5"
                sx={{
                  color: "#000",
                  fontSize: "18px",
                  fontWeight: "700",
                  display: "inline-block",
                }}
              >
                The Futr Abstr
              </Typography>
              <Box
                component="div"
                sx={{ display: "flex", flexDirection: "row", marginTop: "8px" }}
              >
                <img src={person} alt="profile" />
                <Box
                  component="div"
                  sx={{
                    display: "inline-flex",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "5px",
                    border: "1px solid #00AC4F",
                    borderRadius: "6px",
                    color: "#00AC4F",
                    marginLeft: "12px",
                  }}
                >
                  <CubicLogo />
                  <Typography
                    component="span"
                    sx={{ fontSize: "12px", fontWeight: "500" }}
                  >
                    {" "}
                    0.25 ETH
                  </Typography>
                </Box>
                <Typography
                  component="span"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#757575",
                    padding: "6px 8px",
                  }}
                >
                  {" "}
                  1 of 8
                </Typography>
              </Box>
              <Button
                variant="outlined"
                sx={{
                  display: "inline-block",
                  padding: "14px 20px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "50px",
                  backgroundColor: "#F4F4F4",
                  marginTop: "15px",
                  color: "#3D00B7",
                  border: "1px solid #3D00B7",
                  "&:hover": {
                    backgroundColor: "#3D00B7",
                    color: "#FFF",
                  },
                }}
              >
                Place a bid
              </Button>
            </Box>
          </Box>

          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: "15px",
              marginTop: "20px",
            }}
          >
            <img src={bidImg3} alt="bid-img3" />
            <Box
              component="div"
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Typography
                component="h5"
                sx={{
                  color: "#000",
                  fontSize: "18px",
                  fontWeight: "700",
                  display: "inline-block",
                }}
              >
                The Futr Abstr
              </Typography>
              <Box
                component="div"
                sx={{ display: "flex", flexDirection: "row", marginTop: "8px" }}
              >
                <img src={person} alt="profile" />
                <Box
                  component="div"
                  sx={{
                    display: "inline-flex",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "5px",
                    border: "1px solid #00AC4F",
                    borderRadius: "6px",
                    color: "#00AC4F",
                    marginLeft: "12px",
                  }}
                >
                  <CubicLogo />
                  <Typography
                    component="span"
                    sx={{ fontSize: "12px", fontWeight: "500" }}
                  >
                    {" "}
                    0.25 ETH
                  </Typography>
                </Box>
                <Typography
                  component="span"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#757575",
                    padding: "6px 8px",
                  }}
                >
                  {" "}
                  1 of 8
                </Typography>
              </Box>
              <Button
                variant="outlined"
                sx={{
                  display: "inline-block",
                  padding: "14px 20px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "50px",
                  backgroundColor: "#F4F4F4",
                  marginTop: "15px",
                  color: "#3D00B7",
                  border: "1px solid #3D00B7",
                  "&:hover": {
                    backgroundColor: "#3D00B7",
                    color: "#FFF",
                  },
                }}
              >
                Place a bid
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ backgroundColor: "#ECECEC" }}
      />
      <Grid item xs={12} sm={12} md={3} ml={3}>
        <Typography
          component="p"
          sx={{
            color: "#000",
            fontSize: "20px",
            fontWeight: "700",
            lineHeight: "normal",
            fontStyle: "normal",
          }}
        >
          Top Collections over <br />
        </Typography>
        <Typography
          component="p"
          sx={{
            color: "#3D00B7",
            fontSize: "18px",
            fontWeight: "700",
            marginTop: "10px",
            lineHeight: "normal",
            fontStyle: "normal",
          }}
        >
          Last 7 days
        </Typography>
        {topImgCollection.map((topImg, index) => (
          <>
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "row",
                marginTop: "25px",
                justifyContent: "space-between",
              }}
            >
              <Typography
                component="p"
                sx={{
                  color: "#000",
                  marginTop: "10px",
                  fontSize: "24px",
                  fontWeight: "700",
                  lineHeight: "183%",
                  letterSpacing: "-0.6px",
                  fontStyle: "normal",
                }}
              >
                {index + 1}
              </Typography>
              <Box component="div" sx={{ position: "relative" }}>
                <img src={topImg} alt={`top-img${index + 1}`} />
                {(index === 0 || index === 3) && (
                  <VerifyLogo
                    style={{
                      position: "absolute",
                      top: "0",
                      right: "0",
                      transform: "translate(25%,-20%)",
                    }}
                  />
                )}
              </Box>

              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "4px",
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    color: "#000",
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "183%",
                    letterSpacing: "-0.4px",
                    fontStyle: "normal",
                  }}
                >
                  {topImgHeaderCollection[index]}
                </Typography>
                <Box
                  component="div"
                  sx={{ display: "flex", flexDirection: "row" }}
                >
                  <CubicLogo />
                  <Typography
                    component="h5"
                    sx={{
                      color: "#636363",
                      marginLeft: "7px",
                      fontSize: "14px",
                      fontWeight: "600",
                      lineHeight: "183%",
                      letterSpacing: "-0.35px",
                      fontStyle: "normal",
                    }}
                  >
                    {bidCollection[index]}
                  </Typography>
                </Box>
              </Box>
              <Typography
                component="h3"
                sx={{
                  color: `${
                    index === 1 || index === 4 ? "#FF002E" : "#14C8B0"
                  }`,
                  marginTop: "20px",
                  fontSize: "20px",
                  fontWeight: "600",
                  lineHeight: "103%",
                  letterSpacing: "-0.5px",
                  fontStyle: "normal",
                }}
              >
                {shareCollection[index]}
              </Typography>
            </Box>
            {index !== 4 && (
              <Divider
                variant="middle"
                sx={{
                  backgroundColor: "#F0F0F0",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              />
            )}
          </>
        ))}
      </Grid>
    </Grid>
  );
};

export default Collection;
