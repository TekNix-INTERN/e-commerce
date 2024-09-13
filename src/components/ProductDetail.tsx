// components/ProductDetail.tsx
import { Typography, Grid, Button, Card, CardContent, CardMedia } from '@mui/material';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  return (
    <Card>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            image={product.image}
            alt={product.title}
            style={{ height: 'auto', maxWidth: '100%' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardContent>
            <Typography variant="h4">{product.title}</Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              {product.category}
            </Typography>
            <Typography variant="h5" color="primary">
              ${product.price}
            </Typography>
            <Typography variant="body1" paragraph>
              {product.description}
            </Typography>
            <Button variant="contained" color="primary">
              Add to Cart
            </Button>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProductDetail;
