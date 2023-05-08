import {
  Box,
  Grid,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import stateOfWork from "../assets/state-of-work.jpg";
import React from "react";

const Explore = () => {
  const GridItem = styled(Grid)(({ theme }) => ({
    backgroundColor: "#fff",
    padding: "10px",
    margin: "10px",
    maxWidth: "250px",
    height: "400px",
    maxHeight: "800px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    boxShadow: theme.shadows[3],
    "&:hover": {
      boxShadow: theme.shadows[10],
      transform: "scale(1.08)",
    },
  }));

  return (
    <Box sx={{ margin: "0 auto", backgroundColor: "#F4EDE4", p: "50px" }}>
      <Typography variant="h4" fontWeight={700} mb={3} textAlign={"center"}>
        Take a deeper dive into a new way to work
      </Typography>

      <Grid container maxWidth={1150} justifyContent={"center"}>
        <GridItem item>
          <Stack>
            <img
              src={stateOfWork}
              alt=""
              style={{ width: "100%", height: "180px" }}
            />
            <Typography my variant="body2" color={"#696969"}>
              Report
            </Typography>
            <Typography variant="h5" fontWeight={700}>
              The State of Work 2023
            </Typography>
          </Stack>
          <Stack
            color={"#1264A3"}
            direction={"row"}
            textTransform={"uppercase"}
            justifyContent={"space-between"}
          >
            <Typography variant="body2" fontWeight={600}>
              Read more
            </Typography>
            <EastIcon />
          </Stack>
        </GridItem>
        <GridItem item>
          <Stack>
            <img
              src={stateOfWork}
              alt=""
              style={{ width: "100%", height: "180px" }}
            />
            <Typography my variant="body2" color={"#696969"}>
              On-Demand
            </Typography>
            <Typography variant="h5" fontWeight={700}>
              Big things are launching. Relive the World Tour New York
            </Typography>
          </Stack>
          <Stack
            color={"#1264A3"}
            direction={"row"}
            textTransform={"uppercase"}
            justifyContent={"space-between"}
          >
            <Typography variant="body2" fontWeight={600}>
              Watch now
            </Typography>
            <EastIcon />
          </Stack>
        </GridItem>
        <GridItem item>
          <Stack>
            <img
              src={stateOfWork}
              alt=""
              style={{ width: "100%", height: "180px" }}
            />
            <Typography my variant="body2" color={"#696969"}>
              Customer Story
            </Typography>
            <Typography variant="h5" fontWeight={700}>
              The next big thing? AI for everyone.
            </Typography>
          </Stack>
          <Stack
            color={"#1264A3"}
            direction={"row"}
            textTransform={"uppercase"}
            justifyContent={"space-between"}
          >
            <Typography variant="body2" fontWeight={600}>
              Read more
            </Typography>
            <EastIcon />
          </Stack>
        </GridItem>
        <GridItem item>
          <Stack>
            <img
              src={stateOfWork}
              alt=""
              style={{ width: "100%", height: "180px" }}
            />
            <Typography my variant="body2" color={"#696969"}>
              Webinar
            </Typography>
            <Typography variant="h5" fontWeight={700}>
              Top Slack tips to boost productivity
            </Typography>
          </Stack>
          <Stack
            color={"#1264A3"}
            direction={"row"}
            textTransform={"uppercase"}
            justifyContent={"space-between"}
          >
            <Typography variant="body2" fontWeight={600}>
              Watch now
            </Typography>
            <EastIcon />
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Explore;
