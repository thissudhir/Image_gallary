import { useState } from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import { SearchProvider } from "./Components/SearchContext";
import "./App.css";
function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    // <SearchProvider>
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        {/* <Navbar  /> */}
        <Home setMode={setMode} mode={mode} />
      </Box>
    </ThemeProvider>
    // </SearchProvider>
  );
}

export default App;
