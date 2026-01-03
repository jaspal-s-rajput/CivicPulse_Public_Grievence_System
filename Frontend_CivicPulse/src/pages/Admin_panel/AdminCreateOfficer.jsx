import React, { useState } from "react";
import { Box, Typography, TextField, Button, Snackbar, Alert } from "@mui/material";

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

      const res = await fetch("http://localhost:8081/api/admin/create-officer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(officerData),
      });

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

      // Backend returns JSON string message or plain text
      let data;
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = (await res.json()).message || "Officer created successfully! Check email.";
      } else {
        data = await res.text();
      }

      setSnackbarMsg(data);
      setSnackbarSeverity("success");
      setSnackbarOpen(true);

      // Clear form
      setOfficerData({
        name: "",
        email: "",
        password: "",
        phoneNo: "",
        department: "",
      });
    } catch (err) {
      console.error(err);
      setSnackbarMsg(err.message || "Admin authorization failed or server error");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 5,
        p: 3,
        bgcolor: "#f0f4f8",
        borderRadius: 2,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h6" fontWeight="bold" textAlign="center">
        Create Officer
      </Typography>

      <TextField
        label="Name"
        name="name"
        value={officerData.name}
        onChange={handleChange}
        size="small"
      />
      <TextField
        label="Email"
        name="email"
        value={officerData.email}
        onChange={handleChange}
        size="small"
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        value={officerData.password}
        onChange={handleChange}
        size="small"
      />
      <TextField
        label="Phone No"
        name="phoneNo"
        value={officerData.phoneNo}
        onChange={handleChange}
        size="small"
      />
      <TextField
        label="Department"
        name="department"
        value={officerData.department}
        onChange={handleChange}
        size="small"
      />

      <Button variant="contained" onClick={handleSubmit}>
        Create Officer
      </Button>

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
