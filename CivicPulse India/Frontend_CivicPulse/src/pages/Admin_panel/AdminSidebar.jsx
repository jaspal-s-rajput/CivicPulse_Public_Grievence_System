import React from "react";
import { Drawer, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";


const drawerWidth = 260;

const AdminSidebar = ({ selected, setSelected }) => {
  const menuItems = [
    { label: "Dashboard", icon: <DashboardIcon /> },
    { label: "All Complaints", icon: <AssignmentIcon /> },
    { label:"Create Officer", icon:<DashboardIcon />},
    { label: "Analytics"},

    { label: "Profile", icon: <PersonIcon /> },
    
    { label: "Logout", icon: <LogoutIcon />, color: "error" },
   
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": { width: drawerWidth, p: 2 },
      }}
    >
      <Typography variant="h6" fontWeight="bold" mb={3}>
        Civic Pulse Hub
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              selected={selected === item.label}
              onClick={() => {
                if (item.label === "Logout") {
                  localStorage.removeItem("token");
                  window.location.href = "/";
                } else {
                  setSelected(item.label);
                }
              }}
              sx={{ borderRadius: 2 }}
            >
              <ListItemIcon
                sx={{
                  color:
                    item.color === "error"
                      ? "red"
                      : selected === item.label
                      ? "primary.main"
                      : "grey.700",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default AdminSidebar;
