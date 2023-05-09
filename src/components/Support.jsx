import {
  Box,
  Button,
  Link,
  Stack,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import HandshakeIcon from "@mui/icons-material/Handshake";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ImageIcon from "@mui/icons-material/Image";
import HttpsIcon from "@mui/icons-material/Https";
import LaptopIcon from "@mui/icons-material/Laptop";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import slackVid5 from "../assets/StackVid5.mp4";
import React from "react";

const Support = () => {
  const Btn = styled(Button)(({ theme }) => ({
    textTransform: "uppercase",
    padding: "15px 40px",
    border: "1px solid #541554",
    borderRadius: 4,
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
    margin: "10px 0",
    transition: "all 0.3s ease-in-out",
    [theme.breakpoints.down("supportBtn")]: {
      width: "100%",
    },
  }));

  const Icons = styled(Box)(({ theme }) => ({
    boxShadow: theme.shadows[1],
    backgroundColor: "#f1f5f8",
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
    borderRadius: 20,
    position: "absolute",
    [theme.breakpoints.down("mainSection")]: {
      display: "none",
    },
  }));

  const StackContainer = styled(Stack)(({ theme }) => ({
    justifyContent: "space-between",
    margin: "100px auto",
    [theme.breakpoints.up("mainSection")]: {
      flexDirection: "row",
      alignItems: "center",
    },
  }));

  return (
    <Box>
      <Box m={"30px auto"} textAlign={"center"} position={"relative"} p={6}>
        <Typography variant="h3" fontWeight={700} mb={3}>
          Teams large and small rely on Slack
        </Typography>
        <Typography variant="body1" fontWeight={500} letterSpacing={1} mb={3}>
          Slack securely scales up to support collaboration at the world’s
          biggest companies.
        </Typography>
        <Stack
          direction={{ xs: "column", supportBtn: "row" }}
          justifyContent={"center"}
        >
          <Btn
            sx={{
              backgroundColor: "#541554",
              color: "#fff",
              marginRight: 1,
              "&:hover": {
                backgroundColor: "#3f083f",
              },
            }}
          >
            Meet slack for enterprise
          </Btn>
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
            Talk to sales
          </Btn>
        </Stack>
        <Icons right={"7%"} bottom={"40%"}>
          <HandshakeIcon color="warning" />
          <Typography sx={{ cursor: "default" }}>9</Typography>
        </Icons>
        <Icons bottom={"7%"} right={"3%"}>
          <LaptopIcon />
          <Typography sx={{ cursor: "default" }}>8</Typography>
        </Icons>
        <Icons top={0} right={"3%"}>
          <ImageIcon color="primary" />
          <Typography sx={{ cursor: "default" }}>12</Typography>
        </Icons>
        <Icons left={"7%"} bottom={"40%"}>
          <TrendingUpIcon color="success" />
          <Typography sx={{ cursor: "default" }}>5</Typography>
        </Icons>
        <Icons bottom={"7%"} left={"3%"}>
          <HttpsIcon color="warning" />
          <Typography sx={{ cursor: "default" }}>27</Typography>
        </Icons>
        <Icons top={0} left={"3%"}>
          <ApartmentIcon color="error" />
          <Typography sx={{ cursor: "default" }}>11</Typography>
        </Icons>
      </Box>

      <Stack
        direction={{ xs: "column", supportBtn: "row" }}
        alignItems={"center"}
        justifyContent={"space-around"}
        m={"30px auto"}
        p={"0 50px"}
      >
        <Stack
          maxWidth={200}
          my={2}
          textAlign={{ xs: "center", supportBtn: "left" }}
        >
          <Typography variant="h2" fontWeight={700} color={"primary"}>
            85%
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing*
          </Typography>
        </Stack>
        <Stack
          maxWidth={200}
          my={2}
          textAlign={{ xs: "center", supportBtn: "left" }}
        >
          <Typography variant="h2" fontWeight={700} color={"primary"}>
            86%
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing*
          </Typography>
        </Stack>
        <Stack
          maxWidth={200}
          my={2}
          textAlign={{ xs: "center", supportBtn: "left" }}
        >
          <Typography variant="h2" fontWeight={700} color={"primary"}>
            88%
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing*
          </Typography>
        </Stack>
      </Stack>

      <StackContainer>
        <Stack maxWidth={600} mr={"auto"} width={"100%"}>
          <Tooltip title="Video featuring a Slack customer" placement="right">
            <video
              src={slackVid5}
              controls={false}
              autoPlay
              loop
              style={{
                borderTopRightRadius: "250px",
                borderBottomRightRadius: "250px",
              }}
            />
          </Tooltip>
        </Stack>
        <Stack maxWidth={{ xs: 600, mainSection: 900 }} m={"0 auto"} p={2}>
          <Typography variant="h4" fontWeight={300} fontStyle={"italic"} mb={2}>
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Laboriosam veniam ex at asperiores iste mollitia ipsam soluta rem,
            animi laudan Lorem"
          </Typography>
          <Typography fontWeight={"bold"}>Anne Johnson</Typography>
          <Typography variant={"body1"} mb={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            voluptatem suscipit libero dicta.
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
            <Typography mr>See more customer stories</Typography>
            <EastIcon />
          </Link>
        </Stack>
      </StackContainer>

      <Typography
        variant="body2"
        textAlign={"center"}
        sx={{ color: "#696969" }}
        my={2}
      >
        * Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
        voluptatum quidem obcaecati ipsam iusto! Ex aspernatur commodi facilis
        quis! Quisquam
      </Typography>
    </Box>
  );
};

export default Support;
