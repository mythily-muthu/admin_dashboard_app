import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from './scenes/global/Topbar'
import Dashboard from "./scenes/dashboard"
import { Route, Routes } from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar"
import Team from "./scenes/Team";
//import { Contacts } from "./scenes/Contacts";





function App() {

  let [theme, colorMode] = useMode()


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />

            </Routes>
          </main>
        </div>

      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
