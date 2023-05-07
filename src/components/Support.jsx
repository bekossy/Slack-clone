import { Box, Button, Stack, Typography, styled } from "@mui/material";
import HandshakeIcon from "@mui/icons-material/Handshake";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ImageIcon from "@mui/icons-material/Image";
import HttpsIcon from "@mui/icons-material/Https";
import LaptopIcon from "@mui/icons-material/Laptop";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import React from "react";

const Support = () => {
  const Btn = styled(Button)({
    textTransform: "uppercase",
    padding: "15px 40px",
    border: "1px solid #541554",
    borderRadius: 4,
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
  });

  const Icons = styled(Box)(({ theme }) => ({
    boxShadow: theme.shadows[1],
    backgroundColor: "#f1f5f8",
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
    borderRadius: 20,
    position: "absolute",
  }));

  return (
    <Box>
      <Box m={"60px auto"} textAlign={"center"} position={"relative"} p={6}>
        <Typography variant="h3" fontWeight={700} mb={3}>
          Teams large and small rely on Slack
        </Typography>
        <Typography variant="body1" fontWeight={500} letterSpacing={1} mb={5}>
          Slack securely scales up to support collaboration at the world’s
          biggest companies.
        </Typography>
        <Stack
          direction={"row"}
          alignItems={"center"}
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
        direction={"row"}
        justifyContent={"space-around"}
        m={"50px auto"}
        p={"0 50px"}
      >
        <Stack maxWidth={200}>
          <Typography variant="h2" fontWeight={700} color={"primary"}>
            85%
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing*
          </Typography>
        </Stack>
        <Stack maxWidth={200}>
          <Typography variant="h2" fontWeight={700} color={"primary"}>
            86%
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing*
          </Typography>
        </Stack>
        <Stack maxWidth={200}>
          <Typography variant="h2" fontWeight={700} color={"primary"}>
            88%
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing*
          </Typography>
        </Stack>
      </Stack>

        

    </Box>
  );
};

export default Support;
