import { useEffect, useState } from 'react'
import { Box, Container, Drawer, IconButton, Link as MuiLink } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import ButtonLink from './ButtonLink'

const links = [
  { href: '#sobre', label: 'Sobre Mim' },
  { href: '#projetos', label: 'Meu Portfólio' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={isScrolled ? 'headerScrolled headerMain' : 'headerMain'}
      >
        <Container maxWidth="lg">
          <Box display="flex" justifyContent="space-between" alignItems="center" py={2} width="100%">
            <Box display="flex" alignItems="center" gap={0}>
              <img
                src="/public/images/logosite.png"
                alt="Logo do site"
                style={{ height: '35px', width: 'auto' }}
              />
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, flex: 1, justifyContent: 'center' }}>
              <nav className="nav" aria-label="Navegação principal">
                {links.map((l) => (
                  <MuiLink key={l.href} className="navLink" href={l.href} underline="none">
                    {l.label}
                  </MuiLink>
                ))}
              </nav>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <ButtonLink href="#contato" ariaLabel="Vamos conversar">
                Vamos conversar
              </ButtonLink>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              sx={{ display: { xs: 'flex', md: 'none' } }}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Abrir menu"
            >
              <MenuIcon sx={{ color: '#332d27' }} />
            </IconButton>
          </Box>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleMobileMenuClose}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#f7f2ec',
            width: '70vw',
            maxWidth: '300px',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={handleMobileMenuClose} aria-label="Fechar menu">
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            p: 2,
          }}
        >
          <nav aria-label="Navegação mobile">
            {links.map((l) => (
              <MuiLink
                key={l.href}
                href={l.href}
                underline="none"
                onClick={handleMobileMenuClose}
                sx={{
                  display: 'block',
                  py: 1,
                  color: '#332d27',
                  fontWeight: 500,
                  '&:hover': {
                    opacity: 0.7,
                  },
                }}
              >
                {l.label}
              </MuiLink>
            ))}
          </nav>

          <ButtonLink href="#contato" ariaLabel="Vamos conversar">
            Vamos conversar
          </ButtonLink>
        </Box>
      </Drawer>
    </>
  )
}

