import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
  Divider,
} from "@mui/material";

/* 🎨 Admin Authority Palette */
const primaryPurple = "#6d28d9";
const deepPurple = "#4c1d95";
const softLavender = "#f5f3ff";

const AdminCreateOfficer = () => {
  const [officerData, setOfficerData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNo: "",
    department: "",
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleChange = (e) => {
    setOfficerData({ ...officerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setSnackbarMsg("You are not logged in as Admin");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
        return;
      }

      const res = await fetch(
        "http://localhost:8082/api/admin/create-officer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(officerData),
        }
      );

      if (!res.ok) {
        let errorMsg;
        const contentType = res.headers.get("content-type");

        if (contentType && contentType.includes("application/json")) {
          const data = await res.json();
          errorMsg = data.message || JSON.stringify(data);
        } else {
          errorMsg = await res.text();
        }

        throw new Error(errorMsg || "Failed to create officer");
      }

      let data;
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data =
          (await res.json()).message ||
          "Officer created successfully! Check email.";
      } else {
        data = await res.text();
      }

      setSnackbarMsg(data);
      setSnackbarSeverity("success");
      setSnackbarOpen(true);

      setOfficerData({
        name: "",
        email: "",
        password: "",
        phoneNo: "",
        department: "",
      });
    } catch (err) {
      console.error(err);
      setSnackbarMsg(err.message || "Admin authorization failed");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 460,
        mx: "auto",
        mt: 6,
        p: 4,
        borderRadius: 4,

        /* 🧊 Glass + Paper */
        background: `
          linear-gradient(180deg, #ffffff, ${softLavender})
        `,
        boxShadow: `
          0 30px 65px rgba(76,29,149,0.30),
          inset 0 1px 0 rgba(255,255,255,0.9)
        `,
        border: "1px solid rgba(109,40,217,0.18)",
        display: "flex",
        flexDirection: "column",
        gap: 2.2,
      }}
    >
      {/* ================= HEADER ================= */}
      <Typography
        variant="h6"
        textAlign="center"
        fontWeight={700}
        sx={{
          color: primaryPurple,
          letterSpacing: "0.4px",
        }}
      >
        Create New Officer
      </Typography>

      <Typography
        variant="body2"
        textAlign="center"
        sx={{ color: "#6b7280", mb: 1 }}
      >
        Assign authorized officers to manage and resolve civic complaints
      </Typography>

      <Divider sx={{ mb: 1 }} />

      {/* ================= FORM ================= */}
      <TextField
        label="Officer Name"
        name="name"
        value={officerData.name}
        onChange={handleChange}
        size="small"
        fullWidth
      />

      <TextField
        label="Official Email"
        name="email"
        value={officerData.email}
        onChange={handleChange}
        size="small"
        fullWidth
      />

      <TextField
        label="Temporary Password"
        name="password"
        type="password"
        value={officerData.password}
        onChange={handleChange}
        size="small"
        fullWidth
      />

      <TextField
        label="Phone Number"
        name="phoneNo"
        value={officerData.phoneNo}
        onChange={handleChange}
        size="small"
        fullWidth
      />

      <TextField
        label="Department"
        name="department"
        value={officerData.department}
        onChange={handleChange}
        size="small"
        fullWidth
      />

      {/* ================= ACTION ================= */}
      <Button
        onClick={handleSubmit}
        sx={{
          mt: 1,
          py: 1.2,
          fontWeight: 600,
          borderRadius: 2,
          color: "#fff",
          background: `linear-gradient(135deg, ${primaryPurple}, ${deepPurple})`,
          "&:hover": {
            background: `linear-gradient(135deg, ${deepPurple}, ${primaryPurple})`,
          },
        }}
      >
        Create Officer
      </Button>

      {/* ================= SNACKBAR ================= */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          severity={snackbarSeverity}
          onClose={() => setSnackbarOpen(false)}
          sx={{ width: "100%" }}
        >
          {snackbarMsg}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AdminCreateOfficer;
