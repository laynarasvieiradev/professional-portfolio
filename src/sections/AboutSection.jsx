import { Box, Container, Grid, Typography, Card, CardMedia } from '@mui/material'
import ButtonLink from '../components/ButtonLink'

export default function SobreSection() {
  return (
    <section id="sobre" className="section">
      <Container sx={{ height: '100vh'}}>
        <Grid container spacing={0} sx={{ maxWidth: '1200px', margin: '0 auto', paddingBottom: 4, alignItems: 'center', height: '100%' }}>
          <Grid item xs={12} md={4} size={4} sx={{ height: '100%' }}>
            <Card
              aria-label="Foto do ator"
              sx={{
                height: '100%',
                width: '100%',
                background: 'black',
                boxShadow: 'none',
                borderRadius: '0'
              }}
            >
              <CardMedia
                component="img"
                image="/public/images/image-about-me.jpg"
                alt="Foto em destaque do ator"
                loading="lazy"
                sx={{
                  width: 'auto',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={8} size={8} sx={{ backgroundColor: '#181513', height: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 4 }}>
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
              Sou um ator apaixonado por contar histórias através das artes cênicas. Com formação em teatro, tenho experiência em diversos projetos, desde peças teatrais até produções audiovisuais. Busco sempre mergulhar profundamente em cada personagem, trazendo autenticidade e emoção às performances.
            </Typography>
            <Typography variant="body1" sx={{ color: '#fff', marginBottom: 2 }}>
              Ao longo da minha carreira, participei de várias produções que exploram temas diversos, do drama à comédia. Meu objetivo é colaborar com projetos que provoquem reflexão e ampliem a representatividade nas telas e nos palcos.
            </Typography>
            <Box mt={2}>
              <ButtonLink href="#contato" ariaLabel="Vamos conversar" type="white">
                Vamos conversar
              </ButtonLink>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

