import { Outlet } from "react-router-dom";

import { Container, useMediaQuery, useTheme } from "@mui/material";

import ThemeCustomization from "./themes";

function App() {
  const theme = useTheme();
  const isXlScreen = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <ThemeCustomization>
      <Container maxWidth={isXlScreen ? "xl" : "lg"} sx={{ paddingY: 2 }}>
        <Outlet />
      </Container>
    </ThemeCustomization>
  );
}

export default App;
