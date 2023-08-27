
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Header1 from "./components/header/Header1";

import Header3 from "./components/header/Header3";
import Hero from "./components/heroseaction/Hero";
import Header2 from "./components/header/Header2";
import Main from "./components/main/Main";


function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider 
// @ts-ignore
    value={colorMode}>
      <ThemeProvider 
// @ts-ignore
      theme={theme}>
        <CssBaseline />
      <Header1/>
      <Header2/>
      <Header3/>
      <Hero/>
      <Main/>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;