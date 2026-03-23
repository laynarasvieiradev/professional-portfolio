import { Container, Link as MuiLink, Typography } from '@mui/material'

export default function Footer() {
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <div className="footerRow">
          <Typography variant="body2" sx={{ color: '#332d27' }}>
            © {new Date().getFullYear()} Seu Nome
          </Typography>
          <MuiLink
            href="#topo"
            underline="hover"
            sx={{ color: '#8a0015', fontWeight: 600 }}
          >
            Voltar ao topo ↑
          </MuiLink>
        </div>
      </Container>
    </footer>
  )
}

