import React, { useState } from "react";
import {
  Paper,
  Typography,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Button,
  Divider,
  CircularProgress,
  Box,
} from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MapSelector from "./MapSelector";

/* 🎨 Premium Purple Civic Palette */
const primaryColor = "#6d28d9";      // Royal purple
const primaryDark = "#4c1d95";       // Deep authority purple
const lavenderWash = "#f5f3ff";      // Soft paper tint
const borderSoft = "rgba(109, 40, 217, 0.18)";

const SubmitGrievance = ({ setComplaints }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    location: "",
    citizenName: "",
    citizenPhone: "",
    showCitizenInfoToAdmin: true,
  });

  const [coordinates, setCoordinates] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  /* ================= VALIDATION ================= */
  const validateForm = () => {
    let newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!coordinates) newErrors.location = "Please select location on map";
    if (!formData.category) newErrors.category = "Category required";
    if (!formData.description.trim()) newErrors.description = "Description required";
    if (!formData.citizenName.trim()) newErrors.citizenName = "Name required";
    if (!/^[0-9]{10}$/.test(formData.citizenPhone))
      newErrors.citizenPhone = "Invalid 10-digit phone";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async () => {
    if (!validateForm()) return;

    const tempComplaint = {
      id: "temp-" + Date.now(),
      title: formData.title,
      description: formData.description,
      category: formData.category,
      status: "PENDING",
      submissionDate: new Date().toISOString(),
      location: formData.location,
    };

    setComplaints((prev) => [tempComplaint, ...prev]);
    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      const fd = new FormData();

      Object.keys(formData).forEach((k) => fd.append(k, formData[k]));
      fd.append("latitude", coordinates.lat);
      fd.append("longitude", coordinates.lng);
      if (imageFile) fd.append("image", imageFile);

      const { data } = await axios.post(
        "http://localhost:8082/api/citizen/complaints/submit",
        fd,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setComplaints((prev) =>
        prev.map((c) => (c.id === tempComplaint.id ? data : c))
      );

      toast.success("Grievance submitted successfully", { autoClose: 1500 });
      handleCancel();
    } catch (err) {
      setComplaints((prev) => prev.filter((c) => c.id !== tempComplaint.id));
      toast.error("Failed to submit grievance");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      title: "",
      description: "",
      category: "",
      location: "",
      citizenName: "",
      citizenPhone: "",
      showCitizenInfoToAdmin: true,
    });
    setCoordinates(null);
    setImageFile(null);
    setErrors({});
  };

  return (
    <Paper
      sx={{
        p: 4,
        borderRadius: 4,
        maxWidth: 780,
        mx: "auto",

        /* 🧵 Purple paper texture */
        background: `
          linear-gradient(
            180deg,
            #ffffff,
            ${lavenderWash}
          )
        `,
        boxShadow: `
          0 28px 65px rgba(76,29,149,0.25),
          inset 0 1px 0 rgba(255,255,255,0.9)
        `,
        border: `1px solid ${borderSoft}`,
      }}
    >
      <ToastContainer />

      {/* ================= HEADER ================= */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          color: primaryColor,
          letterSpacing: "0.4px",
          mb: 1,
        }}
      >
        Submit New Grievance
      </Typography>

      <Typography
        variant="body2"
        sx={{ color: "#475569", mb: 3 }}
      >
        Responsible reporting empowers authorities and strengthens civic governance.
      </Typography>

      <Divider sx={{ mb: 3 }} />

      {/* ================= FORM ================= */}
      <TextField
        fullWidth
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        error={!!errors.title}
        helperText={errors.title}
        sx={{ mb: 2 }}
      />

      <Typography sx={{ mb: 1, fontWeight: 600, color: "#334155" }}>
        Select Location on Map
      </Typography>
      <MapSelector onLocationSelect={(latlng) => setCoordinates(latlng)} />

      {coordinates && (
        <Typography sx={{ mt: 1, color: "#475569", fontSize: "0.85rem" }}>
          Selected: {coordinates.lat.toFixed(6)}, {coordinates.lng.toFixed(6)}
        </Typography>
      )}
      {errors.location && (
        <Typography color="error" fontSize="0.85rem">
          {errors.location}
        </Typography>
      )}

      <TextField
        fullWidth
        label="Location (Optional)"
        name="location"
        value={formData.location}
        onChange={handleInputChange}
        sx={{ mb: 2, mt: 2 }}
      />

      <TextField
        select
        fullWidth
        label="Category"
        name="category"
        value={formData.category}
        onChange={handleInputChange}
        error={!!errors.category}
        helperText={errors.category}
        sx={{ mb: 2 }}
      >
        <MenuItem value="ELECTRICITY">Electricity</MenuItem>
        <MenuItem value="WATER">Water</MenuItem>
        <MenuItem value="ROADS">Roads</MenuItem>
        <MenuItem value="SANITATION">Sanitation</MenuItem>
        <MenuItem value="TRAFFIC">Traffic</MenuItem>
        <MenuItem value="OTHER">Other</MenuItem>
      </TextField>

      <TextField
        fullWidth
        multiline
        minRows={4}
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        error={!!errors.description}
        helperText={errors.description}
        sx={{ mb: 2 }}
      />

      <Typography sx={{ mb: 1, fontWeight: 600, color: "#334155" }}>
        Upload Image (Optional)
      </Typography>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImageFile(e.target.files[0])}
        style={{ marginBottom: 24 }}
      />

      <Divider sx={{ my: 3 }} />

      <TextField
        fullWidth
        label="Citizen Name"
        name="citizenName"
        value={formData.citizenName}
        onChange={handleInputChange}
        error={!!errors.citizenName}
        helperText={errors.citizenName}
        sx={{ mb: 2 }}
      />

      <TextField
        fullWidth
        label="Phone Number"
        name="citizenPhone"
        value={formData.citizenPhone}
        onChange={handleInputChange}
        error={!!errors.citizenPhone}
        helperText={errors.citizenPhone}
        sx={{ mb: 2 }}
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={formData.showCitizenInfoToAdmin}
            name="showCitizenInfoToAdmin"
            onChange={handleInputChange}
            sx={{ color: primaryColor }}
          />
        }
        label="Allow administrators to view my contact details"
        sx={{ mb: 3, color: "#334155" }}
      />

      {/* ================= ACTIONS ================= */}
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          fullWidth
          disabled={loading}
          onClick={handleSubmit}
          sx={{
            py: 1.2,
            fontWeight: 600,
            borderRadius: 2,
            color: "#ffffff",
            background: `linear-gradient(135deg, ${primaryColor}, ${primaryDark})`,
            "&:hover": {
              background: `linear-gradient(135deg, ${primaryDark}, ${primaryColor})`,
            },
          }}
        >
          {loading ? <CircularProgress size={22} color="inherit" /> : "Submit Grievance"}
        </Button>

        <Button
          fullWidth
          variant="outlined"
          color="error"
          onClick={handleCancel}
          disabled={loading}
          sx={{ borderRadius: 2 }}
        >
          Cancel
        </Button>
      </Box>
    </Paper>
  );
};

export default SubmitGrievance;
