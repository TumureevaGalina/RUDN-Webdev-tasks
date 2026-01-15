import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, TextField, Typography, Paper, Container } from '@mui/material'

function PromocodePage() {
  const [inputValue, setInputValue] = useState('')
  const navigateFunction = useNavigate()

  useEffect(() => {
    if (inputValue === 'DISCOUNT2024') {
      navigateFunction('/activated')
    }
  }, [inputValue, navigateFunction])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <Container maxWidth={false} sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper elevation={3} style={{ padding: '40px', width: '100%', maxWidth: '600px' }}>
        <Typography variant="h4" gutterBottom>
          Enter Promocode
        </Typography>
        <Typography variant="body1" paragraph>
          Please enter your promocode to get discount
        </Typography>
        <TextField
          fullWidth
          label="Promocode"
          variant="outlined"
          value={inputValue}
          onChange={handleInputChange}
          style={{ marginTop: '20px' }}
        />
      </Paper>
    </Container>
  )
}

export default PromocodePage
