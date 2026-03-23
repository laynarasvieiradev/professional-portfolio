import { Box, Card, CardContent, Container, Grid, Link as MuiLink, Typography } from '@mui/material'
import ButtonLink from '../components/ButtonLink'

export default function ContatoSection() {
  return (
    <section id="contato" className="section">
      <Container maxWidth="lg">
        <Box mb={2}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: 700, letterSpacing: '-0.04em', color: '#332d27' }}
          >
            Contato
          </Typography>
          <Typography variant="body2" sx={{ color: '#332d27', mt: 0.5 }}>
            Deixe aqui seus links reais (e-mail, LinkedIn, GitHub).
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: '100%',
                background:
                  'linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.04))',
                borderRadius: 2,
                border: '1px solid rgba(255,255,255,0.12)',
                boxShadow: '0 18px 60px rgba(0,0,0,0.45)',
              }}
            >
              <CardContent>
                <Typography variant="h6" component="h3" sx={{ mb: 1.5, color: '#332d27' }}>
                  Vamos trabalhar juntas?
                </Typography>
                <Typography variant="body2" sx={{ color: '#332d27', mb: 2 }}>
                  Se você tem um projeto e quer uma interface caprichada, me chama. Eu respondo rápido
                  e com objetividade.
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.2, mt: 1 }}>
                  <ButtonLink href="mailto:seuemail@exemplo.com">Enviar e-mail</ButtonLink>
                  <ButtonLink href="#" variant="secondary">
                    LinkedIn
                  </ButtonLink>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: '100%',
                background:
                  'linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.04))',
                borderRadius: 2,
                border: '1px solid rgba(255,255,255,0.12)',
                boxShadow: '0 18px 60px rgba(0,0,0,0.45)',
              }}
            >
              <CardContent>
                <Typography variant="h6" component="h3" sx={{ mb: 1.5, color: '#332d27' }}>
                  Links
                </Typography>
                <Box component="ul" sx={{ m: 0, pl: 2, color: 'rgba(255,255,255,0.8)' }}>
                  <li>
                    <MuiLink href="#" underline="hover" sx={{ color: '#8a0015', fontWeight: 650 }}>
                      GitHub →
                    </MuiLink>
                  </li>
                  <li>
                    <MuiLink href="#" underline="hover" sx={{ color: '#8a0015', fontWeight: 650 }}>
                      Portfólio/Behance →
                    </MuiLink>
                  </li>
                  <li>
                    <MuiLink href="#" underline="hover" sx={{ color: '#8a0015', fontWeight: 650 }}>
                      Currículo (PDF) →
                    </MuiLink>
                  </li>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

