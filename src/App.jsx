import { useState } from "react";
import Home from "./Components/Home";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Home setMode={setMode} mode={mode} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
