import { Box, Card, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import ButtonLink from '../components/ButtonLink'
import getGeneralInfo from '../api/general'
import getImageUrl from "../components/portfolio/imageUrl"

export default function IntroductionSection({ data }) {
  const name = data[1]
  const specialties = data[2].split(',')
  const specialtiesFormatted = specialties.join(' • ')
  const mainImage = data[3]
  const instagramUrl = data[4]
  const facebookUrl = data[5]
  const whats = data[6]
  const email = data[7]
  
  return (
    <section
      id="introduction"
      className="introduction-section"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Container 
          sx={{ 
            height: '100vh', 
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: { xs: `url(${getImageUrl(mainImage)})`, sm: `url(${getImageUrl(mainImage)})`, md: 'none' }, 
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat', 
              backgroundPositionY: 'bottom',
              backgroundPositionX: 'center',
              opacity: 0.5,
              zIndex: -1,
            },
          }}
        >
          <Grid 
            container 
            spacing={0} 
            sx={{ 
              height: '100%', 
              alignItems: "center", 
              position: 'relative', 
              zIndex: 1 
            }}>
            <Grid 
              size={{ xs: 12, md: 6 }} 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center' 
              }}>
              <Typography
                component="h1"
                sx={{
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  fontSize: { xs: '2.6rem', md: '3.4rem' },
                  lineHeight: 1.2,
                  color: 'text.primary',
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
               { name }
              </Typography>
              <Typography 
                sx={{ 
                  color: 'text.primary', 
                  mb: 2,
                  textAlign: { xs: 'center', md: 'left' }
                }}>
                {specialtiesFormatted}
              </Typography>

              <Box 
                sx={{
                  display: "flex" ,
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  gap: 1
                }}
              >
                {instagramUrl && (
                  <ButtonLink href={instagramUrl} variant="primary" ariaLabel="Instagram do ator" target="_blank">
                    <InstagramIcon fontSize="medium" />
                  </ButtonLink>
                )}
                {facebookUrl && (
                  <ButtonLink href="#" variant="secondary" ariaLabel="Facebook do ator">
                    <FacebookIcon fontSize="medium" />
                  </ButtonLink>
                )}
                {whats && (
                  <ButtonLink href={`https://wa.me/55${whats}?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20conversar%20com%20voc%C3%AA.`} variant="secondary" ariaLabel="WhatsApp do ator" target="_blank">
                    <WhatsAppIcon fontSize="medium" />
                  </ButtonLink>
                )}
              </Box>
            </Grid>

            <Grid 
              size={{ xs: 12, md: 6 }} 
              sx={{ height: '100%', alignItems: 'end', display: { xs: 'none', md: 'flex' }}}
            >
              <Card
                aria-label="Foto do ator"
                sx={{
                  height: '95%',
                  width: '100%',
                  background: 'transparent',
                  boxShadow: 'none',
                }}
              >
                <CardMedia
                  component="img"
                  image={getImageUrl(mainImage)}
                  alt="Foto em destaque do ator"
                  loading="lazy"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Card>
            </Grid>
          </Grid>

          <Box sx={{ 
              display: "flex", 
              justifyContent: "center",
              position: 'absolute', 
              bottom: '0', 
              left: '50%', 
              transform: 'translateX(-50%)', 
              zIndex: 10 
            }}>
            <IconButton              
              aria-label="Ir para a seção Sobre"
              className="scrollDownIcon"
              sx={{
                color: 'primary.main',
              }}
              href="#about"
            >
              <KeyboardArrowDownIcon fontSize="large" />
            </IconButton>
          </Box>
        </Container>
      </motion.div>
    </section>
  )
}

