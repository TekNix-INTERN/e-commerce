"use client";

import { useParams } from 'next/navigation';
import { Container, Typography, Grid, Button, Card, CardContent, CardMedia } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const ProductDetail = () => {
  const { id } = useParams(); // Sử dụng useParams để lấy id từ URL
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
          setProduct(response.data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching product:", error);
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [id]);

  if (loading) return <Typography>Loading...</Typography>;

  if (!product) return <Typography>Product not found</Typography>;

  return (
    <>
    <Header />
    <Container>
      <Grid container spacing={4} sx={{ marginTop: 4 }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              image={product.image}
              alt={product.title}
              sx={{ height: 400, objectFit: 'contain' }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {product.title}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              {product.category}
            </Typography>
            <Typography variant="h5" color="primary" gutterBottom>
              ${product.price}
            </Typography>
            <Typography variant="body1" paragraph>
              {product.description}
            </Typography>
            <Button variant="contained" color="primary" size="large">
              Add to Cart
            </Button>
          </CardContent>
        </Grid>
      </Grid>
    </Container>
    <Footer />
    </>
  );
};

export default ProductDetail;
