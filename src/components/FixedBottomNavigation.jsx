import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HomePage from "./Home.responsive";
import CalendarReponsive from "./Calendar.responsive";
import Profile from "./Profile.resposive";
export default function FixedBottomNavigation() {
  
  const messageExamples = [
    {
      page: <CalendarReponsive  />,
    },
    {
      page: <HomePage  /> ,
    },   
    {
      page: <Profile  />,
    },
  
  ];
  const page = localStorage.getItem("page");
  const [value, setValue] = useState(Number(page));
  const [activeComponent, setActiveComponent] = useState(
    messageExamples[1].page
  );
  useEffect(() => {
    setActiveComponent(messageExamples[value].page);
  }, [value]);
  return (
    <div
      className="xl:hidden w-full" 
    >
      <CssBaseline />
      {activeComponent}
      <Paper
        sx={{
          py: 2,
          position: "fixed",
          overflow : "hidden",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        elevation={3}
        
      >
        <BottomNavigation
          showLabels
          className="flex items-center w-full"
          value={value}
          onChange={(event, newValue) => {
            localStorage.setItem("page", newValue);
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label={<span style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Lịch thi đấu</span>}
            sx={{
              fontWeight: 600,
              color: "rgb(151, 151, 153)",
              ":focus": {
                color: "black",
              },
            }}
            icon={<EmojiEventsIcon sx={{ fontSize: 30 }} />}
          />
          <BottomNavigationAction
            label={<span style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Trang chủ</span>}
            sx={{
              fontWeight: 600,
              color: "rgb(151, 151, 153)",
              ":focus": {
                color: "black",
              },
            }}
            icon={<LiveTvIcon sx={{ fontSize: 30 }} />}
          />
          <BottomNavigationAction
            label={<span style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Hồ sơ</span>}
            sx={{              
              color: "rgb(151, 151, 153)",
              ":focus": {
                color: "black",
              },
            }}
            icon={<PersonIcon sx={{ fontSize: 30 }} />}
          />
        </BottomNavigation>
      </Paper>
    </div>
  );
}