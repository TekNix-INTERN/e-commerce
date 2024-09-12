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
            <Typography variant="h6" gutterBottom>Men</Typography>
            <Typography variant="body2"><Link href="#">Jeans</Link></Typography>
            <Typography variant="body2"><Link href="#">Jackets</Link></Typography>
            <Typography variant="body2"><Link href="#">Boots</Link></Typography>
            <Typography variant="body2"><Link href="#">Watches</Link></Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>Women</Typography>
            <Typography variant="body2"><Link href="#">Dresses</Link></Typography>
            <Typography variant="body2"><Link href="#">Shirts</Link></Typography>
            <Typography variant="body2"><Link href="#">Jackets</Link></Typography>
            <Typography variant="body2"><Link href="#">Coats</Link></Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>Kids</Typography>
            <Typography variant="body2"><Link href="#">Shirts</Link></Typography>
            <Typography variant="body2"><Link href="#">T-shirts</Link></Typography>
            <Typography variant="body2"><Link href="#">Sweaters</Link></Typography>
            <Typography variant="body2"><Link href="#">Jackets</Link></Typography>
          </Grid>

          {/* Follow Us */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>Follow Us</Typography>
            <Box display="flex" gap={2}>
              <Link href="#"><Twitter /></Link>
              <Link href="#"><Facebook /></Link>
              <Link href="#"><Instagram /></Link>
              <Link href="#"><LinkedIn /></Link>
            </Box>
          </Grid>
        </Grid>

        {/* Subscribe Section */}
        <Box mt={4} textAlign="center">
          <Typography variant="h6" gutterBottom>Subscribe Us</Typography>
          <Box component="form" display="flex" justifyContent="center">
            <TextField variant="outlined" placeholder="Enter email address" size="small" />
            <Button variant="contained" color="primary" sx={{ ml: 2 }}>Subscribe</Button>
          </Box>
        </Box>

        {/* Footer bottom */}
        <Box mt={4} textAlign="center">
          <Typography variant="body2">
            Copyright ©2024 All rights reserved | This template is made with ♥ by <Link href="https://colorlib.com">Colorlib</Link>
          </Typography>
          <Box mt={1}>
            <Link href="#">Terms & Conditions</Link> | <Link href="#">Privacy</Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
