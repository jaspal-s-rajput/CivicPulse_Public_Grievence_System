import React, { useEffect, useState, useMemo } from "react";
import {
  Paper,
  Grid,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";
import axios from "axios";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip as RechartsTooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Tooltip as LeafletTooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

/* 🎨 Premium Purple Civic Palette */
const COLORS = [
  "#6d28d9",
  "#7c3aed",
  "#8b5cf6",
  "#a78bfa",
  "#c4b5fd",
  "#ddd6fe",
];

const AdminAnalytics = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");
  const axiosConfig = useMemo(
    () => ({ headers: { Authorization: `Bearer ${token}` } }),
    [token]
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8082/api/admin/complaints",
          axiosConfig
        );
        setComplaints(res.data);
      } catch (err) {
        console.error(err);
        alert("Failed to fetch complaints");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [axiosConfig]);

  /* ================= DATA TRANSFORMS ================= */

  const categoryData = useMemo(() => {
    const counts = complaints.reduce((acc, c) => {
      const cat = c.category || "Unknown";
      acc[cat] = (acc[cat] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(counts).map(([key, val]) => ({
      name: key,
      value: val,
    }));
  }, [complaints]);

  const statusData = useMemo(() => {
    const counts = complaints.reduce((acc, c) => {
      const status = c.status || "Unknown";
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(counts).map(([key, val]) => ({
      name: key,
      value: val,
    }));
  }, [complaints]);

  const slaData = useMemo(() => {
    const deptMap = {};
    complaints.forEach((c) => {
      const dept = c.assignedOfficer?.department || "Unknown";
      if (!deptMap[dept]) deptMap[dept] = { totalTime: 0, count: 0 };
      if (c.assignedDate && c.resolutionDate) {
        const diffHours =
          (new Date(c.resolutionDate) - new Date(c.assignedDate)) /
          (1000 * 60 * 60);
        deptMap[dept].totalTime += diffHours;
        deptMap[dept].count += 1;
      }
    });
    return Object.keys(deptMap).map((dept) => ({
      department: dept,
      avgResolutionTime: deptMap[dept].count
        ? (deptMap[dept].totalTime / deptMap[dept].count).toFixed(2)
        : 0,
    }));
  }, [complaints]);

  const heatmapData = useMemo(() => {
    return complaints
      .filter((c) => c.latitude && c.longitude)
      .map((c) => ({
        lat: c.latitude,
        lng: c.longitude,
        title: c.title,
      }));
  }, [complaints]);

  if (loading)
    return (
      <CircularProgress
        sx={{ display: "block", margin: "80px auto", color: "#6d28d9" }}
      />
    );

  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        minHeight: "100vh",

        /* 🧵 Premium background texture */
        background: `
          linear-gradient(135deg, #f5f3ff, #ede9fe),
          radial-gradient(circle at 20% 20%, rgba(109,40,217,0.10), transparent 45%),
          radial-gradient(circle at 80% 80%, rgba(124,58,237,0.08), transparent 50%)
        `,
      }}
    >
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight={700}
        mb={1}
        sx={{ letterSpacing: "0.4px" }}
      >
        Admin Analytics Dashboard
      </Typography>

      <Typography
        variant="body2"
        textAlign="center"
        color="#6b7280"
        mb={5}
      >
        Data-driven insights for governance, accountability, and performance
      </Typography>

      <Grid container spacing={4}>
        {/* ===== Category Pie ===== */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              height: "100%",
              background: "rgba(255,255,255,0.95)",
              boxShadow: "0 18px 40px rgba(76,29,149,0.18)",
            }}
          >
            <Typography variant="h6" mb={2} fontWeight={600}>
              Complaints by Category
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius="78%"
                  label
                >
                  {categoryData.map((_, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend verticalAlign="bottom" />
                <RechartsTooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* ===== Status Pie ===== */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              height: "100%",
              background: "rgba(255,255,255,0.95)",
              boxShadow: "0 18px 40px rgba(76,29,149,0.18)",
            }}
          >
            <Typography variant="h6" mb={2} fontWeight={600}>
              Complaints by Status
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={statusData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius="78%"
                  label
                >
                  {statusData.map((_, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend verticalAlign="bottom" />
                <RechartsTooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* ===== SLA BAR ===== */}
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              background: "rgba(255,255,255,0.95)",
              boxShadow: "0 18px 40px rgba(76,29,149,0.18)",
            }}
          >
            <Typography variant="h6" mb={2} fontWeight={600}>
              Avg Resolution Time by Department (Hours)
            </Typography>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={slaData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="department" />
                <YAxis />
                <RechartsTooltip />
                <Bar dataKey="avgResolutionTime" radius={[6, 6, 0, 0]}>
                  {slaData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={
                        entry.avgResolutionTime < 12
                          ? "#22c55e"
                          : entry.avgResolutionTime < 24
                          ? "#f59e0b"
                          : "#ef4444"
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* ===== HEATMAP ===== */}
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              background: "rgba(255,255,255,0.95)",
              boxShadow: "0 18px 40px rgba(76,29,149,0.18)",
            }}
          >
            <Typography variant="h6" mb={2} fontWeight={600}>
              Complaints Heatmap
            </Typography>
            <Box
              sx={{
                height: 450,
                borderRadius: 2,
                overflow: "hidden",
                border: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              <MapContainer
                center={[20.5937, 78.9629]}
                zoom={5}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {heatmapData.map((point, idx) => (
                  <CircleMarker
                    key={idx}
                    center={[point.lat, point.lng]}
                    radius={7}
                    color="#6d28d9"
                    fillOpacity={0.55}
                  >
                    <LeafletTooltip>
                      <Typography fontSize="0.8rem">
                        {point.title}
                      </Typography>
                    </LeafletTooltip>
                  </CircleMarker>
                ))}
              </MapContainer>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminAnalytics;
