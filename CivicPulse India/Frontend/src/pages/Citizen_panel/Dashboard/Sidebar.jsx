import React from "react";
import { Drawer, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";

const Sidebar = ({ drawerWidth, primaryBlue, selected, setSelected, notifications, navigate }) => {
  const sidebarItems = [
    { label: "Dashboard", icon: <DashboardIcon /> },
    { label: "Submit Grievance", icon: <MenuBookIcon /> },
    { label: "Track Complaints", icon: <TimelineOutlinedIcon /> },
    { label: "Notifications", icon: <NotificationsIcon /> },
    { label: "My Profile", icon: <PersonIcon /> },
    { label: "Logout", icon: <LogoutIcon />, color: "error" },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{ width: drawerWidth, "& .MuiDrawer-paper": { width: drawerWidth, p: 2 } }}
    >
      <Typography variant="h6" sx={{ mb: 3, color: primaryBlue }}>
        Civic Pulse Hub
      </Typography>
      {/* <List>
        {sidebarItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              selected={selected === item.label}
              onClick={() => {
                if (item.label === "Logout") {
                  localStorage.removeItem("token");
                  navigate("/");
                } else setSelected(item.label);
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                primary={
                  item.label === "Notifications" && notifications.length > 0
                    ? `Notifications (${notifications.length})`
                    : item.label
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
      <List>
  {sidebarItems.map((item) => (
    <ListItem key={item.label} disablePadding>
      <ListItemButton
        selected={
          selected === (item.label === "My Profile" ? "MyProfile" : item.label)
        }
        onClick={() => {
          if (item.label === "Logout") {
            localStorage.removeItem("token");
            navigate("/");
          } else {
            if (item.label === "My Profile") {
              setSelected("MyProfile");
            } else {
              setSelected(item.label);
            }
          }
        }}
      >
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText
          primary={
            item.label === "Notifications" && notifications.length > 0
              ? `Notifications (${notifications.length})`
              : item.label
          }
        />
      </ListItemButton>
    </ListItem>
  ))}
</List>

    </Drawer>
  );
};

export default Sidebar;
