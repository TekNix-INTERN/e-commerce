import React from "react";
import { Container, Grid, Typography, Paper, Box, Button, Select, MenuItem, TextField } from "@mui/material";
import Image from 'next/image';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const items = [
  { id: 1, name: 'Áo thun cotton', price: 44.00, imgSrc: 'https://i.imgur.com/1GrakTl.jpg' },
  { id: 2, name: 'Áo thun cotton', price: 44.00, imgSrc: 'https://i.imgur.com/ba3tvGm.jpg' },
  { id: 3, name: 'Áo thun cotton', price: 44.00, imgSrc: 'https://i.imgur.com/pHQ3xT3.jpg' },
];

export default function Cart() {
  return (
    <>
      <Header />
      <Container maxWidth="md" sx={{ marginTop: 4, backgroundColor: '#f5f5f5' }}>
        <Grid container spacing={4}>
          <Grid item md={8} sx={{ color: 'black' }}>
            <Typography variant="h4" gutterBottom>
              Giỏ hàng
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              {items.length} sản phẩm
            </Typography>
            
            {items.map(item => (
              <Paper key={item.id} variant="outlined" sx={{ padding: 2, marginBottom: 2, backgroundColor: '#ffffff' }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={4} md={3}>
                    <Image
                      src={item.imgSrc}
                      alt={item.name}
                      width={200} // Đặt chiều rộng cố định cho hình ảnh
                      height={200} // Đặt chiều cao cố định cho hình ảnh
                      style={{ borderRadius: 4 }}
                    />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body2" color="textSecondary">Áo</Typography>
                    <Typography variant="body1">{item.name}</Typography>
                  </Grid>
                  <Grid item>
                    <Button>-</Button>
                    <Button variant="outlined">1</Button>
                    <Button>+</Button>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1">${item.price.toFixed(2)}</Typography>
                    <Button variant="text" color="error" sx={{ marginLeft: 1 }}>
                      &#10005;
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            ))}
            
            <Button href="#" variant="text" sx={{ marginTop: 2 }}>
               Quay lại cửa hàng
            </Button>
          </Grid>

          <Grid item md={4} sx={{ marginBottom: 4, color: "black" }}>
            <Typography variant="h5" gutterBottom>
              Tóm tắt
            </Typography>
            <hr />
            <Grid container spacing={2}>
              <Grid item xs>
                <Typography variant="body2">SẢN PHẨM {items.length}</Typography>
              </Grid>
              <Grid item xs textAlign="right">
                <Typography variant="body2"></Typography>
              </Grid>
            </Grid>
            <Box component="form" sx={{ marginTop: 2, backgroundColor: '#ffffff', padding: 2, borderRadius: 1 }}>
              <Typography variant="body2">GIAO HÀNG</Typography>
              <Select fullWidth>
                <MenuItem value="standard">Giao hàng tiêu chuẩn - $5.00</MenuItem>
              </Select>
              <Typography variant="body2" sx={{ marginTop: 2 }}>NHẬP MÃ</Typography>
              <TextField fullWidth id="code" placeholder="Nhập mã của bạn" />
            </Box>
            <Grid container spacing={2} sx={{ marginTop: 2, borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}>
              <Grid item xs>
                <Typography variant="body2">TỔNG CỘNG</Typography>
              </Grid>
              <Grid item xs textAlign="right">
                <Typography variant="body2">${items.reduce((total, item) => total + item.price, 0) + 5.00}</Typography>
              </Grid>
            </Grid>
            <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
              THANH TOÁN
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
