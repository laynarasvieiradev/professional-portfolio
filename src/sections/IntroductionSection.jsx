import { useEffect, useRef, useState } from 'react'
import { Box, Card, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import ButtonLink from '../components/ButtonLink'

export default function IntroductionSection() {
  return (
    <section
      className="introduction-section"
    >
      <Container sx={{ height: '100vh'}}>
        <Grid container spacing={0} sx={{ height: '100%', alignItems: "center", position: 'relative', zIndex: 1 }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography
              component="h1"
              sx={{
                textTransform: 'uppercase',
                fontWeight: 700,
                fontSize: { xs: '2.6rem', md: '3.4rem' },
                color: '#332d27',
              }}
            >
              Manoel Gomes Silva Bitencourt
            </Typography>
            <Typography sx={{ color: '#332d27', mb: 2 }}>
              Ator • Cantor • Performer
            </Typography>

            <Box display="flex" gap={1} aria-label="Redes sociais do ator">
              <ButtonLink href="#" variant="primary" ariaLabel="Instagram do ator">
                <InstagramIcon fontSize="medium" />
              </ButtonLink>
              <ButtonLink href="#" variant="secondary" ariaLabel="Facebook do ator">
                <FacebookIcon fontSize="medium" />
              </ButtonLink>
              <ButtonLink href="#" variant="secondary" ariaLabel="WhatsApp do ator">
                <WhatsAppIcon fontSize="medium" />
              </ButtonLink>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} sx={{ height: '100%', alignItems: 'end',display: { xs: 'none', md: 'flex' }}}>
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
                image="/public/images/main-image.png"
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

        <Box display="flex" justifyContent="center" sx={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
          <IconButton
            component="a"
            href="#sobre"
            aria-label="Ir para a seção Sobre"
            className="scrollDownIcon"
            sx={{
              color: '#8a0015',
            }}
          >
            <KeyboardArrowDownIcon fontSize="large" />
          </IconButton>
        </Box>
      </Container>
    </section>
  )
}

