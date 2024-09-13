import React from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

// Định nghĩa kiểu dữ liệu cho sản phẩm
interface Product {
  id: number;
  title: string;
  price: number;
  oldPrice?: number;
  discountPercentage: number;
  thumbnail?: string;
}

// Cập nhật props với kiểu dữ liệu cụ thể
const ProductList: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Giảm Giá Hot Trong Tuần
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
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
                <Typography variant="body2" color="primary">
                  {product.discountPercentage}% OFF
                </Typography>
              </CardContent>
              <Button variant="contained" fullWidth>
                Mua Ngay
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;
