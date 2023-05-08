import { Button, ButtonGroup, Stack, Typography, styled } from "@mui/material";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import StackVid from "../assets/StackVid.webm";

const Header = () => {
  const Btn = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    padding: "15px 40px",
    marginBottom: 10,
    [theme.breakpoints.down("headerBtn")]: {
      width: "100%",
    },
  }));
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      mt={6}
      alignItems={"center"}
      padding={"0 0 100px 50px"}
      overflow={"hidden"}
    >
      <Stack flex={1} mr={5}>
        <Typography variant="h2" fontWeight={600} color={"secondary"}>
          Made for people.
        </Typography>
        <Typography variant="h2" fontWeight={600} sx={{ color: "#ecb22e" }}>
          Built for productivity.
        </Typography>
        <Typography
          color={"secondary"}
          variant="h6"
          fontWeight={400}
          marginBottom={4}
          lineHeight={1.3}
          mt
        >
          Connect the right people, find anything you need and automate the
          rest. That’s work in Slack, your productivity platform.
        </Typography>

        <Stack direction={{ xs: "column", headerBtn: "row" }} mb={2}>
          <Btn
            disableElevation
            sx={{
              mr: 1,
              border: "1px solid #fff",
              "&:hover": {
                border: "1px solid #541554",
                backgroundColor: "#fff",
              },
            }}
            variant="contained"
          >
            Sign up with email
          </Btn>
          <Btn
            disableElevation
            startIcon={<GoogleIcon color="secondary" />}
            variant="contained"
            sx={{
              backgroundColor: "#4285f4",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#4285f4",
                color: "#fff",
              },
            }}
          >
            Sign up with google
          </Btn>
        </Stack>
        <Typography
          color={"secondary"}
          variant="h6"
          display={{ xs: "none", mainSection: "block" }}
        >
          Slack is free to try for as long as you'd like
        </Typography>
      </Stack>
      <Stack
        sx={{
          alignItems: "center",
          flexDirection: "row",
          flex: 1,
          position: "relative",
        }}
      >
        <video
          src={StackVid}
          style={{
            width: "700px",
            height: "400px",
            position: "absolute",
          }}
          autoPlay
          loop
        />
      </Stack>
    </Stack>
  );
};

export default Header;
