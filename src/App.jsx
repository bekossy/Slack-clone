import { Box, Stack, ThemeProvider, createTheme, styled } from "@mui/material";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Support from "./components/Support";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#541554",
      },
      secondary: {
        main: "#ffffff",
      },
    },
    // breakpoints: {
    //   values: {
    //     md: 1085,
    //     lg: 1200,
    //   },
    // },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box>
          <Box component={"header"} sx={{ backgroundColor: "#541554" }}>
            <Navbar />
            <Header />
          </Box>
          <Main />
          <Support />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
