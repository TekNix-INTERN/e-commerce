// components/Footer.tsx
import React from 'react';
import { Container, Grid, Typography, TextField, Button, Box, Link } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: '#f9f9f9', py: 6 }}>
      <Container>
        <Grid container spacing={4}>
          {/* Menu Categories */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>Sản phẩm</Typography>
            <Typography variant="body2"><Link href="#">PC Gaming</Link></Typography>
            <Typography variant="body2"><Link href="#">Laptop</Link></Typography>
            <Typography variant="body2"><Link href="#">Macbook</Link></Typography>
            <Typography variant="body2"><Link href="#">Linh kiện</Link></Typography>
          </Grid>

          {/* Follow Us */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>Theo dõi chúng tôi</Typography>
            <Box display="flex" gap={2}>
              <Link href="#" aria-label="Twitter"><Twitter /></Link>
              <Link href="#" aria-label="Facebook"><Facebook /></Link>
              <Link href="#" aria-label="Instagram"><Instagram /></Link>
              <Link href="#" aria-label="LinkedIn"><LinkedIn /></Link>
            </Box>
          </Grid>

          {/* Subscribe Section */}
          <Grid item xs={12} sm={12} md={6}>
            <Box textAlign="center">
              <Typography variant="h6" gutterBottom>Đăng ký nhận tin</Typography>
              <Box component="form" display="flex" justifyContent="center" alignItems="center">
                <TextField variant="outlined" placeholder="Nhập địa chỉ email" size="small" sx={{ mr: 2 }} />
                <Button variant="contained" color="primary">Đăng ký</Button>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Footer bottom */}
        <Box mt={4} textAlign="center">
          <Typography variant="body2">
            Bản quyền ©2024 Tất cả quyền được bảo lưu | Mẫu này được tạo bởi <Link href="https://colorlib.com" underline="hover">Colorlib</Link>
          </Typography>
          <Box mt={1}>
            <Link href="#" underline="hover">Điều khoản & Điều kiện</Link> | <Link href="#" underline="hover">Chính sách bảo mật</Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
