import { Button } from '@mui/material'

export default function ButtonLink({ href, children, type = 'regular', ariaLabel }) {
  return (
    <Button
      component="a"
      href={href}
      aria-label={ariaLabel}
      variant="outlined"
      color="inherit"
      className={ type === 'white' ? 'btn-white' : 'btn-regular'}
      sx={{
        minWidth: 'auto',
        textTransform: 'none',
        borderRadius: '999px',
        borderWidth: 1,
      }}
    >
      {children}
    </Button>
  )
}

