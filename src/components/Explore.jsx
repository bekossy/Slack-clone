import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import stateOfWork from "../assets/state-of-work.jpg";
import React from "react";

const Explore = () => {
  const GridContainer = styled(Box)({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
  });
  const CardContainer = styled(Box)({
    padding: 10,
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
    margin: "0 10px",
    backgroundColor: "#fff",
    height: 400,
  });
  return (
    <Box sx={{ margin: "0 auto", backgroundColor: "#F4EDE4", p: "50px" }}>
      <Typography variant="h4" fontWeight={700} mb={3} textAlign={"center"}>
        Take a deeper dive into a new way to work
      </Typography>

      <GridContainer>
        <CardContainer>
          <CardContent sx={{ padding: 0 }}>
            <CardMedia
              component={"img"}
              image={stateOfWork}
              alt="state-of-work"
            />
            <Typography my={1} variant="body2">
              Report
            </Typography>
            <Typography variant="h5" fontWeight={700}>
              The State of Work 2023
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              padding: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link>Read More</Link>
            <EastIcon />
          </CardActions>
        </CardContainer>
        <CardContainer>
          <CardContent sx={{ padding: 0 }}>
            <CardMedia
              component={"img"}
              image={stateOfWork}
              alt="state-of-work"
            />
            <Typography my={1.5} variant="body2">
              On Demand
            </Typography>
            <Typography variant="h5" fontWeight={700}>
              Lorem ipsum dolor sit amet consectetur adipi
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              padding: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link>Read More</Link>
            <EastIcon />
          </CardActions>
        </CardContainer>
        <CardContainer>
          <CardContent sx={{ padding: 0 }}>
            <CardMedia
              component={"img"}
              image={stateOfWork}
              alt="state-of-work"
            />
            <Typography my={1.5} variant="body2">
              Report
            </Typography>
            <Typography variant="h5" fontWeight={700}>
              The State of Work 2023
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              padding: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link>Read More</Link>
            <EastIcon />
          </CardActions>
        </CardContainer>
        <CardContainer>
          <CardContent sx={{ padding: 0 }}>
            <CardMedia
              component={"img"}
              image={stateOfWork}
              alt="state-of-work"
            />
            <Typography my={2} variant="body2">
              Report
            </Typography>
            <Typography variant="h5" fontWeight={700}>
              The State of Work 2023
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              padding: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link>Read More</Link>
            <EastIcon />
          </CardActions>
        </CardContainer>
      </GridContainer>
    </Box>
  );
};

export default Explore;
