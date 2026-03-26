import { Box, Chip } from "@mui/material"

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <Box sx={{ mb: 4, display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center" }}>
      <Chip
        label="Todos"
        onClick={() => onSelectCategory("all")}
        color={selectedCategory === "all" ? "accent" : "default"}
        variant={selectedCategory === "all" ? "filled" : "outlined"}
        sx={{ fontWeight: "medium" }}
      />
      {categories.map((category) => (
        <Chip
          key={category}
          label={category}
          onClick={() => onSelectCategory(category)}
          color={selectedCategory === category ? "accent" : "default"}
          variant={selectedCategory === category ? "filled" : "outlined"}
          sx={{ fontWeight: "medium" }}
        />
      ))}
    </Box>
  );
}