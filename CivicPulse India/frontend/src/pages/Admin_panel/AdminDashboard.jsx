import React, { useEffect, useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import AdminSidebar from "../Admin_panel/AdminSidebar";
import AdminSummaryCards from "../Admin_panel/AdminSummary";
import RecentComplaintsTable from "./RecentComplaintsTable";
import AllComplaintsCards from "./AllComplaintsCards";
import CreateOfficerForm from "./AdminCreateOfficer";
import AllComplaints from "../Admin_panel/AllComplaints";
import AdminAnalytics from "../Admin_panel/AdminAnalytics";

import {
  connectWebSocket,
  disconnectWebSocket,
} from "../../hooks/useWebSocket";
import { fetchAdminComplaints } from "../../api/admin";

export default function AdminDashboard() {
  const [selected, setSelected] = useState("Dashboard");
  const [complaints, setComplaints] = useState([]);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    status: "All",
    priority: "All",
    category: "All",
  });

  /* ===================== FETCH + WEBSOCKET ===================== */
  useEffect(() => {
    let isMounted = true;

    const loadComplaints = async () => {
      try {
        const res = await fetchAdminComplaints();
        if (isMounted) setComplaints(res.data || []);
      } catch (err) {
        console.error("Failed to load complaints:", err);
      }
    };

    loadComplaints();

    const ws = connectWebSocket({
      onAdminNotify: (newComplaint) => {
        if (isMounted) setComplaints((prev) => [newComplaint, ...prev]);
      },
    });

    return () => {
      isMounted = false;
      disconnectWebSocket(ws);
    };
  }, []);

  /* ===================== HELPERS ===================== */
  const handleFilterChange = (field, value) => {
    setFilters({ ...filters, [field]: value });
  };

  const countByStatus = (status) =>
    complaints.filter((c) => c.status === status).length;

  const categories = [
    ...new Set(complaints.map((c) => c.category).filter(Boolean)),
  ];

  const filteredComplaints = complaints.filter((c) => {
    const matchesSearch =
      c.title?.toLowerCase().includes(search.toLowerCase()) ||
      c.category?.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      filters.status === "All" || c.status === filters.status;
    const matchesPriority =
      filters.priority === "All" || c.priority === filters.priority;
    const matchesCategory =
      filters.category === "All" || c.category === filters.category;

    return matchesSearch && matchesStatus && matchesPriority && matchesCategory;
  });

  const summaryCounts = [
    { label: "Pending", value: countByStatus("PENDING"), color: "#f59e0b" },
    { label: "In Progress", value: countByStatus("IN_PROGRESS"), color: "#3b82f6" },
    { label: "Resolved", value: countByStatus("RESOLVED"), color: "#22c55e" },
    { label: "Escalated", value: countByStatus("ESCALATED"), color: "#ef4444" },
  ];

  /* ===================== UI ===================== */
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",

        /* 🟣 Premium admin gradient */
        background: `
          linear-gradient(
            135deg,
            #f7f5ff 0%,
            #f1efff 45%,
            #ede9fe 100%
          )
        `,
      }}
    >
      <AdminSidebar selected={selected} setSelected={setSelected} />

      <Box sx={{ flexGrow: 1 }}>
        {/* ================= APP BAR ================= */}
        <AppBar
  position="sticky"
  elevation={0}
  sx={{
    background: `
      linear-gradient(
        135deg,
        rgba(109,40,217,0.14),
        rgba(255,255,255,0.86)
      )
    `,
    color: "#1f2937",
    backdropFilter: "blur(14px)",
    borderBottom: "1px solid rgba(109,40,217,0.18)",
  }}
>
  <Toolbar
    sx={{
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    <Typography
      variant="h5"
      fontWeight={700}
      sx={{
        letterSpacing: "0.4px",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {selected}
    </Typography>

    <Typography
      variant="body2"
      sx={{
        color: "#6b7280",
        fontWeight: 500,
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      Administrative oversight & governance control
    </Typography>
  </Toolbar>
</AppBar>


        {/* ================= MAIN CONTENT ================= */}
        <Box
          sx={{
            p: 3,
            minHeight: "calc(100vh - 64px)",

            /* 🧵 Subtle texture */
            backgroundImage: `
              radial-gradient(
                circle at 20% 20%,
                rgba(108, 40, 217, 0.19),
                transparent 40%
              ),
              radial-gradient(
                circle at 80% 80%,
                rgba(77, 29, 149, 0.24),
                transparent 45%
              ),
              linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.09) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(0, 0, 0, 0.1) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "auto, auto, 28px 28px, 28px 28px",
          }}
        >
          {/* ================= DASHBOARD ================= */}
          {selected === "Dashboard" && (
            <>
              {/* Summary Cards */}
              <Box
                display="grid"
                gridTemplateColumns="repeat(auto-fit, minmax(220px, 1fr))"
                gap={2}
                mb={4}
              >
                {summaryCounts.map((card) => (
                  <AdminSummaryCards
                    key={card.label}
                    counts={[card]}
                  />
                ))}
              </Box>

              {/* Filters */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: "wrap",
                  mb: 3,
                  p: 2,
                  borderRadius: 3,
                  background: "rgba(255,255,255,0.9)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                }}
              >
                <TextField
                  placeholder="Search by title or category…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  size="small"
                  InputProps={{
                    startAdornment: <SearchIcon sx={{ mr: 1 }} />,
                  }}
                />

                <FormControl size="small">
                  <InputLabel>Status</InputLabel>
                  <Select
                    value={filters.status}
                    label="Status"
                    onChange={(e) =>
                      handleFilterChange("status", e.target.value)
                    }
                  >
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="PENDING">Pending</MenuItem>
                    <MenuItem value="IN_PROGRESS">In Progress</MenuItem>
                    <MenuItem value="RESOLVED">Resolved</MenuItem>
                    <MenuItem value="ESCALATED">Escalated</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              {/* Recent Complaints */}
              <Box
                sx={{
                  background: "rgba(255,255,255,0.95)",
                  borderRadius: 3,
                  p: 2,
                  boxShadow: "0 12px 32px rgba(0,0,0,0.10)",
                }}
              >
                <RecentComplaintsTable
                  complaints={filteredComplaints.slice(0, 5)}
                />
              </Box>
            </>
          )}

          {/* ================= ALL COMPLAINTS ================= */}
          {selected === "All Complaints" && (
            <Box
              sx={{
                background: "rgba(255,255,255,0.95)",
                borderRadius: 3,
                p: 2,
                boxShadow: "0 12px 32px rgba(0,0,0,0.10)",
              }}
            >
              <AllComplaints
                complaints={filteredComplaints}
                refresh={async () => {
                  const res = await fetchAdminComplaints();
                  setComplaints(res.data || []);
                }}
              />
            </Box>
          )}

          {/* ================= CREATE OFFICER ================= */}
          {selected === "Create Officer" && (
            <Box
              sx={{
                background: "rgba(255,255,255,0.95)",
                borderRadius: 3,
                p: 3,
                boxShadow: "0 12px 32px rgba(0,0,0,0.10)",
              }}
            >
              <CreateOfficerForm />
            </Box>
          )}

          {/* ================= ANALYTICS ================= */}
          {selected === "Analytics" && (
            <Box
              sx={{
                background: "rgba(255,255,255,0.95)",
                borderRadius: 3,
                p: 3,
                boxShadow: "0 12px 32px rgba(0,0,0,0.10)",
              }}
            >
              <AdminAnalytics />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
