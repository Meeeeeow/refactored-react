import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import person from "../../assets/Ellipse 95.png";
import collection1 from "../../assets/unsplash13.png";
import subCollection1 from "../../assets/unsplash14.png";
import subCollection2 from "../../assets/unsplash15.png";
import subCollection3 from "../../assets/unsplash16.png";

import collection2 from "../../assets/unsplash17.png";
import subCollectionSecond3 from "../../assets/unsplash18.png";

import collection3 from "../../assets/unsplash19.png";
import subCollectionThird1 from "../../assets/unsplash20.png";
import subCollectionThird2 from "../../assets/unsplash21.png";

import { Box, CssBaseline, Grid } from "@mui/material";

const CollectionsFeatured = () => {
  return (
    <Box
      component="div"
      mt={12}
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(217, 224, 236, 0.20)",
        backdropFilter: "blur(25px)",
        minHeight: "50.5vh",
      }}
    >
      <Typography
        component="p"
        sx={{
          paddingLeft: "84px",
          fontSize: "28px",
          fontWeight: "800",
          fontStyle: "normal",
          lineHeight: "normal",
          marginTop: "50px",
          marginBottom: "35px",
        }}
      >
        Collection Featured NFTs
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          paddingLeft: "0",
          height: "auto",
        }}
      >
        <CssBaseline />

        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Card
            sx={{
              maxWidth: 484,
              boxShadow: "none",
              border: "none",
              paddingLeft: "84px",
              backgroundColor: "rgba(217, 224, 236, 0.05)",
              paddingBottom: "40px",
              "@media (max-width: 768px)": {
                paddingLeft: "0",
                marginLeft: "55px",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "5px",
                maxWidth: "380px",
              }}
            >
              <CardMedia
                component="img"
                alt="collection 1"
                height="100%"
                width="100%"
                image={collection1}
              />

              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  width: "150px",
                }}
              >
                <CardMedia
                  component="img"
                  alt="sub collection 1"
                  width="100%"
                  height="100%"
                  image={subCollection1}
                />
                <CardMedia
                  component="img"
                  alt="sub collection 2"
                  height="100%"
                  image={subCollection2}
                />
                <CardMedia
                  component="img"
                  alt="sub collection 3"
                  height="100%"
                  image={subCollection3}
                />
              </Box>
            </Box>
            <CardContent>
              <Box
                component="div"
                mx={-2}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  component="div"
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <Typography
                    component="h5"
                    sx={{
                      color: "#000",
                      fontSize: "20px",
                      fontStyle: "normal",
                      lineHeight: "normal",
                      fontWeight: "700",
                      display: "inline-block",
                    }}
                  >
                    Amazing Collection
                  </Typography>
                  <Box
                    component="div"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: "8px",
                    }}
                  >
                    <img src={person} alt="profile" />
                    <Box
                      component="div"
                      sx={{
                        display: "inline-flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "5px",
                        color: "#000",
                        marginLeft: "12px",
                      }}
                    >
                      <Typography
                        component="span"
                        sx={{ fontSize: "12px", fontWeight: "500" }}
                      >
                        {" "}
                        by arkhan{" "}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Button
                  variant="outlined"
                  sx={{
                    display: "inline-block",
                    padding: "8px 16px",
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
                  Total 54 Items
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Card
            sx={{
              maxWidth: 400,
              boxShadow: "none",
              border: "none",
              gap: "15px",
              marginLeft: "55px",
              backgroundColor: "rgba(217, 224, 236, 0.05)",
              paddingBottom: "40px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "5px",
                maxWidth: "380px",
              }}
            >
              <CardMedia
                component="img"
                alt="collection 1"
                height="100%"
                width="100%"
                image={collection2}
              />

              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  width: "150px",
                }}
              >
                <CardMedia
                  component="img"
                  alt="sub collection 1"
                  width="100%"
                  height="100%"
                  image={subCollection2}
                />
                <CardMedia
                  component="img"
                  alt="sub collection 2"
                  height="100%"
                  image={subCollection1}
                />
                <CardMedia
                  component="img"
                  alt="sub collection 3"
                  height="100%"
                  image={subCollectionSecond3}
                />
              </Box>
            </Box>
            <CardContent>
              <Box
                component="div"
                mx={-2}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  component="div"
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <Typography
                    component="h5"
                    sx={{
                      color: "#000",
                      fontSize: "20px",
                      fontStyle: "normal",
                      lineHeight: "normal",
                      fontWeight: "700",
                      display: "inline-block",
                    }}
                  >
                    Amazing Collection
                  </Typography>
                  <Box
                    component="div"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: "8px",
                    }}
                  >
                    <img src={person} alt="profile" />
                    <Box
                      component="div"
                      sx={{
                        display: "inline-flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "5px",
                        color: "#000",
                        marginLeft: "12px",
                      }}
                    >
                      <Typography
                        component="span"
                        sx={{ fontSize: "12px", fontWeight: "500" }}
                      >
                        {" "}
                        by arkhan{" "}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Button
                  variant="outlined"
                  sx={{
                    display: "inline-block",
                    padding: "8px 16px",
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
                  Total 54 Items
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Card
            sx={{
              maxWidth: 400,
              boxShadow: "none",
              border: "none",
              gap: "15px",
              marginLeft: "55px",
              backgroundColor: "rgba(217, 224, 236, 0.05)",
              paddingBottom: "40px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "5px",
                maxWidth: "380px",
              }}
            >
              <CardMedia
                component="img"
                alt="collection 1"
                height="100%"
                width="100%"
                image={collection3}
              />

              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  width: "150px",
                }}
              >
                <CardMedia
                  component="img"
                  alt="sub collection 1"
                  width="100%"
                  height="100%"
                  image={subCollectionThird1}
                />
                <CardMedia
                  component="img"
                  alt="sub collection 2"
                  height="100%"
                  image={subCollectionThird2}
                />
                <CardMedia
                  component="img"
                  alt="sub collection 3"
                  height="100%"
                  image={subCollection1}
                />
              </Box>
            </Box>
            <CardContent>
              <Box
                component="div"
                mx={-2}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  component="div"
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <Typography
                    component="h5"
                    sx={{
                      color: "#000",
                      fontSize: "20px",
                      fontStyle: "normal",
                      lineHeight: "normal",
                      fontWeight: "700",
                      display: "inline-block",
                    }}
                  >
                    Amazing Collection
                  </Typography>
                  <Box
                    component="div"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: "8px",
                    }}
                  >
                    <img src={person} alt="profile" />
                    <Box
                      component="div"
                      sx={{
                        display: "inline-flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "5px",
                        color: "#000",
                        marginLeft: "12px",
                      }}
                    >
                      <Typography
                        component="span"
                        sx={{ fontSize: "12px", fontWeight: "500" }}
                      >
                        {" "}
                        by arkhan{" "}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Button
                  variant="outlined"
                  sx={{
                    display: "inline-block",
                    padding: "8px 16px",
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
                  Total 54 Items
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CollectionsFeatured;
