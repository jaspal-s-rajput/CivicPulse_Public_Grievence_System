import React, { useState } from "react";
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Chip,
  Box,
  Modal,
} from "@mui/material";
import { statusColor, priorityColor } from "./helpers";

const RecentComplaintsTable = ({ complaints }) => {
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageClick = (url) => setPreviewImage(url);
  const handleClose = () => setPreviewImage(null);

  return (
    <>
      {/* ================= TABLE CONTAINER ================= */}
      <Paper
        elevation={0}
        sx={{
          mt: 2,
          p: 3,
          borderRadius: 4,
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
        }}
      >
        {/* ================= HEADER ================= */}
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontWeight: 700,
            color: "#3b0764",
            letterSpacing: "0.3px",
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          Recent Complaints
        </Typography>

        {/* ================= TABLE ================= */}
        <Table>
          <TableHead>
            <TableRow
              sx={{
                background:
                  "linear-gradient(135deg, rgba(109,40,217,0.12), rgba(255,255,255,0.6))",
              }}
            >
              {[
                "ID",
                "Title",
                "Category",
                "Status",
                "Priority",
                "Image",
                "Resolution Date",
              ].map((head) => (
                <TableCell
                  key={head}
                  sx={{
                    fontWeight: 700,
                    color: "#4c1d95",
                    fontFamily: "Arial, Helvetica, sans-serif",
                  }}
                >
                  {head}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {complaints.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  <Typography
                    sx={{
                      py: 4,
                      color: "#6b7280",
                      fontStyle: "italic",
                    }}
                  >
                    No complaints yet
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              complaints.map((c) => (
                <TableRow
                  key={c.id}
                  hover
                  sx={{
                    transition: "background 0.25s ease",
                    "&:hover": {
                      backgroundColor: "rgba(109,40,217,0.04)",
                    },
                  }}
                >
                  <TableCell>{c.id}</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>
                    {c.title}
                  </TableCell>
                  <TableCell>{c.category}</TableCell>

                  <TableCell>
                    <Chip
                      label={c.status}
                      color={statusColor(c.status)}
                      sx={{
                        fontWeight: 700,
                        textTransform: "uppercase",
                      }}
                    />
                  </TableCell>

                  <TableCell>
                    <Chip
                      label={c.priority}
                      color={priorityColor(c.priority)}
                      sx={{
                        fontWeight: 700,
                        textTransform: "uppercase",
                      }}
                    />
                  </TableCell>

                  <TableCell>
                    <Box
                      component="img"
                      src={
                        c.imageUrl
                          ? `http://localhost:8082${c.imageUrl}`
                          : "https://via.placeholder.com/60"
                      }
                      alt={c.title}
                      onClick={() =>
                        c.imageUrl &&
                        handleImageClick(
                          `http://localhost:8082${c.imageUrl}`
                        )
                      }
                      sx={{
                        width: 56,
                        height: 56,
                        objectFit: "cover",
                        borderRadius: 2,
                        cursor: c.imageUrl ? "pointer" : "default",
                        border: "1px solid rgba(0,0,0,0.12)",
                        transition:
                          "transform 0.25s ease, box-shadow 0.25s ease",
                        "&:hover": c.imageUrl
                          ? {
                              transform: "scale(1.05)",
                              boxShadow:
                                "0 8px 20px rgba(109,40,217,0.35)",
                            }
                          : {},
                      }}
                    />
                  </TableCell>

                  <TableCell>
                    {c.resolutionDate
                      ? new Date(c.resolutionDate).toLocaleDateString()
                      : "—"}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Paper>

      {/* ================= IMAGE PREVIEW MODAL ================= */}
      <Modal
        open={!!previewImage}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(6px)",
        }}
      >
        <Box
          component="img"
          src={previewImage}
          alt="Preview"
          sx={{
            maxHeight: "75%",
            maxWidth: "75%",
            borderRadius: 3,
            boxShadow: "0 30px 80px rgba(0,0,0,0.55)",
            border: "2px solid rgba(255,255,255,0.4)",
          }}
        />
      </Modal>
    </>
  );
};

export default RecentComplaintsTable;
