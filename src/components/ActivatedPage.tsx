import { Box, Typography, Paper, Container } from '@mui/material'

function ActivatedPage() {
  return (
    <Container maxWidth={false} sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper elevation={3} style={{ padding: '40px', width: '100%', maxWidth: '600px', textAlign: 'center' }}>
        <Typography variant="h4" color="success.main">
          Промокод применен!
        </Typography>
      </Paper>
    </Container>
  )
}

export default ActivatedPage
