import { Box, Card, CardContent, Container, Grid, Link as MuiLink, Typography } from '@mui/material'
import ButtonLink from '../components/ButtonLink'
import EmailIcon from '@mui/icons-material/Email'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

export default function ContactSection({ data }) {
  const textContact = data[8]
  const email = data[7]
  const instagram = data[4]
  const whats = data[6]
  
  return (
    <section 
      id="contact" 
    >
      <Container 
        maxWidth="lg"
        sx={{
          paddingY: { xs: 2, md: 4 },
        }}
      >
        <Grid 
          container 
          spacing={2}
          sx={{
            backgroundColor: 'primary.main',
            display: 'flex',
            flexWrap: 'wrap',
            paddingY: { xs: 2, md: 4 },
            paddingX: { xs: 2, md: 4 },
            borderRadius: 1,
          }}
        >
          <Grid size={12}>
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
          <Grid 
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
                href={`mailto:` + email}
                type="white"
                target="_blank"
              >
                <EmailIcon />
              </ButtonLink>
              <ButtonLink 
                href={instagram} 
                type="white" 
                target="_blank"
              >
                <InstagramIcon />
              </ButtonLink>
              <ButtonLink 
                href={`https://wa.me/55${whats}?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20conversar%20com%20voc%C3%AA.`} 
                type="white" 
                target="_blank"
              >
                <WhatsAppIcon />
              </ButtonLink>
            </Box>
          </Grid>

          {/* <Grid size={{
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

