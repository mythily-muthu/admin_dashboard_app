import { Suspense, lazy } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from './scenes/global/Topbar'

import { Route, Routes } from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar"
// import Dashboard from "./scenes/dashboard"
//import Team from "./scenes/Team";
//import Contacts from "./scenes/Contacts";
//import Invoices from "./scenes/pages/Invoices";
//import Form from "./scenes/pages/Form";
//import Calendar from "./scenes/pages/Calendar";
//import Faq from "./scenes/pages/Faq";
//import Line from "./components/line/Line";
//import Bar from "./components/bar/Bar";
//import Pie from "./components/pie/Pie";
//import Geography from "./components/geography/Geography";

// -------- dynamic imports------
const Dashboard = lazy(() => import("./scenes/dashboard"))
const Team = lazy(() => import("./scenes/Team"))
const Contacts = lazy(() => import("./scenes/Contacts"))
const Invoices = lazy(() => import("./scenes/pages/Invoices"))
const Form = lazy(() => import("./scenes/pages/Form"))
const Calendar = lazy(() => import("./scenes/pages/Calendar"))
const Faq = lazy(() => import("./scenes/pages/Faq"))
const Bar = lazy(() => import("./components/bar/Bar"))
const Pie = lazy(() => import("./components/pie/Pie"))
const Line = lazy(() => import('./components/line/Line'))
const Geography = lazy(() => import("./components/geography/Geography"))


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
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={< Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/geography" element={<Geography />} />
              </Routes>
            </Suspense>
          </main>
        </div>

      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
