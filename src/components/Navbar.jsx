import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import slackLogo from "../assets/slackLogo.svg";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import { useState } from "react";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const NavBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#541554",
    padding: "20px 50px",
  });
  const NavContainer = styled(Box)({
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    color: "white",
  });
  const RightBtns = styled(Button)({
    margin: "0 10px",
    padding: "6px 16px",
    fontSize: 15,
  });
  const NavLink = styled(Link)({
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
    color: "#fff",
  });
  return (
    <>
      <NavBox>
        <NavContainer>
          <Stack direction={"row"} alignItems={"center"} spacing={0.5}>
            <img src={slackLogo} alt="" />
            <Typography
              variant="h5"
              fontSize={28}
              fontWeight={700}
              color={"white"}
            >
              slack
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={3}
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            <Button
              endIcon={<KeyboardArrowDownIcon />}
              sx={{
                ml: 4,
                textTransform: "capitalize",
                color: "white",
                fontWeight: 600,
                cursor: "pointer",
              }}
              id="product-btn"
              onClick={handleClick}
              aria-controls={open ? "resources-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              Product
            </Button>
            <NavLink underline="hover">Solutions</NavLink>
            <NavLink underline="hover">Enterprise</NavLink>
            <NavLink underline="hover">Resources</NavLink>
            <NavLink underline="hover">Pricing</NavLink>
          </Stack>
          <Menu
            id="product-menu"
            anchorEl={anchorEl}
            open={open}
            MenuListProps={{
              "aria-labelledby": "resources-btn",
            }}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Blog</MenuItem>
            <MenuItem onClick={handleClose}>Podcast</MenuItem>
          </Menu>
        </NavContainer>
        <NavContainer>
          <SearchIcon sx={{ cursor: "pointer" }} />

          <NavLink
            underline="hover"
            sx={{
              m: "0 25px",
            }}
          >
            Sign in
          </NavLink>

          <RightBtns
            disableElevation
            variant="outlined"
            sx={{
              outline: "1px solid #fff",
              color: "#fff",
              display: {
                xs: "none",
                lg: "block",
              },
              "&:hover": {
                outline: "2px solid #fff",
              },
            }}
          >
            talk to sales
          </RightBtns>
          <RightBtns
            disableElevation
            variant="contained"
            sx={{
              color: "#541554",
              bgcolor: "white",
              border: "1px solid #fff",
              "&:hover": {
                border: "1px solid #541554",
                bgcolor: "white",
              },
            }}
          >
            try for free
          </RightBtns>
        </NavContainer>
      </NavBox>
    </>
  );
};

export default Navbar;
