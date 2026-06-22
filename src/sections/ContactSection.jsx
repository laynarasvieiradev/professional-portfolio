import { Box, Card, CardContent, Container, Grid, Link as MuiLink, Typography } from '@mui/material'
import ButtonLink from '../components/ButtonLink'

export default function ContactSection() {
  return (
    <section 
      id="contact" 
    >
      <Container 
        maxWidth="lg"
        sx={{
          paddingY: { sm: 2, md: 4 },
        }}
      >
        <Grid 
          container 
          spacing={2}
          sx={{
            backgroundColor: 'primary.main',
            display: 'flex',
            flexWrap: 'wrap',
            paddingY: { sm: 2, md: 4 },
            paddingX: { sm: 2, md: 4 },
            borderRadius: 1,
          }}
        >
          <Grid item size={12}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ 
                fontWeight: 700, 
                letterSpacing: '-0.04em',
                color: '#fff',
                textAlign: 'center',
              }}
            >
              Contato
            </Typography>
          </Grid>
          <Grid item 
            size={{
              md: 12, 
              xs: 12
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: '#fff',
              }}
            >
              Se você deseja entrar em contato comigo, seja para discutir oportunidades de trabalho, colaborar em projetos ou simplesmente para dizer olá, sinta-se à vontade para me enviar um e-mail ou me encontrar nas redes sociais. Estou sempre aberto a novas conexões e oportunidades emocionantes!
            </Typography>            
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 1.2, 
              marginTop: 4,
              justifyContent: 'center',
            }}>
              <ButtonLink 
                href="mailto:seuemail@exemplo.com"
                type="white"
              >
                Enviar e-mail
              </ButtonLink>
              <ButtonLink href="#" type="white">
                LinkedIn
              </ButtonLink>
              <ButtonLink href="#" type="white">
                Instagram
              </ButtonLink>
              <ButtonLink href="#" type="white">
                Whatsapp
              </ButtonLink>
            </Box>
          </Grid>

          {/* <Grid item size={{
              md: 6, 
              xs: 12
            }}>
            Aqui vai o formulário
          </Grid> */}
        </Grid>
      </Container>
    </section>
  )
}

