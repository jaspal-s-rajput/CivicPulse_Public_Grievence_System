import React, { useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
  CardActions,
  Button,
  Modal,
  LinearProgress,
} from "@mui/material";
import { statusColor, priorityColor } from "./helpers";

/* ================= STATUS → PROGRESS ================= */
const getProgressByStatus = (status) => {
  switch (status) {
    case "PENDING":
      return 0;
    case "ASSIGNED":
      return 15;
    case "IN_PROGRESS":
      return 55;
    case "ESCALATED":
      return 80;
    case "RESOLVED":
      return 100;
    default:
      return 0;
  }
};

const AllComplaintsCards = ({ complaints, handleViewDetails }) => {
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageClick = (url) => setPreviewImage(url);
  const handleClose = () => setPreviewImage(null);

  return (
    <>
      <Grid container spacing={3}>
        {complaints.length === 0 && (
          <Typography
            sx={{
              mt: 4,
              mx: 2,
              fontStyle: "italic",
              color: "#6b7280",
            }}
          >
            No complaints yet
          </Typography>
        )}

        {complaints.map((c) => {
          const isResolved = c.status === "RESOLVED";
          const progress = getProgressByStatus(c.status);

          return (
            <Grid item xs={12} sm={6} md={4} key={c.id}>
              <Card
                elevation={0}
                sx={{
                  borderRadius: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  backdropFilter: "blur(14px)",
                  background: `
                    linear-gradient(
                      135deg,
                      rgba(255,255,255,0.96),
                      rgba(245,243,255,0.92)
                    )
                  `,
                  border: "1px solid rgba(109,40,217,0.18)",
                  boxShadow: "0 25px 60px rgba(76,29,149,0.18)",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 35px 80px rgba(76,29,149,0.28)",
                  },
                }}
              >
                {/* ================= HIGH PRIORITY RIBBON ================= */}
                {c.priority === "HIGH" && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 20,
                      right: -52,
                      transform: "rotate(45deg)",
                      background:
                        "linear-gradient(135deg, #dc2626, #991b1b)",
                      color: "white",
                      px: 4,
                      py: 0.8,
                      fontWeight: 800,
                      fontSize: 12,
                      zIndex: 3,
                      letterSpacing: "0.08em",
                      boxShadow:
                        "0 8px 20px rgba(220,38,38,0.6)",
                    }}
                  >
                    HIGH PRIORITY
                  </Box>
                )}

                {/* ================= IMAGE ================= */}
                <CardMedia
                  component="img"
                  height="200"
                  image={
                    c.imageUrl
                      ? `http://localhost:8082${c.imageUrl}`
                      : "https://via.placeholder.com/400x200"
                  }
                  onError={(e) =>
                    (e.target.src = "https://via.placeholder.com/400x200")
                  }
                  onClick={() =>
                    c.imageUrl &&
                    handleImageClick(`http://localhost:8082${c.imageUrl}`)
                  }
                  sx={{
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    cursor: c.imageUrl ? "pointer" : "default",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: c.imageUrl ? "scale(1.03)" : "none",
                    },
                  }}
                />

                {/* ================= CONTENT ================= */}
                <CardContent sx={{ flexGrow: 1 }}>
                  {/* CHIPS */}
                  <Box display="flex" gap={1} flexWrap="wrap" mb={1.5}>
                    <Chip
                      label={c.category}
                      size="small"
                      sx={{
                        fontWeight: 600,
                        bgcolor: "rgba(109,40,217,0.1)",
                        color: "#4c1d95",
                      }}
                    />
                    <Chip
                      label={c.status}
                      size="small"
                      color={statusColor(c.status)}
                      sx={{ fontWeight: 700 }}
                    />
                    <Chip
                      label={c.priority}
                      size="small"
                      color={priorityColor(c.priority)}
                      sx={{ fontWeight: 700 }}
                    />
                  </Box>

                  {/* TITLE */}
                  <Typography
                    fontWeight={700}
                    variant="h6"
                    sx={{
                      mb: 0.5,
                      color: "#3b0764",
                      fontFamily: "Arial, Helvetica, sans-serif",
                    }}
                  >
                    #{c.id} {c.title}
                  </Typography>

                  {/* RESOLUTION INFO */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: isResolved ? "#166534" : "#6b7280",
                      mb: 2,
                    }}
                  >
                    {isResolved
                      ? `Resolved on ${
                          c.resolutionDate
                            ? new Date(c.resolutionDate).toLocaleDateString()
                            : "-"
                        }`
                      : "Pending resolution"}
                  </Typography>

                  {/* PROGRESS */}
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{ color: "#6b7280", fontWeight: 600 }}
                    >
                      Progress: {progress}%
                    </Typography>

                    <LinearProgress
                      variant="determinate"
                      value={progress}
                      sx={{
                        height: 8,
                        borderRadius: 6,
                        mt: 0.6,
                        backgroundColor: "rgba(0,0,0,0.08)",
                        "& .MuiLinearProgress-bar": {
                          borderRadius: 6,
                          background:
                            c.status === "RESOLVED"
                              ? "linear-gradient(135deg, #16a34a, #166534)"
                              : c.status === "ESCALATED"
                              ? "linear-gradient(135deg, #f59e0b, #d97706)"
                              : "linear-gradient(135deg, #6d28d9, #4c1d95)",
                        },
                      }}
                    />
                  </Box>
                </CardContent>

                {/* ================= ACTION ================= */}
                <CardActions sx={{ px: 2, pb: 2 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    disabled={isResolved}
                    onClick={() => !isResolved && handleViewDetails(c)}
                    sx={{
                      borderRadius: 3,
                      py: 1,
                      fontWeight: 700,
                      textTransform: "none",
                      background: isResolved
                        ? "linear-gradient(135deg, #9ca3af, #6b7280)"
                        : "linear-gradient(135deg, #6d28d9, #4c1d95)",
                      boxShadow: isResolved
                        ? "none"
                        : "0 10px 25px rgba(109,40,217,0.45)",
                      "&:hover": {
                        background: isResolved
                          ? "linear-gradient(135deg, #9ca3af, #6b7280)"
                          : "linear-gradient(135deg, #7c3aed, #5b21b6)",
                      },
                    }}
                  >
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      {/* ================= IMAGE PREVIEW MODAL ================= */}
      <Modal
        open={!!previewImage}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(6px)",
          p: 2,
        }}
      >
        <Box
          component="img"
          src={previewImage}
          alt="Preview"
          sx={{
            maxHeight: "70%",
            maxWidth: "70%",
            borderRadius: 3,
            boxShadow: "0 35px 90px rgba(0,0,0,0.6)",
            border: "2px solid rgba(255,255,255,0.4)",
          }}
        />
      </Modal>
    </>
  );
};

export default AllComplaintsCards;
