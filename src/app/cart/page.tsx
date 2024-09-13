import React from "react";
import Header from "../../components/Header";
import {
  Typography,
  Container,
  Grid,
  Paper,
  Box,
} from "@mui/material";

const items = [
  { id: 1, name: 'Sản phẩm 1', price: '$10' },
  { id: 2, name: 'Sản phẩm 2', price: '$20' },
  { id: 3, name: 'Sản phẩm 3', price: '$30' },
];

const Cart=()=> {
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Giỏ hàng
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Xem Giỏ Hàng Tại Đây
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box sx={{ p: 4 }}>
              <Grid container spacing={2}>
                {items.map((item) => (
                  <Grid item xs={12} sm={6} md={4} key={item.id}>
                    <Paper elevation={3} sx={{ padding: 2 }}>
                      <Typography variant="h6">{item.name}</Typography>
                      <Typography variant="body1">{item.price}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
      
    </>
  );
}
export default Cart;