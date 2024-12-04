/* eslint-disable react/prop-types */
// import Drawer from "@mui/material/Drawer";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import AccountBoxIcon from "@mui/icons-material/AccountBox";
// import ArticleIcon from "@mui/icons-material/Article";
// import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
// import ListItemText from "@mui/material/ListItemText";
// import { useNavigate } from "react-router-dom";
// // eslint-disable-next-line react/prop-types
// export default function MyDrawer({ drawerWidth }) {
//   const navigate = useNavigate();
//   return (
//     <Drawer
//       sx={{
//         width: drawerWidth,
//         flexShrink: 0,
//         "& .MuiDrawer-paper": {
//           width: drawerWidth,
//           boxSizing: "border-box",
//         },
//       }}
//       variant="permanent"
//       anchor="left"
//       // @ts-ignore
//       open={true}
//     >
//       <Toolbar />
//       <Toolbar />
//       <Toolbar />
//       {/* <Divider /> */}
//       {/* <MyList /> */}
//       <List>
//         {/* ==========================> Students Paget <================== */}
//         <ListItem>
//           <ListItemButton onClick={() => navigate("/")}>
//             <ListItemIcon>
//               <AccountBoxIcon />
//             </ListItemIcon>
//             <ListItemText primary="Students" />
//           </ListItemButton>
//         </ListItem>
//         {/* ==========================> Speciality Paget <================== */}
//         <ListItem>
//           <ListItemButton onClick={() => navigate("/specialty")}>
//             <ListItemIcon>
//               <ArticleIcon />
//             </ListItemIcon>
//             <ListItemText primary="Specialties" />
//           </ListItemButton>
//         </ListItem>
//         {/* ==========================> Choice Paget <================== */}

//         <ListItem sx={{}}>
//           <ListItemButton onClick={() => navigate("/choice")}>
//             <ListItemIcon>
//               <DownloadDoneIcon />
//             </ListItemIcon>
//             <ListItemText primary="Choices" />
//           </ListItemButton>
//         </ListItem>
//       </List>
//     </Drawer>
//   );
// }

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArticleIcon from "@mui/icons-material/Article";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AutoStoriesIcon from '@mui/icons-material/AutoStories'; // Adding a book icon for the logo

export default function MyDrawer({ drawerWidth }) {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (path, index) => {
    navigate(path);
    setActiveItem(index);
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          bgcolor: '#ffa500',
        },
      }}
      variant="permanent"
      anchor="left"
      open={true}
    >
      {/* Logo Section */}
      <Box
        sx={{
          padding: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          marginTop: 2,
          marginBottom: 2,
        }}
      >
        <AutoStoriesIcon 
          sx={{ 
            fontSize: '3rem', 
            color: 'white',
            marginBottom: 1
          }} 
        />
        <Typography
          variant="h6"
          sx={{
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: '1.5rem',
            letterSpacing: '0.1rem',
            textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
          }}
        >
          O MANAGEMENT 
        </Typography>
      </Box>

      <List>
        <ListItem>
          <ListItemButton 
            onClick={() => handleClick("/", 0)}
            sx={{
              transition: 'all 0.3s ease',
              '& .MuiListItemText-primary': {
                fontSize: activeItem === 0 ? '1.2rem' : '1rem',
                fontWeight: activeItem === 0 ? 'bold' : 'normal',
              },
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            <ListItemIcon>
              <AccountBoxIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Students" sx={{ color: 'white' }} />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton 
            onClick={() => handleClick("/specialty", 1)}
            sx={{
              transition: 'all 0.3s ease',
              '& .MuiListItemText-primary': {
                fontSize: activeItem === 1 ? '1.2rem' : '1rem',
                fontWeight: activeItem === 1 ? 'bold' : 'normal',
              },
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            <ListItemIcon>
              <ArticleIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Specialties" sx={{ color: 'white' }} />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton 
            onClick={() => handleClick("/choice", 2)}
            sx={{
              transition: 'all 0.3s ease',
              '& .MuiListItemText-primary': {
                fontSize: activeItem === 2 ? '1.2rem' : '1rem',
                fontWeight: activeItem === 2 ? 'bold' : 'normal',
              },
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            <ListItemIcon>
              <DownloadDoneIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Choices" sx={{ color: 'white' }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}