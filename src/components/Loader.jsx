import { Grid } from "@mui/material"
import loaderImge from '../assets/images/loader-site.svg'

function LoadingCircleSpinner() {
    return (
        <Grid container 
          sx={{ 
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <img
            srcSet={loaderImge}
            src={loaderImge}
            alt={`loader site`}
            loading="lazy"
          />
        </Grid>
    )
}

export default LoadingCircleSpinner
