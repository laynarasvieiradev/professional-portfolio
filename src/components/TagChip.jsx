import { Chip as MuiChip } from '@mui/material'

export default function TagChip({ children }) {
  return (
    <MuiChip
      label={children}
      sx={{
        borderRadius: '999px',
        px: 1.2,
        py: 0.3,
        fontSize: 13,
        backgroundColor: 'rgba(138,0,21,0.06)',
        border: '1px solid rgba(138,0,21,0.18)',
        color: '#8a0015',
      }}
    />
  )
}

