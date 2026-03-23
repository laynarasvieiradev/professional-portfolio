import { Box, Card, CardContent, Container, Grid, Link as MuiLink, Typography } from '@mui/material'
import TagChip from '../components/TagChip'

const projects = [
  {
    title: 'Projeto 01',
    description: 'Descrição curta do projeto e impacto.',
    tags: ['React', 'UI', 'Acessibilidade'],
    href: '#',
  },
  {
    title: 'Projeto 02',
    description: 'O que você construiu e o resultado.',
    tags: ['Vite', 'Performance', 'SEO'],
    href: '#',
  },
  {
    title: 'Projeto 03',
    description: 'Problema que resolveu e como.',
    tags: ['APIs', 'TypeScript', 'Testes'],
    href: '#',
  },
]

export default function ProjetosSection() {
  return (
    <section id="projetos" className="section">
      <Container maxWidth="lg">
        <Box mb={2}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: 700, letterSpacing: '-0.04em', color: '#332d27' }}
          >
            Projetos
          </Typography>
          <Typography variant="body2" sx={{ color: '#332d27', mt: 0.5 }}>
            Troque os cards pelos seus projetos reais (link do GitHub, deploy, etc.).
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {projects.map((p) => (
            <Grid item xs={12} md={4} key={p.title}>
              <Card
                className="projectCard"
                sx={{
                  height: '100%',
                  background:
                    'linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.04))',
                  borderRadius: 2,
                  border: '1px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 18px 60px rgba(0,0,0,0.45)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="h3" sx={{ mb: 1, color: '#332d27' }}>
                    {p.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#332d27', mb: 1.5 }}>
                    {p.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1.5 }}>
                    {p.tags.map((t) => (
                      <TagChip key={t}>{t}</TagChip>
                    ))}
                  </Box>
                </CardContent>
                <Box sx={{ px: 2, pb: 2 }}>
                  <MuiLink href={p.href} underline="hover" sx={{ color: '#8a0015', fontWeight: 650 }}>
                    Ver detalhes →
                  </MuiLink>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  )
}

