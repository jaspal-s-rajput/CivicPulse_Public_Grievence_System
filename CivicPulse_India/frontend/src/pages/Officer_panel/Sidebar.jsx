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
import AssignmentIcon from "@mui/icons-material/Assignment";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

import indiaMapImg from "../../assets/india-silver-map.png"; // 🇮🇳 emblem

const drawerWidth = 260;

const Sidebar = ({ selected, setSelected }) => {
  const menuItems = [
    { label: "Dashboard", icon: <DashboardIcon /> },
    { label: "All Complaints", icon: <AssignmentIcon /> },
    { label: "Profile", icon: <PersonIcon /> },
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

          /* 🟣 Premium Gradient Background */
          background: `
            linear-gradient(
              180deg,
              rgba(109,40,217,0.16),
              rgba(255,255,255,0.04)
            ),
            radial-gradient(
              circle at top,
              rgba(76,29,149,0.22),
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
            Officer Panel
          </Typography>
        </Box>
      </Box>

      {/* ================= MENU ================= */}
      <List sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
        {menuItems.map((item) => {
          const isSelected = selected === item.label;

          return (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                selected={isSelected}
                onClick={() => {
                  if (item.label === "Logout") {
                    localStorage.removeItem("token");
                    window.location.href = "/";
                  } else {
                    setSelected(item.label);
                  }
                }}
                sx={{
                  borderRadius: "14px",
                  px: 2,
                  py: 1.2,
                  transition: "all 0.25s ease",

                  /* Hover */
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, rgba(109,40,217,0.22), rgba(109,40,217,0.06))",
                    transform: "translateX(4px)",
                  },

                  /* Selected */
                  "&.Mui-selected": {
                    background:
                      "linear-gradient(135deg, #6d28d9, #4c1d95)",
                    color: "#ffffff",
                    boxShadow: "0 8px 22px rgba(76,29,149,0.45)",
                  },
                  "&.Mui-selected:hover": {
                    background:
                      "linear-gradient(135deg, #6d28d9, #4c1d95)",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 36,
                    color:
                      item.color === "error"
                        ? "#ef4444"
                        : isSelected
                        ? "#ffffff"
                        : "text.secondary",
                  }}
                >
                  {item.icon}
                </ListItemIcon>

                <ListItemText
                  primary={item.label}
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
