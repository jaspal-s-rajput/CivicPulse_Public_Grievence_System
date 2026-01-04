import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Avatar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Snackbar,
  Alert,
  Divider,
} from "@mui/material";

const EditProfile = () => {
  /* ================= STATE ================= */
  const [user, setUser] = useState({
    name: "Jaspal",
    email: "jaspal@mail.com",
    gender: "male",
    phone: "7987495418",
    avatar: "",
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  /* ================= HANDLERS ================= */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setUser((prev) => ({ ...prev, avatar: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSnackbarMessage("Profile updated successfully!");
    setSnackbarSeverity("success");
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => setOpenSnackbar(false);

  /* ================= UI ================= */
  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 560,
          p: 4,
          borderRadius: 4,
          backdropFilter: "blur(14px)",
          background: `
            linear-gradient(
              135deg,
              rgba(255,255,255,0.95),
              rgba(245,243,255,0.9)
            )
          `,
          border: "1px solid rgba(109,40,217,0.18)",
          boxShadow: "0 30px 60px rgba(76,29,149,0.18)",
        }}
      >
        {/* ================= HEADER ================= */}
        <Typography
          variant="h5"
          fontWeight={700}
          sx={{
            mb: 1,
            color: "#3b0764",
            letterSpacing: "0.4px",
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          Profile Settings
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "#6b7280", mb: 3 }}
        >
          Keep your personal information accurate and up to date
        </Typography>

        <Divider sx={{ mb: 3 }} />

        {/* ================= FORM ================= */}
        <Box display="flex" flexDirection="column" gap={2.5}>
          {/* Avatar Section */}
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar
              src={user.avatar}
              alt={user.name}
              sx={{
                width: 88,
                height: 88,
                border: "3px solid rgba(109,40,217,0.35)",
                boxShadow: "0 10px 25px rgba(109,40,217,0.25)",
              }}
            />

            <Button
              variant="outlined"
              component="label"
              sx={{
                borderRadius: 3,
                textTransform: "none",
                fontWeight: 600,
                borderColor: "rgba(109,40,217,0.4)",
                color: "#4c1d95",
                "&:hover": {
                  borderColor: "#6d28d9",
                  backgroundColor: "rgba(109,40,217,0.06)",
                },
              }}
            >
              Change Photo
              <input
                hidden
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
              />
            </Button>
          </Box>

          <Divider />

          <TextField
            label="Full Name"
            name="name"
            value={user.name}
            onChange={handleChange}
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 3,
              },
            }}
          />

          <TextField
            label="Email Address"
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 3,
              },
            }}
          />

          <FormControl fullWidth>
            <InputLabel>Gender</InputLabel>
            <Select
              name="gender"
              value={user.gender}
              onChange={handleChange}
              label="Gender"
              sx={{
                borderRadius: 3,
              }}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Phone Number"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 3,
              },
            }}
          />

          {/* ================= ACTIONS ================= */}
          <Box display="flex" gap={2} mt={2}>
            <Button
              variant="contained"
              fullWidth
              onClick={handleSubmit}
              sx={{
                borderRadius: 3,
                py: 1.2,
                fontWeight: 700,
                textTransform: "none",
                background:
                  "linear-gradient(135deg, #6d28d9, #4c1d95)",
                boxShadow:
                  "0 12px 30px rgba(109,40,217,0.45)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #7c3aed, #5b21b6)",
                },
              }}
            >
              Save Changes
            </Button>

            <Button
              variant="outlined"
              fullWidth
              sx={{
                borderRadius: 3,
                py: 1.2,
                fontWeight: 600,
                textTransform: "none",
                color: "#6b7280",
                borderColor: "rgba(0,0,0,0.2)",
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.04)",
                },
              }}
              onClick={() => alert("Cancel clicked")}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Paper>

      {/* ================= SNACKBAR ================= */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default EditProfile;
