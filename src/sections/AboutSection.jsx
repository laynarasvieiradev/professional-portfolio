import { Box, Container, Grid, Typography, Card, CardMedia } from '@mui/material'
import ButtonLink from '../components/ButtonLink'
import { forwardRef } from 'react'
import getImageUrl from "../components/portfolio/imageUrl"

export default function AboutSection({ data }) {
  const textAbout = data[9]
  const imageAbout = data[10]
  return (
    <section id="about" className="about-section">
      <Container 
        sx={{ 
          height: {md: '30vh', lg: '100vh'},
        }}>
        <Grid 
          container 
          spacing={0} 
          sx={{ 
            maxWidth: '1200px', 
            margin: '0 auto',
            paddingBottom: 4, 
            alignItems: 'stretch', 
            height: '100%',
            flexDirection: { xs: 'column-reverse', md: 'row' }            
          }}>
          <Grid 
            item 
            size={{
              md: 4, 
              xs: 12
            }} 
            sx={{ 
              height: '100%' 
            }}>
            <Card
              aria-label="Foto do ator"
              sx={{
                background: 'black',
                boxShadow: 'none',
                borderTopRightRadius: '0',
                borderBottomRightRadius: '0',
                borderTopLeftRadius: { xs: 0, md:'5px'},
                borderBottomLeftRadius: '5px',
                borderBottomRightRadius: { xs: '5px', md: '0' },
                height: '100%',
              }}
            >
              <CardMedia
                component="img"
                image={getImageUrl(imageAbout)}
                alt="Foto em destaque do ator"
                loading="lazy"
                sx={{
                  objectFit: "cover",
                  height: "100%"
                }}
              />
            </Card>
          </Grid>
          <Grid 
            item 
            size={{ 
              md: 8, 
              xs: 12
            }} 
            sx={{ 
              backgroundColor: '#181513', 
              height: '100%', 
              alignItems: 'center', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              padding: 4,
              borderTopRightRadius: '5px',
              borderBottomRightRadius: {xs: 0, md: '5px'}, 
              borderTopLeftRadius: { xs: '5px', md: 0},
            }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 700,
                letterSpacing: '-0.04em',
                textTransform: 'uppercase',
                color: '#fff',
                textAlign: 'left',
                mb: 2,
              }}
            >
              Sobre mim
            </Typography>
            <Typography variant="body1" sx={{ color: '#fff', marginBottom: 2 }}>
              {textAbout}
            </Typography>
            <Box mt={2}>
              <ButtonLink href="#contact" ariaLabel="Vamos conversar" type="white">
                Vamos conversar
              </ButtonLink>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

