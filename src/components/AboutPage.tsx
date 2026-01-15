import { Box, Typography, Paper, Container } from '@mui/material'

function AboutPage() {
  return (
    <Container maxWidth={false} sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper elevation={3} style={{ padding: '40px', width: '100%', maxWidth: '600px' }}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1">
          This is a simple website for testing react router and navigation between pages.
        </Typography>
      </Paper>
    </Container>
  )
}

export default AboutPage
