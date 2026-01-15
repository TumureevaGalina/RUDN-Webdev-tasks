import { Link, NavLink, Outlet } from 'react-router-dom'
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material'

function Header() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            My Website
          </Typography>
          <nav>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={NavLink} to="/about">
              About
            </Button>
          </nav>
        </Toolbar>
      </AppBar>
      <Box style={{ flex: 1, padding: '20px' }}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default Header
