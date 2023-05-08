import {
  Box,
  Button,
  Divider,
  Link,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import slackLogo from "../assets/slackLogo.svg";
import React from "react";

const Footer = () => {
  const Btn = styled(Button)(({ theme }) => ({
    padding: "15px 40px",
    marginRight: 10,
    fontWeight: 600,
    marginBottom: 10,
    [theme.breakpoints.down("mainSection")]: {
      width: "100%",
    },
  }));

  const Container = styled(Box)({
    textAlign: "center",
    backgroundColor: "#541554",
    padding: "90px 0",
    borderBottomRightRadius: "45%",
    borderBottomLeftRadius: "45%",
  });

  const GridTypo = styled(Typography)({
    textTransform: "uppercase",
    fontWeight: 600,
    marginBottom: 25,
  });

  const GridLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    marginBottom: 25,
    color: "#696969",
    fontSize: 14,
    cursor: "pointer",
    "&:hover": {
      color: "#1264A3",
    },
    [theme.breakpoints.down("footerLinks")]: {
      display: "none",
    },
  }));

  const BottomLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    color: "#000",
    fontSize: 14,
    cursor: "pointer",
    fontWeight: 500,
    marginRight: 10,
    "&:hover": {
      color: "#1264A3",
    },
    [theme.breakpoints.down("supportBtn")]: {
      marginBottom: 35,
    },
  }));

  return (
    <Box component={"footer"}>
      <Container>
        <Box sx={{ maxWidth: 850, p: 2, margin: "0 auto" }}>
          <Typography variant="h3" fontWeight={700} color={"white"} mb={4}>
            See all you can accomplish with Slack
          </Typography>
          <Stack
            direction={{ xs: "column", mainSection: "row" }}
            justifyContent={"center"}
          >
            <Btn
              sx={{
                backgroundColor: "#fff",
                color: "#541554",
                "&:hover": {
                  outline: "1px solid #541554",
                  backgroundColor: "#fff",
                },
              }}
            >
              Try for free
            </Btn>
            <Btn
              sx={{
                backgroundColor: "#541554",
                color: "#fff",
                border: "1px solid #fff",
                "&:hover": {
                  outline: "1px solid #fff",
                },
              }}
            >
              Talk to sales
            </Btn>
          </Stack>
        </Box>
      </Container>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", mainSection: "row" },
          maxWidth: 1150,
          justifyContent: "space-between",
          margin: "40px auto 20px",
          p: "0 30px",
        }}
      >
        <img
          src={slackLogo}
          alt=""
          style={{ width: "65px", height: "65px", marginBottom: 30 }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", footerLinks: "row" },
          }}
        >
          <Stack mr={{ xs: "20px", supportBtn: "80px" }}>
            <GridTypo variant="body2">Why slack?</GridTypo>
            <GridLink>Slack vs. Email</GridLink>
            <GridLink>Channels</GridLink>
            <GridLink>Engagement</GridLink>
            <GridLink>Scale</GridLink>
            <GridLink>Watch the Demo</GridLink>
          </Stack>
          <Stack mr={{ xs: "20px", supportBtn: "80px" }}>
            <GridTypo variant="body2">Product</GridTypo>
            <GridLink>Features</GridLink>
            <GridLink>Integrations</GridLink>
            <GridLink>Enterprise</GridLink>
            <GridLink>Solutions</GridLink>
          </Stack>
          <Stack mr={{ xs: "20px", supportBtn: "80px" }}>
            <GridTypo variant="body2">Pricing</GridTypo>
            <GridLink>Plans</GridLink>
            <GridLink>Paid vs. Free</GridLink>
          </Stack>
          <Stack mr={{ xs: "20px", supportBtn: "80px" }}>
            <GridTypo variant="body2">Resources</GridTypo>
            <GridLink>Partners</GridLink>
            <GridLink>Developers</GridLink>
            <GridLink>Community</GridLink>
            <GridLink>Apps</GridLink>
            <GridLink>Blog</GridLink>
            <GridLink>Help center</GridLink>
            <GridLink>Events</GridLink>
          </Stack>
          <Stack mr={{ xs: "20px", supportBtn: "80px" }}>
            <GridTypo variant="body2">Company</GridTypo>
            <GridLink>About Us</GridLink>
            <GridLink>Leadership</GridLink>
            <GridLink>News</GridLink>
            <GridLink>Media Kit</GridLink>
            <GridLink>Careers</GridLink>
          </Stack>
        </Box>
      </Box>

      <Box maxWidth={1150} margin={"0 auto 30px"} p={3}>
        <Divider />
        <Stack
          direction={{ xs: "column", navContainer: "row" }}
          justifyContent={"space-between"}
          m={"30px auto"}
        >
          <Stack
            direction={{ xs: "column", supportBtn: "row" }}
            alignItems={{ xs: "flex-start", supportBtn: "center" }}
          >
            <BottomLink>Status</BottomLink>
            <BottomLink>Privacy</BottomLink>
            <BottomLink>Terms</BottomLink>
            <BottomLink>Cookie Preferences</BottomLink>
            <BottomLink>Contact Us</BottomLink>
            <BottomLink sx={{ display: "flex", alignItems: "center" }}>
              <LanguageIcon fontSize="small" />
              <Typography variant="p">Change Region</Typography>
              <KeyboardArrowDownIcon fontSize="small" />
            </BottomLink>
          </Stack>
          <Stack direction={{ xs: "column", navContainer: "row" }}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              color={"#1264A3"}
              sx={{
                cursor: "pointer",
                m: { supportBtn: "20px 0 0 0", navContainer: "0 10px" },
              }}
            >
              <CloudDownloadOutlinedIcon fontSize="small" />
              <Typography ml fontSize={14} fontWeight={500}>
                Download Slack
              </Typography>
            </Stack>
            <Stack
              direction={"row"}
              mt={{ xs: "20px", navContainer: 0 }}
              justifyContent={{ xs: "space-between", supportBtn: "flex-start" }}
            >
              <TwitterIcon
                fontSize="small"
                sx={{
                  m: { xs: "0 5px 0 0", navContainer: "0 5px" },
                  cursor: "pointer",
                  "&:hover": { color: "#1264A3" },
                }}
              />
              <FacebookIcon
                fontSize="small"
                sx={{
                  m: { xs: "0 5px 0 0", navContainer: "0 5px" },
                  cursor: "pointer",
                  "&:hover": { color: "#1264A3" },
                }}
              />
              <YouTubeIcon
                fontSize="small"
                sx={{
                  m: { xs: "0 5px 0 0", navContainer: "0 5px" },
                  cursor: "pointer",
                  "&:hover": { color: "#1264A3" },
                }}
              />
              <LinkedInIcon
                fontSize="small"
                sx={{
                  m: { xs: "0 5px 0 0", navContainer: "0 5px" },
                  cursor: "pointer",
                  "&:hover": { color: "#1264A3" },
                }}
              />
            </Stack>
          </Stack>
        </Stack>

        <Typography fontSize={12} color={"#696969"}>
          &copy;{new Date().getFullYear()} Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Quo tenetur commodi hic nostrum deleniti
          accusamus, quae pariatur magni nemo sequi rerum, aut.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
