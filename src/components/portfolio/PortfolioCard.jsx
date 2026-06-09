import { useTheme } from "@mui/material"
import { Box, Card, CardContent, Typography } from "@mui/material"
import { motion } from "framer-motion"
import ButtonLink from "../ButtonLink";
import getImageUrl from "./imageUrl";

export default function PortfolioCard({ item, onClick, index }) {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className="card-portfolio"
        sx={{
          height: "300px",
          display: "flex",
          flexDirection: "column",
          cursor: "pointer",
          borderRadius: "5px",
          backgroundImage: `url(${getImageUrl(item.coverImage)})`,
          backgroundSize: "cover",
          backgroundPosition: "center", 
        }}
        onClick={() => onClick(item)}
      >
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              bgcolor: "#ffffff31",
              backdropFilter: "blur(10px)",
              borderRadius: "20px",
              px: 1.5,
              py: 0.5,
            }}
          >
            <Typography variant="caption" sx={{ color: "#fff" }}>
              {item.category}
            </Typography>
          </Box>
        </Box>

        <CardContent 
          className="portfolio-content-card"
          sx={{ 
            backgroundColor: "transparent", 
            mt: "auto", 
            paddingY: '0!important', 
            backgroundColor: "#ffffff3d", 
            backdropFilter: "blur(10px)",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            overflow: "hidden",
          }}>
          <Typography variant="h6" component="h3" gutterBottom fontWeight="bold" sx={{ color: "white", textShadow: '0px 1px 4px #332d27', textAlign: "center" }}>
            {item.title}
          </Typography>
          <ButtonLink href="#contato" ariaLabel="Vamos conversar">
            Ver mais detalhes
          </ButtonLink>
        </CardContent>
      </Card>
    </motion.div>
  );
}