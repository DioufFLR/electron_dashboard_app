import {ColorModeContext, useMode} from './theme'
import {CssBaseline, ThemeProvider} from "@mui/material";
import {Routes, Route} from "react-router-dom";
import Topbar from '@/scenes/global/Topbar';
import Sidebar from "@/scenes/global/ProSidebar";
import Dashboard from "@/scenes/dashboard";
// import Team from "@/scenes/team";
// import Invoices from "@/scenes/invoices";
// import Contacts from "@/scenes/contacts";
// import Bar from "@/scenes/bar";
// import Form from "@/scenes/form";
// import Line from "@/scenes/line";
// import Pie from "@/scenes/pie";
// import FAQ from "@/scenes/faq";
// import Geography from "@/scenes/geography";
// import Calendar from "@/scenes/calendar";



function App() {

  const[theme, colorMode] = useMode();

  return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div  className='app'>
            <main class="content">
              <Topbar />
                <Routes>
                    <Route paht='/' element={<Dashboard />} />
                    {/*<Route paht='/team' element={<Team />} />*/}
                    {/*<Route paht='/contacts' element={<Contacts />} />*/}
                    {/*<Route paht='/invoices' element={<Invoices />} />*/}
                    {/*<Route paht='/form' element={<Form />} />*/}
                    {/*<Route paht='/bar' element={<Bar />} />*/}
                    {/*<Route paht='/pie' element={<Pie />} />*/}
                    {/*<Route paht='/line' element={<Line />} />*/}
                    {/*<Route paht='/faq' element={<FAQ />} />*/}
                    {/*<Route paht='/geography' element={<Geography />} />*/}
                    {/*<Route paht='/calendar' element={<Calendar />} />*/}
                </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
  )
}

export default App
