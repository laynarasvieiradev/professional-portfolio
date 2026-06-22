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
    <section id="projects" className="section">
      <Container>
        <Grid container spacing={0} sx={{ maxWidth: '1200px', margin: '0 auto', alignItems: 'center', height: '100%' }}>
          <Grid size={12}>
            <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom textAlign="center" sx={{ marginBottom: 4 }}>
              Meu Portfólio
            </Typography>
      
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </Grid>
          <Grid 
            container 
            spacing={2} 
            sx={{ display: 'flex', width: '100%'}}
          >
            {filteredItems.map((item, index) => (
              <Grid 
                item 
                size={{ xs: 12, sm: 4, md: 3 }} 
                key={item.id}
              >
                <PortfolioCard
                  item={item}
                  index={index}
                  onClick={handleOpenModal}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        {selectedItem && (
          <PortfolioModal
            item={selectedItem}
            open={!!selectedItem}
            onClose={handleCloseModal}
          />
        )}
      </Container>
    </section>
  );
}