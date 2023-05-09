import { Box, Button, Link, Stack, Typography, styled } from "@mui/material";
import slackLogo from "../assets/slackLogo.svg";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const StackContainer = styled(Stack)(({ theme }) => ({
    flexDirection: "row",
    alignItems: "center",
    [theme.breakpoints.down("navContainer")]: {
      display: "none",
    },
  }));

  const NavBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#541554",
    padding: "20px",
    [theme.breakpoints.up("mainSection")]: {
      padding: "20px 50px",
    },
  }));
  const NavContainer = styled(Box)({
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    color: "white",
  });
  const RightBtns = styled(Button)(({ theme }) => ({
    margin: "0 10px",
    padding: "6px 16px",
    fontSize: 15,
    color: "#541554",
    backgroundColor: "white",
    border: "1px solid #fff",
    "&:hover": {
      border: "1px solid #541554",
      backgroundColor: "white",
    },
    [theme.breakpoints.down("navContainer")]: {
      display: "none",
    },
  }));
  const LeftBtns = styled(Button)(({ theme }) => ({
    margin: "0 10px",
    padding: "6px 16px",
    fontSize: 15,
    outline: "1px solid #fff",
    color: "#fff",
    "&:hover": {
      outline: "2px solid #fff",
    },
    [theme.breakpoints.down("leftBtn")]: {
      display: "none",
    },
  }));
  const NavLink = styled(Link)({
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
    color: "#fff",
    padding: "0 10px",
  });
  const AuthLink = styled(Link)(({ theme }) => ({
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
    color: "#fff",
    padding: "0 10px",
    margin: "0 25px",
    [theme.breakpoints.down("navContainer")]: {
      display: "none",
    },
  }));
  const MenuBox = styled(Box)(({ theme }) => ({
    display: "none",
    marginLeft: "20px",
    [theme.breakpoints.down("navContainer")]: {
      display: "block",
    },
  }));
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
          <StackContainer>
            <Button
              endIcon={<KeyboardArrowDownIcon />}
              sx={{
                ml: 4,
                textTransform: "capitalize",
                color: "white",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Product
            </Button>
            <NavLink underline="hover">Solutions</NavLink>
            <NavLink underline="hover">Enterprise</NavLink>
            <NavLink underline="hover">Resources</NavLink>
            <NavLink underline="hover">Pricing</NavLink>
          </StackContainer>
        </NavContainer>
        <NavContainer>
          <SearchIcon sx={{ cursor: "pointer" }} />

          <MenuBox>
            <MenuIcon sx={{ cursor: "pointer" }} />
          </MenuBox>

          <AuthLink underline="hover">Sign in</AuthLink>

          <LeftBtns disableElevation variant="outlined">
            talk to sales
          </LeftBtns>
          <RightBtns disableElevation variant="contained">
            try for free
          </RightBtns>
        </NavContainer>
      </NavBox>
    </>
  );
};

export default Navbar;
