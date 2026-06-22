import { Container, Grid, Link as MuiLink, Typography } from '@mui/material'

export default function Footer() {
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <Grid 
          className="footerRow"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="body2" sx={{ color: '#332d27' }}>
            © {new Date().getFullYear()} Laynara S. Vieira
          </Typography>
          <MuiLink
            href="#topo"
            underline="hover"
            sx={{ color: 'primary.main', fontWeight: 600 }}
          >
            Voltar ao topo ↑
          </MuiLink>
        </Grid>
      </Container>
    </footer>
  )
}

