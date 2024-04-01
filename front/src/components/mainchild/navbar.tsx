import React from 'react'
import { Box, List, ListItem, Button } from '@mui/material'
import logoImage from '../../assets/logo.png'

interface NavbarDrawerProps {
  onClose: () => void
}

const NavbarDrawer: React.FC<NavbarDrawerProps> = ({ onClose }) => {
  return (
    <Box
      sx={{ width: 'auto' }}
      role="presentation"
      onClick={onClose}
      onKeyDown={onClose}
    >
      <List sx={{ display: 'flex', paddingTop: '5px' }}>
        <ListItem>
          <img
            src={logoImage}
            alt="Logo"
            style={{ height: '60px', marginTop: '-10px', marginLeft: '40px' }}
          />
        </ListItem>
        <ListItem
          sx={{
            paddingTop: '10px',
            paddingBottom: '0px',
            width: '70%',
            paddingLeft: '180px',
          }}
        >
          <Button
            onClick={() => {
              /* 월드맵 이동 로직 */
            }}
            sx={{
              fontSize: '20px',
              color: '#585865',
              fontWeight: 'bold',
            }}
          >
            월드맵
          </Button>
        </ListItem>
        <ListItem
          sx={{ paddingTop: '10px', paddingBottom: '0px', width: '95%' }}
        >
          <Button
            onClick={() => {
              /* 포인트/실시간 환율 이동 로직 */
            }}
            sx={{
              fontSize: '20px',
              color: '#585865',
              fontWeight: 'bold',
            }}
          >
            포인트/실시간 환율
          </Button>
        </ListItem>
        <ListItem sx={{ paddingTop: '10px', paddingBottom: '0px' }}>
          <Button
            onClick={() => {
              /* 내 지갑 이동 로직 */
            }}
            sx={{
              fontSize: '20px',
              color: '#585865',
              fontWeight: 'bold',
            }}
          >
            내 지갑
          </Button>
        </ListItem>
        <ListItem sx={{ paddingTop: '10px', paddingBottom: '0px' }}>
          <Button
            onClick={() => {
              /* 로그아웃 로직 */
            }}
            sx={{
              width: '120px', // 버튼의 가로 길이
              height: '45px', // 버튼의 세로 길이
              fontSize: '18px', // 폰트 사이즈
              backgroundColor: '#585865',
              color: 'white', // 기본 폰트 색상
              borderRadius: '10px',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#202632', // 호버 상태에서의 배경색 변경
              },
            }}
          >
            로그아웃
          </Button>
        </ListItem>
      </List>
    </Box>
  )
}

export default NavbarDrawer
