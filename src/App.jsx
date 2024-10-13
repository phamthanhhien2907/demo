import { Route, Routes } from "react-router-dom";
import path from "./utils/path";
import Public from "./pages/Public";
import Home from "./pages/index";
import "./index.css";
import Match from "./pages/Match";
import Calendar from "./components/Canlendar";
import Download from "./components/Download";
import FixedBottomNavigation from "./components/FixedBottomNavigation";
import { useMediaQuery } from '@mui/material';
function App() {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
      <>
      <Routes>
        {isMobile ? <Route path={path.PUBLIC} element={<FixedBottomNavigation />} /> : <Route path={path.PUBLIC} element={<Public />} className="max-sm:hidden max-lg:hidden w-full">
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.MATCH} element={<Match />} />
          <Route path={path.CALENDAR} element={<Calendar />} />
          <Route path={path.DOWNLOAD} element={<Download />} />
        </Route>}
       
      </Routes>
        
      </>
  );
}

export default App;
