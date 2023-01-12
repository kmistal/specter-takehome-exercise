import { Outlet } from "react-router-dom";

import { Container, useMediaQuery, useTheme } from "@mui/material";

function App() {
  const theme = useTheme();
  const isXlScreen = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <Container maxWidth={isXlScreen ? "xl" : "lg"} sx={{ paddingY: 2 }}>
      <Outlet />
    </Container>
  );
}

export default App;
