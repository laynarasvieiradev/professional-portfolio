import { Box, Chip, Divider, Fade, Grid, IconButton, ImageList, ImageListItem, Modal, Paper, Stack, Typography, useTheme } from "@mui/material";
import {
  Close as CloseIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  OpenInNew as OpenInNewIcon,
  Build as BuildIcon,
  CalendarToday as CalendarIcon,
  Business as BusinessIcon,
} from "@mui/icons-material";
import { useState } from "react";
import getImageUrl from "./imageUrl";

export default function PortfolioModal({ selectedItem, open, onClose }) {
  const theme = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % selectedItem.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + selectedItem.images.length) % selectedItem.images.length)
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Fade in={open}>
        <Paper
          sx={{
            position: "relative",
            maxWidth: 1200,
            width: "100%",
            maxHeight: "90vh",
            overflow: "auto",
            bgcolor: "background.paper",
            borderRadius: 2,
            outline: "none",
          }}
        >
          {/* Header com botão fechar */}
          <Box
            sx={{
              position: "sticky",
              top: 0,
              zIndex: 10,
              bgcolor: "background.paper",
              paddingInline: 3,
              paddingBlock: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" component="h2">
              {selectedItem.title} - {selectedItem.year}
            </Typography>
            <IconButton onClick={onClose} size="small">
              <CloseIcon color="primary"/>
            </IconButton>
          </Box>

          {/* Conteúdo */}
          <Box sx={{ p: { xs: 2, md: 3 } }}>
            {/* Galeria de imagens */}
            <Box sx={{ mb: 3 }}>
              <Box
                sx={{
                  position: "relative",
                  bgcolor: "black",
                  borderRadius: 1,
                  overflow: "hidden",
                  mb: 2,
                }}
              >
                <img
                  src={getImageUrl(selectedItem.images[currentImageIndex])}
                  alt={`${selectedItem.title} - ${currentImageIndex + 1}`}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "500px",
                    objectFit: "contain",
                  }}
                  loading="lazy"
                  decoding="async"
                />
                
                {selectedItem.images.length > 1 && (
                  <>
                    <IconButton
                      onClick={prevImage}
                      sx={{
                        position: "absolute",
                        left: 8,
                        top: "50%",
                        transform: "translateY(-50%)",
                        bgcolor: "rgba(0,0,0,0.5)",
                        color: "white",
                        "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
                      }}
                    >
                      <ChevronLeftIcon />
                    </IconButton>
                    <IconButton
                      onClick={nextImage}
                      sx={{
                        position: "absolute",
                        right: 8,
                        top: "50%",
                        transform: "translateY(-50%)",
                        bgcolor: "rgba(0,0,0,0.5)",
                        color: "white",
                        "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
                      }}
                    >
                      <ChevronRightIcon />
                    </IconButton>
                  </>
                )}
              </Box>

              {/* Miniaturas */}
              {selectedItem.images.length > 1 && (
                <ImageList
                  sx={{ width: "100%", height: "auto" }}
                  cols={6}
                  gap={8}
                >
                  {selectedItem.images.map((img, idx) => (
                    <ImageListItem
                      key={idx}
                      sx={{
                        cursor: "pointer",
                        border: idx === currentImageIndex ? `2px solid ${theme.palette.primary.main}` : "2px solid transparent",
                        borderRadius: 1,
                        overflow: "hidden",
                      }}
                      onClick={() => setCurrentImageIndex(idx)}
                    >
                      <img
                        src={getImageUrl(img)}
                        alt={`Miniatura ${idx + 1}`}
                        style={{ width: "100%", height: "auto", aspectRatio: "1/1", objectFit: "cover" }}
                        loading="lazy"
                        decoding="async"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              )}
            </Box>

            {/* Informações do projeto */}
            <Grid container spacing={3}>
              <Grid xs={12} md={8}>
                <Typography variant="body1">
                  {selectedItem.description}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Fade>
    </Modal>
  );
}