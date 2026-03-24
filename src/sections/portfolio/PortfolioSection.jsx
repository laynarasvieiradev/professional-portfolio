import { useMemo, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Chip,
  Box,
  Modal,
  IconButton,
  Button,
  Paper,
  useTheme,
  Fade,
  Rating,
  Divider,
  Stack,
  AppBar,
  Toolbar,
  ImageList,
  ImageListItem,
} from "@mui/material";
import {
  Close as CloseIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  OpenInNew as OpenInNewIcon,
  Build as BuildIcon,
  CalendarToday as CalendarIcon,
  Business as BusinessIcon,
} from "@mui/icons-material";
import { portfolioItems } from "./items"
import { getCategories, filterByCategory } from "./utils"
import PortfolioCard from "../../components/portfolio/PortfolioCard"
import CategoryFilter from "../../components/portfolio/PortfolioFilter"

// Componente do Modal de Detalhes
function PortfolioModal({ item, open, onClose }) {
  const theme = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % item.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + item.images.length) % item.images.length);
  };

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
              borderBottom: 1,
              borderColor: "divider",
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" component="h2">
              {item.title}
            </Typography>
            <IconButton onClick={onClose} size="small">
              <CloseIcon />
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
                  src={item.images[currentImageIndex]}
                  alt={`${item.title} - ${currentImageIndex + 1}`}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "500px",
                    objectFit: "contain",
                  }}
                />
                
                {item.images.length > 1 && (
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
              {item.images.length > 1 && (
                <ImageList
                  sx={{ width: "100%", height: "auto" }}
                  cols={Math.min(item.images.length, 6)}
                  gap={8}
                >
                  {item.images.map((img, idx) => (
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
                        src={img}
                        alt={`Miniatura ${idx + 1}`}
                        style={{ width: "100%", height: "auto", aspectRatio: "1/1", objectFit: "cover" }}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              )}
            </Box>

            {/* Informações do projeto */}
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <Typography variant="body1" paragraph>
                  {item.description}
                </Typography>
                
                <Divider sx={{ my: 2 }} />
                
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  Tecnologias Utilizadas
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                  {item.technologies.map((tech, idx) => (
                    <Chip
                      key={idx}
                      icon={<BuildIcon />}
                      label={tech}
                      variant="outlined"
                      size="medium"
                    />
                  ))}
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Paper variant="outlined" sx={{ p: 2 }}>
                  <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    Informações do Projeto
                  </Typography>
                  
                  <Stack spacing={1.5}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <BusinessIcon fontSize="small" color="action" />
                      <Typography variant="body2">
                        <strong>Cliente:</strong> {item.client}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <CalendarIcon fontSize="small" color="action" />
                      <Typography variant="body2">
                        <strong>Ano:</strong> {item.year}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Rating value={item.rating} readOnly precision={0.5} size="small" />
                    </Box>
                    
                    {item.link && (
                      <Button
                        variant="contained"
                        endIcon={<OpenInNewIcon />}
                        href={item.link}
                        target="_blank"
                        fullWidth
                        sx={{ mt: 2 }}
                      >
                        Ver Projeto Online
                      </Button>
                    )}
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Fade>
    </Modal>
  );
}

// Componente de Filtro por Categoria


// Componente Principal
export default function PortfolioGallery() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Extrair categorias únicas
  const categories = getCategories(portfolioItems);

  // Filtrar itens por categoria
  const filteredItems = useMemo(() => {
    return filterByCategory(portfolioItems, selectedCategory);
  }, [selectedCategory]);

  const handleOpenModal = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "grey.50" }}>
      {/* Header */}
      <AppBar position="relative" color="transparent" elevation={0} sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Toolbar sx={{ justifyContent: "center", py: 2 }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
              Meu Portfólio
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 600 }}>
              Explore meus projetos mais recentes. Cada projeto conta uma história única de desenvolvimento e inovação.
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Filtros */}
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Grid de projetos */}
        <Grid container spacing={3} sx={{ display: 'flex'}}>
          {filteredItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={item.id}>
              <PortfolioCard
                item={item}
                index={index}
                onClick={handleOpenModal}
              />
            </Grid>
          ))}
        </Grid>

        {/* Mensagem quando não há projetos */}
        {filteredItems.length === 0 && (
          <Box sx={{ textAlign: "center", py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              Nenhum projeto encontrado nesta categoria.
            </Typography>
          </Box>
        )}

        {/* Modal de detalhes */}
        {selectedItem && (
          <PortfolioModal
            item={selectedItem}
            open={!!selectedItem}
            onClose={handleCloseModal}
          />
        )}
      </Container>
    </Box>
  );
}