import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Header from '../components/Header';
// import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      
      {/* Nội dung chính */}
      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to My E-commerce Site
        </Typography>
        <Typography variant="body1">
          Đây là trang chủ để thử nghiệm Header và Footer của Material-UI. Bạn có thể thêm các sản phẩm hoặc tính năng khác tại đây.
        </Typography>
      </Container>
      
      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
