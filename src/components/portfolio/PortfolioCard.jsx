import { useTheme } from "@mui/material"
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import { motion } from "framer-motion"

export default function PortfolioCard({ item, onClick, index }) {
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

          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: 60 }}>
            {item.description.substring(0, 100)}...
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}