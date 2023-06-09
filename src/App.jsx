import { Box, Stack, ThemeProvider, createTheme, styled } from "@mui/material";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Support from "./components/Support";
import Explore from "./components/Explore";
import Footer from "./components/Footer";

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
    breakpoints: {
      values: {
        xs: 0,
        navContainer: 1085,
        leftBtn: 1215,
        headerBtn: 1170,
        mainSection: 1020,
        supportBtn: 768,
        footerLinks: 480,
      },
    },
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
          <Explore />
          <Footer />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
