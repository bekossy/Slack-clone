import { Box, Link, Stack, Tooltip, Typography, styled } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import airbnb from "../assets/airbnb-logo.png";
import etsy from "../assets/etsy-logo.png";
import nasa from "../assets/logo-nasa.png";
import nyt from "../assets/nyt-logo.png";
import uber from "../assets/uber-logo.png";
import target from "../assets/target-logo.png";
import slackVid2 from "../assets/StackVid2.webm";
import slackVid3 from "../assets/StackVid3.webm";
import slackVid4 from "../assets/StackVid4.webm";
import React from "react";

const Main = () => {
  const BrandLogo = styled("img")({
    margin: "10px 35px",
  });

  const StackContainer = styled(Stack)(({ theme }) => ({
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "70px auto",
    [theme.breakpoints.up("mainSection")]: {
      flexDirection: "row",
      alignItems: "center",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#F4EDE4", py: 6 }}>
      <Stack textAlign={"center"}>
        <Typography
          textTransform={"uppercase"}
          variant="body2"
          letterSpacing={1}
          mb={3}
          fontWeight={700}
        >
          Trusted by companies all over the world
        </Typography>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          flexWrap={"wrap"}
        >
          <BrandLogo src={airbnb} alt="" />
          <BrandLogo src={nasa} alt="" />
          <BrandLogo src={uber} alt="" />
          <BrandLogo src={target} alt="" />
          <BrandLogo src={nyt} alt="" />
          <BrandLogo src={etsy} alt="" />
        </Stack>
      </Stack>
      <StackContainer>
        <Stack mr={"auto"} width={"100%"} maxWidth={600}>
          <Tooltip
            title="A connected team discussing work in multiple channels in the Slack app"
            placement="right"
          >
            <video src={slackVid2} autoPlay loop />
          </Tooltip>
        </Stack>
        <Stack m={"0 auto"} maxWidth={500} p={2}>
          <Typography variant="h3" fontWeight={700} my={2}>
            Bring your team together
          </Typography>
          <Typography variant="body1" fontWeight={500} mb={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            earum error, voluptas aliquid dolorem eius vel? Est quam quis
            assumenda similique tenetur molestiae ex nostrum repellat sunt,
            ipsam magnam officia Lorem, ipsum dolor.
          </Typography>
          <Link
            underline="hover"
            sx={{
              color: "#097eff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography mr>Learn more about channels</Typography>
            <EastIcon />
          </Link>
        </Stack>
      </StackContainer>
      <StackContainer>
        <Stack
          order={{ xs: 0, mainSection: 1 }}
          width={"100%"}
          maxWidth={600}
          ml={"auto"}
        >
          <Tooltip
            title="A user starting a huddle and recording a video clip the Slack app"
            placement="left"
          >
            <video src={slackVid3} autoPlay loop />
          </Tooltip>
        </Stack>
        <Stack
          m={"0 auto"}
          p={2}
          maxWidth={500}
          order={{ xs: 1, mainSection: 0 }}
        >
          <Typography variant="h3" fontWeight={700} my={2}>
            Bring your team together
          </Typography>
          <Typography variant="body1" fontWeight={500} mb={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            earum error, voluptas aliquid dolorem eius vel? Est quam quis
            assumenda similique tenetur molestiae ex nostrum repellat sunt,
            ipsam magnam officia Lorem, ipsum dolor.
          </Typography>
          <Link
            underline="hover"
            sx={{
              color: "#097eff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography mr>Learn more about flexible communication</Typography>
            <EastIcon />
          </Link>
        </Stack>
      </StackContainer>
      <StackContainer>
        <Stack mr={"auto"} width={"100%"} maxWidth={600}>
          <Tooltip
            title="Using the Workday integration to quickly file an expense report in the Slack app"
            placement="right"
          >
            <video src={slackVid4} autoPlay loop />
          </Tooltip>
        </Stack>
        <Stack m={"0 auto"} maxWidth={500} p={2}>
          <Typography variant="h3" fontWeight={700} my={2}>
            Move faster with your tools in one place
          </Typography>
          <Typography variant="body1" fontWeight={500} mb={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            earum error, voluptas aliquid dolorem eius vel? Est quam quis
            assumenda similique tenetur molestiae ex nostrum repellat sunt,
            ipsam magnam officia Lorem, ipsum dolor.
          </Typography>
          <Link
            underline="hover"
            sx={{
              color: "#097eff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography mr>Learn more about the Slack platform</Typography>
            <EastIcon />
          </Link>
        </Stack>
      </StackContainer>
    </Box>
  );
};

export default Main;
