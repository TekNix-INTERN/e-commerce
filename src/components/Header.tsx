import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Image from 'next/image';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
      <Toolbar>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
          <Image src="/images/logo.jpg" alt="Logo" width={40} height={40} />
        </Box>

        {/* Tiêu đề */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My E-commerce
        </Typography>

        {/* Các nút điều hướng */}
        <Box sx={{ display: 'flex', gap: 2 }}>
        <Link href="/"> <Button color="inherit" sx={{ textTransform: 'none' }}>Trang chủ</Button></Link>
          <Button color="inherit" sx={{ textTransform: 'none' }}>Sản phẩm</Button>
          <Link href="/contact"> <Button color="inherit" sx={{ textTransform: 'none' }}>Liên hệ</Button></Link>
         <Link href="/profile"> <Button color="inherit" sx={{ textTransform: 'none' }}>Hồ Sơ</Button> </Link>
        </Box>

        {/* Nút Đăng ký và Đăng nhập */}
        <Box sx={{ display: 'flex', gap: 2, ml: 'auto', alignItems: 'center' }}>
          {/* Link Đăng nhập */}
          <Link href="/login" passHref>
            <Button color="inherit" variant="outlined" sx={{ textTransform: 'none', color: '#fff', borderColor: '#fff' }}>
              Đăng nhập
            </Button>
          </Link>
          
          {/* Link Đăng ký */}
          <Link href="/register" passHref>
            <Button color="inherit" variant="contained" sx={{ textTransform: 'none', backgroundColor: '#ff9800' }}>
              Đăng ký
            </Button>
          </Link>

          {/* Biểu tượng giỏ hàng */}
         <Link href="/cart"> <Button color="inherit" sx={{ textTransform: 'none' }}>
            <ShoppingCartIcon />
            <Typography variant="body2" sx={{ ml: 1 }}>
              3
            </Typography>
          </Button></Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
