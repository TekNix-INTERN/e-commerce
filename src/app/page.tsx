"use client";

import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useRouter } from "next/navigation";

const danhMuc = [
  "TẤT CẢ SẢN PHẨM",
  "PC GIÁ RẺ",
  "LAPTOP",
  "MACBOOK, IMAC",
  "LINH KIỆN MÁY TÍNH",
  "BÀN, GHẾ GAMING",
  "GEAR",
];

// Định nghĩa kiểu Product cho sản phẩm
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const Home = () => {
  const [danhMucChon, setDanhMucChon] = useState<string | null>(null);
  const [timKiem, setTimKiem] = useState<string>("");
  const [sanPham, setSanPham] = useState<Product[]>([]); // Thay any[] bằng Product[]
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setSanPham(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDanhMucClick = (category: string) => {
    setDanhMucChon(category === danhMucChon ? null : category);
  };

  const filteredProducts = sanPham
    .filter((product) =>
      product.title.toLowerCase().includes(timKiem.toLowerCase())
    )
    .filter((product) =>
      danhMucChon && danhMucChon !== "TẤT CẢ SẢN PHẨM"
        ? product.category === danhMucChon
        : true
    );

  const handleViewDetails = (id: number) => {
    router.push(`/product/${id}`);
  };

  return (
    <>
      <Head>
        <title>Trang thương mại điện tử - Trang Chủ</title>
      </Head>

      <div>
        <Header />

        <Container maxWidth="lg" sx={{ my: 4 }}>
          <Card sx={{ mb: 4 }}>
            <CardMedia
              component="img"
              height="300"
              image="/images/banner.jpg"
              alt="Banner thương mại điện tử"
            />
          </Card>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={3}>
              <Typography variant="h5" component="h2" gutterBottom>
                Danh mục sản phẩm
              </Typography>
              <List>
                {danhMuc.map((category) => (
                  <ListItem key={category} disablePadding>
                    <ListItemButton
                      onClick={() => handleDanhMucClick(category)}
                      selected={danhMucChon === category}
                    >
                      <ListItemText primary={category} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid item xs={12} sm={8} md={9}>
              <TextField
                label="Tìm kiếm sản phẩm"
                variant="outlined"
                fullWidth
                value={timKiem}
                onChange={(e) => setTimKiem(e.target.value)}
                sx={{ mb: 4 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <Typography variant="h5" component="h2" gutterBottom>
                {danhMucChon && danhMucChon !== "TẤT CẢ SẢN PHẨM"
                  ? `Sản phẩm thuộc danh mục: ${danhMucChon}`
                  : "Sản phẩm nổi bật"}
              </Typography>
              <Grid container spacing={4}>
                {loading ? (
                  <Typography
                    variant="body1"
                    sx={{ textAlign: "center", width: "100%" }}
                  >
                    Đang tải sản phẩm...
                  </Typography>
                ) : filteredProducts.length ? (
                  filteredProducts.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4}>
                      <Card
                        sx={{
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          transition: 'transform 0.3s, box-shadow 0.3s',
                          '&:hover': {
                            transform: 'scale(1.05)',
                            boxShadow: 3,
                          },
                        }}
                      >
                        <CardMedia
                          component="img"
                          sx={{
                            height: 200, // Đảm bảo tất cả hình ảnh có chiều cao cố định
                            objectFit: 'cover', // Đảm bảo hình ảnh không bị biến dạng
                          }}
                          image={product.image}
                          alt={product.title}
                        />
                        <CardContent
                          sx={{
                            flexGrow: 1,
                          }}
                        >
                          <Typography variant="h6" component="div">
                            {product.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {product.description}
                          </Typography>
                        </CardContent>
                        <CardActions
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            px: 2,
                            pb: 2,
                          }}
                        >
                          <Button
                            size="small"
                            onClick={() => handleViewDetails(product.id)}
                            sx={{
                              backgroundColor: '#ff5722',
                              color: 'white',
                              '&:hover': { backgroundColor: '#e64a19' },
                            }}
                          >
                            Xem chi tiết
                          </Button>
                          <Button
                            size="small"
                            sx={{
                              backgroundColor: '#ff5722',
                              color: 'white',
                              '&:hover': { backgroundColor: '#e64a19' },
                            }}
                          >
                            Thêm vào giỏ hàng
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))
                ) : (
                  <Typography
                    variant="body1"
                    sx={{ textAlign: 'center', width: '100%' }}
                  >
                    Không có sản phẩm nào trong danh mục này.
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Container>

        <Footer />
      </div>
    </>
  );
};

export default Home;
