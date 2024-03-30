import * as React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import logoImage from '../../assets/logo.png'
import { logout } from '@/api/member'
import { useNavigate } from 'react-router-dom'

const pages = ['월드맵', '포인트/실시간 환율', '내 지갑']

function ResponsiveAppBar() {
  const navigate = useNavigate()
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  // Logout function
  const handleLogout = () => {
    logout()
      .then(() => {
        localStorage.clear()
        navigate('/')
      })
      .catch((error) => {
        console.error('Logout failed:', error)
        // Handle logout error here
      })
  }

  return (
    <AppBar
      position="fixed"
      sx={{ height: 85, backgroundColor: 'white' }}
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: 'flex-start',
            paddingLeft: { md: '40px', xs: 0 },
            paddingRight: { md: '40px', xs: 0 },
          }}
        >
          {/* 큰 화면 로고 */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <Link
              to="/mainchild/worldmap"
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
              }}
            >
              <img src={logoImage} alt="LOGO" style={{ height: '70px' }} />
            </Link>
          </Box>

          {/* 큰 화면에서의 메뉴 버튼 */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  marginTop: '25px',
                  color: '#585865',
                  display: 'block',
                  fontWeight: 'bold',
                  mx: '3.5vw',
                  fontSize: '1.65vw',
                  width: '100%',
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* 작은 화면 메뉴바 */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon
                sx={{ color: '#585865', fontSize: 35, marginTop: 0.7 }}
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{ color: '#585865' }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* 작은 화면 로고 */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Link
              to="/mainparent"
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
              }}
            >
              <img src={logoImage} alt="LOGO" style={{ height: '65px' }} />
            </Link>
          </Box>

          {/* 로그아웃 버튼 */}
          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="contained"
              disableElevation
              onClick={handleLogout}
              sx={{
                marginLeft: 3,
                marginTop: '20px',
                paddingTop: '10px',
                width: 125,
                height: '47px',
                fontSize: '18px',
                backgroundColor: '#0064FF',
                borderRadius: 3,
                fontWeight: 600,
              }}
            >
              로그아웃
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
