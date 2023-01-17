import { KeyboardArrowUp } from "@mui/icons-material";
import { Box, Fab, useScrollTrigger, Zoom } from "@mui/material";
import { FC, useCallback } from "react";

export const ScrollToTop: FC = () => {
  const trigger = useScrollTrigger({
    target: window ? (() => window)() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Zoom in={trigger}>
      <Box
        role="presentation"
        sx={{
          position: "fixed",
          bottom: 32,
          left: 32,
          zIndex: 1,
        }}
      >
        <Fab onClick={scrollToTop} color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </Box>
    </Zoom>
  );
};
