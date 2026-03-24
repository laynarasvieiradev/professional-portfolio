import { useMemo, useState } from "react";
import { Container, Grid, Typography, Box, AppBar, Toolbar } from "@mui/material"
import { portfolioItems } from "./items"
import { getCategories, filterByCategory } from "./utils"
import PortfolioCard from "../../components/portfolio/PortfolioCard"
import CategoryFilter from "../../components/portfolio/PortfolioFilter"
import PortfolioModal from "../../components/portfolio/PotfolioModal"

export default function PortfolioSection() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = getCategories(portfolioItems);

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
      <AppBar position="relative" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: "center", py: 2 }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
              Meu Portfólio
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