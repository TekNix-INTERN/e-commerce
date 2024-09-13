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
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { signIn } from "next-auth/react";

// Định nghĩa màu sắc dùng chung
const colors = {
  primary: "#1976d2", // Màu chính
  secondary: "#dc004e", // Màu phụ
  background: "#fff", // Màu nền
  textPrimary: "#000", // Màu chữ chính
  textSecondary: "#fff", // Màu chữ phụ
  border: "#e0e0e0", // Màu viền
};

// Định nghĩa Card với một chiều rộng tối đa và padding linh hoạt
const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  width: "100%",
  maxWidth: "450px",
  maxHeight: "90vh", // Giới hạn chiều cao
  overflowY: "auto", // Cuộn nếu nội dung quá lớn
  backgroundColor: colors.background,
  borderRadius: theme.shape.borderRadius,
}));

const CustomButton = styled(Button)(({ theme }) => ({
  background: "#fff",
  fontSize: "14px",
  marginTop: theme.spacing(2),
  padding: theme.spacing(2, 4),
  borderRadius: "26px",
  border: `1px solid ${colors.border}`,
  textTransform: "uppercase",
  fontWeight: 700,
  color: colors.textPrimary,
  boxShadow: "0px 2px 2px #5C5696",
  cursor: "pointer",
  transition: ".2s",
  "&:hover": {
    borderColor: colors.primary,
    backgroundColor: colors.primary,
    color: "#fff",
  },
}));

export default function SignUpCard() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Đảm bảo chiều cao tối thiểu cho toàn bộ màn hình
        padding: 2,
        boxSizing: "border-box",
        background: `linear-gradient(90deg, #C7C5F4, #776BCC)`, // Màu nền
      }}
    >
      <Card variant="outlined">
        <Typography
          variant="h4"
          sx={{
            fontSize: "clamp(1.5rem, 5vw, 2rem)", // Thay đổi kích thước linh hoạt
            textAlign: "center",
            color: colors.textPrimary,
          }}
        >
          Đăng ký
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <FormControl>
            <FormLabel sx={{ color: colors.textPrimary }}>Tên người dùng</FormLabel>
            <TextField
              id="username"
              type="text"
              placeholder="Nhập tên người dùng của bạn"
              fullWidth
              required
              InputProps={{ sx: { fontSize: "1rem", color: colors.textPrimary } }}
            />
          </FormControl>
          <FormControl>
            <FormLabel sx={{ color: colors.textPrimary }}>Mật khẩu</FormLabel>
            <TextField
              id="password"
              type="password"
              placeholder="Nhập mật khẩu của bạn"
              fullWidth
              required
              InputProps={{ sx: { fontSize: "1rem", color: colors.textPrimary } }}
            />
          </FormControl>
          <FormControl>
            <FormLabel sx={{ color: colors.textPrimary }}>Xác nhận mật khẩu</FormLabel>
            <TextField
              id="confirmpassword"
              type="password"
              placeholder="Xác nhận mật khẩu của bạn"
              fullWidth
              required
              InputProps={{ sx: { fontSize: "1rem", color: colors.textPrimary } }}
            />
          </FormControl>
          <FormControl>
            <FormLabel sx={{ color: colors.textPrimary }}>Email của bạn</FormLabel>
            <TextField
              id="email"
              type="email"
              placeholder="Nhập email của bạn"
              fullWidth
              required
              InputProps={{ sx: { fontSize: "1rem", color: colors.textPrimary } }}
            />
          </FormControl>
          <CustomButton type="submit" fullWidth>
            Đăng ký
          </CustomButton>
          <Typography textAlign="center" sx={{ color: colors.textPrimary }}>
            Đã có tài khoản?{" "}
            <Link href="/login" variant="body2" sx={{ color: colors.primary }}>
              Đến trang đăng nhập
            </Link>
          </Typography>
        </Box>
        <Divider sx={{ borderColor: colors.primary }}>hoặc</Divider>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <CustomButton
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            onClick={() => signIn("google")}
          >
            Đăng nhập với Google
          </CustomButton>
          <CustomButton
            fullWidth
            variant="outlined"
            startIcon={<FacebookIcon />}
            onClick={() => signIn("facebook")}
          >
            Đăng nhập với Facebook
          </CustomButton>
        </Box>
      </Card>
    </Box>
  );
}
