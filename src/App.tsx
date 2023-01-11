import { Container, useMediaQuery, useTheme } from "@mui/material";
import { RankingView } from "./modules/RankingModule/views/RankingView";

function App() {
  const theme = useTheme();
  const isXlScreen = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <Container maxWidth={isXlScreen ? "xl" : "lg"} sx={{ paddingY: 2 }}>
      <RankingView />
    </Container>
  );
}

export default App;
