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
import axios from "axios";

import Sidebar from "./Sidebar";
import SummaryCards from "./SummaryCards";
import RecentComplaintsTable from "./RecentComplaintsTable";
import AllComplaintsCards from "./AllComplaintsCards";
import UpdateGrievanceModal from "./UpdateGrievanceModal";
import EditProfile from "./ProfileDetaills";

const OfficerDashboard = () => {
  const [selected, setSelected] = useState("Dashboard");
  const [complaints, setComplaints] = useState([]);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [filters, setFilters] = useState({
    status: "All",
    priority: "All",
    category: "All",
  });

  /* ================= FETCH ================= */
  useEffect(() => {
    const fetchComplaints = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        "http://localhost:8082/api/officer/complaints",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setComplaints(res.data);
    };
    fetchComplaints();
  }, []);

  const handleViewDetails = (complaint) => {
    setSelectedComplaint(complaint);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedComplaint(null);
  };

  const countByStatus = (status) =>
    complaints.filter((c) => c.status === status).length;

  const categories = [...new Set(complaints.map((c) => c.category))];

  const handleFilterChange = (field, value) => {
    setFilters({ ...filters, [field]: value });
  };

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
    { label: "Escalated", value: countByStatus("ESCALATED"), color: "#ef4444" },
    { label: "In Progress", value: countByStatus("IN_PROGRESS"), color: "#3b82f6" },
    { label: "Resolved", value: countByStatus("RESOLVED"), color: "#22c55e" },
  ];

  /* ================= UI ================= */
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",

        /* 🧵 BOXED TEXTURE BACKGROUND */
        background: `
          linear-gradient(135deg, #f5f3ff, #ede9fe),
          linear-gradient(
            0deg,
            rgba(108, 40, 217, 0.22) 1px,
            transparent 1px
          ),
          linear-gradient(
            90deg,
            rgba(108, 40, 217, 0.2) 1px,
            transparent 1px
          )
        `,
        backgroundSize: "auto, 28px 28px, 28px 28px",
      }}
    >
      {/* Sidebar */}
      <Sidebar selected={selected} setSelected={setSelected} />

      {/* Main */}
      <Box sx={{ flexGrow: 1 }}>
        {/* AppBar */}
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
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h5"
              fontWeight={700}
              sx={{ letterSpacing: "0.4px" }}
            >
              {selected}
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: "#6b7280", fontWeight: 500 }}
            >
              Responsible action drives effective governance
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Content */}
        <Box
          sx={{
            p: 3,
            minHeight: "calc(100vh - 64px)",
          }}
        >
          {/* Dashboard */}
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
                  <SummaryCards key={card.label} counts={[card]} />
                ))}
              </Box>

              {/* Filters */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: "wrap",
                  alignItems: "center",
                  mb: 3,
                  p: 2,
                  borderRadius: 3,
                  background: "rgba(255,255,255,0.92)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                }}
              >
                <TextField
                  placeholder="Search by title or category…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  InputProps={{ startAdornment: <SearchIcon sx={{ mr: 1 }} /> }}
                  sx={{ flex: 2, minWidth: 250 }}
                />

                <FormControl size="small" sx={{ minWidth: 150 }}>
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

                <FormControl size="small" sx={{ minWidth: 150 }}>
                  <InputLabel>Priority</InputLabel>
                  <Select
                    value={filters.priority}
                    label="Priority"
                    onChange={(e) =>
                      handleFilterChange("priority", e.target.value)
                    }
                  >
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="LOW">Low</MenuItem>
                    <MenuItem value="MEDIUM">Medium</MenuItem>
                    <MenuItem value="HIGH">High</MenuItem>
                  </Select>
                </FormControl>

                <FormControl size="small" sx={{ minWidth: 150 }}>
                  <InputLabel>Category</InputLabel>
                  <Select
                    value={filters.category}
                    label="Category"
                    onChange={(e) =>
                      handleFilterChange("category", e.target.value)
                    }
                  >
                    <MenuItem value="All">All</MenuItem>
                    {categories.map((cat) => (
                      <MenuItem key={cat} value={cat}>
                        {cat}
                      </MenuItem>
                    ))}
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

          {/* All Complaints */}
          {selected === "All Complaints" && (
            <AllComplaintsCards
              complaints={complaints}
              handleViewDetails={handleViewDetails}
            />
          )}

          {/* Profile */}
          {selected === "Profile" && <EditProfile />}

          {/* Modal */}
          {selectedComplaint && (
            <UpdateGrievanceModal
              open={modalOpen}
              onClose={handleModalClose}
              grievance={selectedComplaint}
              onSubmit={async () => {
                const token = localStorage.getItem("token");
                const res = await axios.get(
                  "http://localhost:8082/api/officer/complaints",
                  { headers: { Authorization: `Bearer ${token}` } }
                );
                setComplaints(res.data);
              }}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default OfficerDashboard;
