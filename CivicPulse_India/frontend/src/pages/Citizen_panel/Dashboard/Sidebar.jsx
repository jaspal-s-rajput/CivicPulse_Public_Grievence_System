import React from "react";
import {
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";

import indiaMapImg from "../../../assets/india-silver-map.png"; // 🇮🇳 PNG LOGO

const Sidebar = ({
  drawerWidth,
  primaryBlue,
  selected,
  setSelected,
  notifications,
  navigate,
}) => {
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
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          px: 2,
          py: 3,

          /* 🌈 Aesthetic Gradient Sidebar */
          background: `
            linear-gradient(
              180deg,
              rgba(123,44,191,0.12),
              rgba(255,255,255,0.02)
            ),
            radial-gradient(
              circle at top,
              rgba(157,78,221,0.18),
              transparent 60%
            )
          `,
          backdropFilter: "blur(6px)",
          borderRight: "1px solid rgba(255,255,255,0.08)",
        },
      }}
    >
      {/* ================= LOGO ================= */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.2,
          mb: 4,
          px: 1,
        }}
      >
        <Box
          sx={{
            width: 44,
            height: 44,
            borderRadius: "12px",
            background:
              "linear-gradient(135deg, #ff9933, #ffffff 45%, #138808)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
          }}
        >
          <img
            src={indiaMapImg}
            alt="India Map Emblem"
            style={{
              width: "26px",
              height: "26px",
              objectFit: "contain",
              filter: "grayscale(100%) brightness(0.95)",
            }}
          />
        </Box>

        <Box>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "1.05rem",
              letterSpacing: "0.4px",
            }}
          >
            CivicPulse India
          </Typography>
          <Typography
            sx={{
              fontSize: "0.7rem",
              color: "text.secondary",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            जनसेवा • समाधान • विश्वास
          </Typography>
        </Box>
      </Box>

      {/* ================= MENU ================= */}
      <List sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
        {sidebarItems.map((item) => {
          const isSelected =
            selected === (item.label === "My Profile" ? "MyProfile" : item.label);

          return (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                selected={isSelected}
                onClick={() => {
                  if (item.label === "Logout") {
                    localStorage.removeItem("token");
                    navigate("/");
                  } else {
                    setSelected(
                      item.label === "My Profile" ? "MyProfile" : item.label
                    );
                  }
                }}
                sx={{
                  borderRadius: "14px",
                  px: 2,
                  py: 1.2,

                  transition: "all 0.25s ease",

                  "&:hover": {
                    background:
                      "linear-gradient(135deg, rgba(157,78,221,0.18), rgba(157,78,221,0.05))",
                    transform: "translateX(4px)",
                  },

                  "&.Mui-selected": {
                    background:
                      "linear-gradient(135deg, #7b2cbf, #5a189a)",
                    color: "#fff",
                    boxShadow: "0 8px 20px rgba(123,44,191,0.35)",
                  },
                  "&.Mui-selected:hover": {
                    background:
                      "linear-gradient(135deg, #7b2cbf, #5a189a)",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 36,
                    color: isSelected ? "#fff" : "text.secondary",
                  }}
                >
                  {item.icon}
                </ListItemIcon>

                <ListItemText
                  primary={
                    item.label === "Notifications" && notifications.length > 0
                      ? `Notifications (${notifications.length})`
                      : item.label
                  }
                  primaryTypographyProps={{
                    fontWeight: isSelected ? 700 : 500,
                    fontSize: "0.95rem",
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Sidebar;
