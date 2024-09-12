import React from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Contact = () => {
  return (
    <>
      <Header />

      <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Liên Hệ Với Chúng Tôi
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Chúng tôi rất vui được lắng nghe ý kiến và câu hỏi của bạn. Vui lòng
          điền vào biểu mẫu dưới đây và chúng tôi sẽ phản hồi bạn sớm nhất có
          thể.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 2 }}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Thông Tin Liên Hệ
                  </Typography>
                  <Typography variant="body2">
                    <strong>Địa chỉ:</strong> 
                  </Typography>
                  <Typography variant="body2">
                    <strong>Email:</strong> 
                  </Typography>
                  <Typography variant="body2">
                    <strong>Điện thoại:</strong> 
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ p: 2 , background:'white'}}>
              <form noValidate autoComplete="off">
                <TextField
                  id="name"
                  label="Tên của bạn"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  placeholder="Nhập tên của bạn"
                  required
                />
                <TextField
                  id="email"
                  label="Email của bạn"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  placeholder="Nhập Email của bạn"
                  type="email"
                  required
                />
                <TextField
                  id="message"
                  label="Tin nhắn của bạn"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  placeholder="Nhập tin nhắn của bạn"
                  multiline
                  rows={4}
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                >
                  Gửi
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
};

export default Contact;
