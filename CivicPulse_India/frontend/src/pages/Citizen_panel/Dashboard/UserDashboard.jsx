import React, { useEffect, useState, useCallback } from "react";
import { Box, AppBar, Toolbar, Typography, Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Sidebar from "./Sidebar";
import ComplaintsTable from "./ComplaintsTable";
import NotificationsList from "./NotificationsList";
import SubmitGrievance from "./SubmitGrievance";
import TrackComplaints from "./TrackComplaints";
import MyProfile from "./MyProfile";

const drawerWidth = 260;
const primaryBlue = "#1976d2";

const UserDashboard = () => {
  const navigate = useNavigate();

  const [selected, setSelected] = useState("Dashboard");
  const [complaints, setComplaints] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [complaintLoading, setComplaintLoading] = useState(false);

  const [snackbarMsg, setSnackbarMsg] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const token = localStorage.getItem("token");

  /* ================= AUTH CHECK ================= */
  useEffect(() => {
    if (!token) navigate("/");
  }, [navigate, token]);

  /* ================= FETCH COMPLAINTS ================= */
  const fetchComplaints = useCallback(async () => {
    try {
      setComplaintLoading(true);
      const res = await fetch("http://localhost:8082/api/citizen/complaints", {
        headers: { Authorization: "Bearer " + token },
      });
      const data = await res.json();
      setComplaints(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error(error);
      setComplaints([]);
    } finally {
      setComplaintLoading(false);
    }
  }, [token]);

  useEffect(() => {
    fetchComplaints();
  }, [fetchComplaints]);

  /* ================= WEBSOCKET ================= */
  useEffect(() => {
    if (!token) return;

    import("@stomp/stompjs").then(({ Client }) => {
      import("sockjs-client").then(({ default: SockJS }) => {
        const socket = new SockJS("http://localhost:8082/ws");
        const stompClient = new Client({
          webSocketFactory: () => socket,
          connectHeaders: { Authorization: `Bearer ${token}` },
          reconnectDelay: 5000,
          onConnect: () => {
            stompClient.subscribe("/user/queue/notify", (message) => {
              const payload = JSON.parse(message.body);

              setComplaints((prev) =>
                prev.map((c) =>
                  c.id === payload.complaintId
                    ? { ...c, status: payload.status || payload.message }
                    : c
                )
              );

              const msg = `Complaint #${payload.complaintId} status updated to ${payload.status}`;
              setNotifications((prev) => [msg, ...prev]);
              setSnackbarMsg(msg);
              setOpenSnackbar(true);
            });
          },
        });

        stompClient.activate();
        return () => stompClient.deactivate();
      });
    });
  }, [token]);

  /* ================= UI ================= */
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",

        /* 🌈 Premium civic gradient */
        background: `
          linear-gradient(
            135deg,
            #f9faff 0%,
            #f1f4fb 45%,
            #eef2ff 100%
          )
        `,
      }}
    >
      <Sidebar
        drawerWidth={drawerWidth}
        primaryBlue={primaryBlue}
        selected={selected}
        setSelected={setSelected}
        notifications={notifications}
        navigate={navigate}
      />

      {/* ================= RIGHT CONTENT ================= */}
      <Box sx={{ flexGrow: 1 }}>
        {/* ================= APP BAR ================= */}
        <AppBar
  position="sticky"
  elevation={0}
  sx={{
    background: `
      linear-gradient(
        135deg,
        rgba(123,44,191,0.08),
        rgba(255,255,255,0.85)
      )
    `,
    color: "#1f2937",
    backdropFilter: "blur(14px)",
    borderBottom: "1px solid rgba(0,0,0,0.08)",
  }}
>
  <Toolbar
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      py: 1.5,
    }}
  >
    {/* Main Title */}
    <Typography
      variant="h5"
      fontWeight={700}
      fontFamily= {"Arial, Helvetica, sans-serif"}

      sx={{
        letterSpacing: "0.5px",
      }}
    >
      Citizen Dashboard
    </Typography>

    {/* Motivational Civic Line */}
    <Typography
      variant="body2"
      sx={{
        mt: 0.5,
        color: "#6b7280",
        fontWeight: 500,
        letterSpacing: "0.3px",
      }}
    >
      Your participation strengthens governance and builds better cities.
    </Typography>
  </Toolbar>
</AppBar>


        {/* ================= MAIN CONTENT ================= */}
        <Box
          sx={{
            p: 3,
            minHeight: "calc(100vh - 64px)",

            /* 🧵 Subtle texture illusion */
            backgroundImage: `
              radial-gradient(
                circle at 15% 20%,
                rgba(122, 44, 191, 0.15),
                transparent 40%
              ),
              radial-gradient(
                circle at 85% 80%,
                rgba(25, 118, 210, 0.3),
                transparent 45%
              ),
              linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.18) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(0, 0, 0, 0.14) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "auto, auto, 28px 28px, 28px 28px",
          }}
        >
          {/* ===== CONTENT CARD WRAPPER ===== */}
          <Box
            sx={{
              background: "rgba(255,255,255,0.96)",
              borderRadius: 3,
              p: 2.5,
              boxShadow: "0 12px 32px rgba(0,0,0,0.10)",
            }}
          >
            {selected === "Dashboard" && (
              <ComplaintsTable
                complaints={complaints}
                loading={complaintLoading}
              />
            )}

            {selected === "Submit Grievance" && (
              <SubmitGrievance
                complaints={complaints}
                setComplaints={setComplaints}
              />
            )}

            {selected === "Track Complaints" && (
              <TrackComplaints
                initialComplaints={complaints}
                loading={complaintLoading}
                token={token}
              />
            )}

            {selected === "Notifications" && (
              <NotificationsList
                notifications={notifications}
                setNotifications={setNotifications}
              />
            )}

            {selected === "MyProfile" && <MyProfile />}
          </Box>
        </Box>
      </Box>

      {/* ================= SNACKBAR ================= */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        message={snackbarMsg}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      />
    </Box>
  );
};

export default UserDashboard;
