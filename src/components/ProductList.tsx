// components/ProductList.tsx
import React from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const ProductList = ({ products }: { products: any[] }) => {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>Giảm Giá Hot Trong Tuần</Typography>
      <Grid container spacing={3}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={product.thumbnail || '/placeholder.jpg'}
                alt={product.title}
              />
              <CardContent>
                <Typography variant="h6">{product.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Giá: {product.price} <del>{product.oldPrice || '0'}</del>
                </Typography>
                <Typography variant="body2" color="primary">{product.discountPercentage}% OFF</Typography>
              </CardContent>
              <Button variant="contained" fullWidth>Mua Ngay</Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;
