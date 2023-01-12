import { Container, useMediaQuery, useTheme } from "@mui/material";

import { CompanyDetailsView } from "./modules/CompanyModule/views/CompanyDetailsView";

function App() {
  const theme = useTheme();
  const isXlScreen = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <Container maxWidth={isXlScreen ? "xl" : "lg"} sx={{ paddingY: 2 }}>
      {/* <RankingView /> */}
      <CompanyDetailsView />
    </Container>
  );
}

export default App;
