import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: "#FFF",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: "auto",
  width: "300px",
  height: "50px",
  borderRadius: "100px",
  border: "2px solid #EFEFEF",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "24px",
  width: "24px",
  paddingRight: `calc(1em + ${theme.spacing(1)})`,
  color: "#757575",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#C0C0C0",
  fontSize: "16px",
  fontWeight: 500,
  letterSpacing: "0.64px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create("width"),
    width: "20px",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const CustomButton = styled(Button)(({ theme }) => ({
  display: "inline-flex",
  padding: "14px 30px",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto 15px",
  color: "#FFF",
  fontWeight: "700",
  lineHeight: "100%",
  letterSpacing: "0.56px",
  borderRadius: "60px",
}));

const TopMenu = (props) => {
  const drawerWidth = 240;
  const header = "NFters";
  const navItems = ["Marketplace", "Resources", "About"];
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  console.log(searchValue);
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {header.toUpperCase()}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#F4F4F4",
          boxShadow:
            "0px 1px 3px -1px rgba(0,0,0,0.2),0px 2px 3px 0px rgba(0,0,0,0.07),0px 1px 6px 0px rgba(0,0,0,0.09)",
          paddingLeft: "60px",
        }}
      >
        <Toolbar
          sx={{
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          <IconButton
            color="#000"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              display: {
                xs: "none",
                sm: "block",
                color: "#3D00B7",
                fontWeight: "700",
                marginRight: "20px",
              },
            }}
          >
            {header.toUpperCase()}
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#000", margin: "auto 20px" }}>
                {item}
              </Button>
            ))}
          </Box>
          <Search>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          </Search>
          <CustomButton
            variant="contained"
            sx={{
              backgroundColor: "#3D00B7",
              "&:hover": {
                border: "1px solid #3D00B7",
                backgroundColor: "#F4F4F4",
                color: "#3D00B7",
              },
            }}
          >
            Upload
          </CustomButton>
          <CustomButton
            variant="contained"
            sx={{
              border: "1px solid #3D00B7",
              backgroundColor: "#F4F4F4",
              color: "#3D00B7",
              "&:hover": {
                backgroundColor: "#3D00B7",
                color: "#FFF",
              },
            }}
          >
            Connect Wallet
          </CustomButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default TopMenu;
