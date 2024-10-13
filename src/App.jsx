import { Route, Routes } from "react-router-dom";
import path from "./utils/path";
import Public from "./pages/Public";
import Home from "./pages/index";
import "./index.css";
import Match from "./pages/Match";
import Calendar from "./components/Canlendar";
function App() {
  return (
        <Routes>
          <Route path={path.PUBLIC} element={<Public />}>
            <Route path={path.HOME} element={<Home />} />
            <Route path={path.MATCH} element={<Match />} />
            <Route path={path.CALENDAR} element={<Calendar />} />
            

          </Route>
        </Routes>
  );
}

export default App;
