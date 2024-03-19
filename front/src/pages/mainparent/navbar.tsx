import * as React from 'react';
import {Link} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logoImage from '../../assets/logo.png'
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';

const pages = ['자녀학습 현황', '마이 지갑', '실시간 환율'];

interface Props {
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <React.Fragment>
      <CssBaseline>
        <ElevationScroll>
          <AppBar position="static" sx={{ height: 67, backgroundColor: 'white' }}>
            <Container maxWidth="xl">
              <Toolbar 
                disableGutters 
                sx={{ 
                  justifyContent: 'flex-start', 
                  paddingLeft: { md: '180px', xs: 0 },
                  paddingRight: { md: '160px', xs: 0 },
                }}
              >

                {/* 큰 화면 로고 */}
                <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                  <Link to="/mainparent" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                    <img src={logoImage} alt="LOGO" style={{ height: '50px', marginBottom: 4.5 }} />
                  </Link>
                </Box>

                {/* 큰 화면에서의 메뉴 버튼 */}
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                  {pages.map((page) => (
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ marginTop: 1.2, ml: 2, color: '#585865', display: 'block', fontWeight: 600, fontSize: 17 }}
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
                    <MenuIcon sx={{ color: '#585865', fontSize: 35, marginTop: 0.7 }} />
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
                  <Link to="/mainparent" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                    <img src={logoImage} alt="LOGO" style={{ height: '50px', marginBottom: 4.5 }} />
                  </Link>
                </Box>

                {/* 로그아웃 버튼 */}
                <Box sx={{ flexGrow: 0 }}>
                  <Button
                      variant="contained"
                      disableElevation
                    sx={{
                        marginLeft: 3,
                        marginTop: 1.2,
                        width: 110,
                        height: '42px',
                        fontSize: '17px',
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
        </ElevationScroll>
      </CssBaseline>
    </React.Fragment>

  );
}
export default ResponsiveAppBar;
