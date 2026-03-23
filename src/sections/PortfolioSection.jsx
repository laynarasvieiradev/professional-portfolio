import { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Box,
  Modal,
  IconButton,
  Button,
  Paper,
  useMediaQuery,
  useTheme,
  Fade,
  Grow,
  Rating,
  Divider,
  Stack,
  AppBar,
  Toolbar,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Skeleton,
} from "@mui/material";
import {
  Close as CloseIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  OpenInNew as OpenInNewIcon,
  Build as BuildIcon,
  CalendarToday as CalendarIcon,
  Business as BusinessIcon,
  ZoomIn as ZoomInIcon,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

// Dados de exemplo do portfólio
const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Platform",
    coverImage: "https://picsum.photos/id/1/800/600",
    description: "Plataforma completa de e-commerce com carrinho, checkout e integração com Stripe. Sistema de gestão de estoque em tempo real e painel administrativo.",
    technologies: ["React", "Node.js", "Stripe", "Tailwind", "MongoDB"],
    images: [
      "https://picsum.photos/id/1/800/600",
      "https://picsum.photos/id/2/800/600",
      "https://picsum.photos/id/3/800/600",
      "https://picsum.photos/id/4/800/600",
      "https://picsum.photos/id/5/800/600",
    ],
    client: "TechStore Inc",
    year: "2024",
    link: "https://exemplo.com",
    category: "E-commerce",
    rating: 5,
  },
  {
    id: 2,
    title: "Delivery App",
    coverImage: "https://picsum.photos/id/2/800/600",
    description: "Aplicativo de delivery com rastreamento em tempo real, avaliação de entregadores e sistema de pagamentos integrado.",
    technologies: ["React Native", "Firebase", "Google Maps", "Node.js"],
    images: [
      "https://picsum.photos/id/6/800/600",
      "https://picsum.photos/id/7/800/600",
      "https://picsum.photos/id/8/800/600",
    ],
    client: "Food Delivery Co",
    year: "2024",
    link: "https://exemplo.com",
    category: "Mobile",
    rating: 4,
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    coverImage: "https://picsum.photos/id/3/800/600",
    description: "Dashboard interativo com gráficos em tempo real, exportação de relatórios e sistema de alertas personalizáveis.",
    technologies: ["Next.js", "Chart.js", "Prisma", "PostgreSQL", "Tailwind"],
    images: [
      "https://picsum.photos/id/9/800/600",
      "https://picsum.photos/id/10/800/600",
      "https://picsum.photos/id/11/800/600",
    ],
    client: "Data Analytics Corp",
    year: "2023",
    link: "https://exemplo.com",
    category: "Dashboard",
    rating: 5,
  },
  {
    id: 4,
    title: "Landing Page",
    coverImage: "https://picsum.photos/id/4/800/600",
    description: "Landing page moderna com animações, formulário de captura e integração com Mailchimp.",
    technologies: ["Vue.js", "GSAP", "Tailwind", "Mailchimp API"],
    images: [
      "https://picsum.photos/id/12/800/600",
      "https://picsum.photos/id/13/800/600",
      "https://picsum.photos/id/14/800/600",
    ],
    client: "Creative Agency",
    year: "2024",
    link: "https://exemplo.com",
    category: "Marketing",
    rating: 4,
  },
  {
    id: 5,
    title: "ERP System",
    coverImage: "https://picsum.photos/id/5/800/600",
    description: "Sistema ERP completo para gestão de estoque, vendas, funcionários e relatórios financeiros.",
    technologies: ["Angular", "Django", "Docker", "Redis", "PostgreSQL"],
    images: [
      "https://picsum.photos/id/15/800/600",
      "https://picsum.photos/id/16/800/600",
      "https://picsum.photos/id/17/800/600",
    ],
    client: "Logistics Brasil",
    year: "2023",
    link: "https://exemplo.com",
    category: "Enterprise",
    rating: 5,
  },
  {
    id: 6,
    title: "Finance App",
    coverImage: "https://picsum.photos/id/6/800/600",
    description: "Aplicativo para controle financeiro pessoal com categorização automática, gráficos e metas de economia.",
    technologies: ["Flutter", "Node.js", "MongoDB", "Express"],
    images: [
      "https://picsum.photos/id/18/800/600",
      "https://picsum.photos/id/19/800/600",
      "https://picsum.photos/id/20/800/600",
    ],
    client: "Fintech Startup",
    year: "2024",
    link: "https://exemplo.com",
    category: "Finance",
    rating: 4,
  },
];

// Componente do Card Individual
function PortfolioCard({ item, onClick, index }) {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          cursor: "pointer",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: theme.shadows[10],
          },
        }}
        onClick={() => onClick(item)}
      >
        <Box sx={{ position: "relative", overflow: "hidden" }}>
          <CardMedia
            component="img"
            height="240"
            image={item.coverImage}
            alt={item.title}
            sx={{
              transition: "transform 0.5s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              bgcolor: "rgba(0,0,0,0.7)",
              borderRadius: "20px",
              px: 1.5,
              py: 0.5,
            }}
          >
            <Typography variant="caption" sx={{ color: "white" }}>
              {item.category}
            </Typography>
          </Box>
        </Box>

        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="h3" gutterBottom fontWeight="bold">
            {item.title}
          </Typography>
          
          <Stack direction="row" spacing={0.5} sx={{ mb: 1.5 }}>
            <Rating value={item.rating} size="small" readOnly precision={0.5} />
          </Stack>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: 60 }}>
            {item.description.substring(0, 100)}...
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {item.technologies.slice(0, 3).map((tech, idx) => (
              <Chip
                key={idx}
                label={tech}
                size="small"
                variant="outlined"
                sx={{ fontSize: "0.7rem" }}
              />
            ))}
            {item.technologies.length > 3 && (
              <Chip
                label={`+${item.technologies.length - 3}`}
                size="small"
                variant="outlined"
                sx={{ fontSize: "0.7rem" }}
              />
            )}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Componente do Modal de Detalhes
function PortfolioModal({ item, open, onClose }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
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
function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <Box sx={{ mb: 4, display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center" }}>
      <Chip
        label="Todos"
        onClick={() => onSelectCategory("all")}
        color={selectedCategory === "all" ? "primary" : "default"}
        variant={selectedCategory === "all" ? "filled" : "outlined"}
        sx={{ fontWeight: "medium" }}
      />
      {categories.map((category) => (
        <Chip
          key={category}
          label={category}
          onClick={() => onSelectCategory(category)}
          color={selectedCategory === category ? "primary" : "default"}
          variant={selectedCategory === category ? "filled" : "outlined"}
          sx={{ fontWeight: "medium" }}
        />
      ))}
    </Box>
  );
}

// Componente Principal
export default function PortfolioGallery() {
  const theme = useTheme();
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(false);

  // Extrair categorias únicas
  const categories = [...new Set(portfolioItems.map((item) => item.category))];

  // Filtrar itens por categoria
  const filteredItems =
    selectedCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

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