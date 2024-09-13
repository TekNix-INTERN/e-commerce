"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiCard from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from "@mui/icons-material/Facebook";
import { signIn } from "next-auth/react";

// Định nghĩa màu sắc
const colors = {
  primary: "#1976d2", // Màu chính
  secondary: "#dc004e", // Màu phụ
  background: "#fff", // Màu nền
  textPrimary: "#000", // Màu chữ chính
  textSecondary: "#fff", // Màu chữ phụ
  border: "#e0e0e0" // Màu đường viền
};

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  width: "100%",
  maxWidth: "450px",
  backgroundColor: colors.background,
  borderRadius: theme.shape.borderRadius,

}));

export default function SignUpCard() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: 2,
        overflow: "hidden",
      }}
    >
      <Card variant="outlined">
        <Typography
          variant="h4"
          sx={{ fontSize: "clamp(1.5rem, 5vw, 2rem)", textAlign: "center" }}
        >
          Đăng ký
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <FormControl>
            <FormLabel>Tên người dùng</FormLabel>
            <TextField
              id="username"
              type="text"
              placeholder="Nhập tên người dùng của bạn"
              fullWidth
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Mật khẩu</FormLabel>
            <TextField
              id="password"
              type="password"
              placeholder="Nhập mật khẩu của bạn"
              fullWidth
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Xác nhận mật khẩu</FormLabel>
            <TextField
              id="confirmpassword"
              type="password"
              placeholder="Xác nhận mật khẩu của bạn"
              fullWidth
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email của bạn</FormLabel>
            <TextField
              id="email"
              type="email"
              placeholder="Nhập email của bạn"
              fullWidth
              required
            />
          </FormControl>
          <Button type="submit" fullWidth variant="contained" sx={{ backgroundColor: colors.primary }}>
            Đăng ký
          </Button>
          <Typography textAlign="center">
            Đã có tài khoản?{" "}
            <Link href="/login" variant="body2" sx={{ color: colors.primary }}>
              Đến trang đăng nhập
            </Link>
          </Typography>
        </Box>
        <Divider sx={{ borderColor: colors.primary }}>hoặc</Divider>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            onClick={() => signIn('google')}
            sx={{ color: colors.textPrimary, borderColor: colors.primary }}
          >
            Đăng Ký với Google
          </Button>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<FacebookIcon />}
            onClick={() => signIn('facebook')}
            sx={{ color: colors.textPrimary, borderColor: colors.primary }}
          >
            Đăng Ký với Facebook
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
