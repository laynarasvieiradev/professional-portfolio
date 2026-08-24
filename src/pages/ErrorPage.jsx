export default function ErrorPage() {
  return (
     <Grid container 
        sx={{ 
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography
              component="h1"
              sx={{
                textTransform: 'uppercase',
                fontWeight: 700,
                fontSize: { xs: '2.6rem', md: '3.4rem' },
                lineHeight: 1.2,
                color: 'text.primary',
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              Ops, parece que algo deu errado no meio do caminho!
              Contate o administrador do site.
            </Typography>
      </Grid>
)}