import { Container, useMediaQuery, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";

import { ScrollToTop } from "./components";
import ThemeCustomization from "./themes";

function App() {
  const theme = useTheme();
  const isXlScreen = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <ThemeCustomization>
      <Container maxWidth={isXlScreen ? "xl" : "lg"} sx={{ paddingY: 2 }}>
        <Outlet />
      </Container>
      <ScrollToTop />
    </ThemeCustomization>
  );
}

export default App;
