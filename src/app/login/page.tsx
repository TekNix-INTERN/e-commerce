"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiCard from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import HouseIcon from "@mui/icons-material/House";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { signIn } from "next-auth/react";

// Định nghĩa màu sắc
const colors = {
  primary: "#1976d2", 
  secondary: "#dc004e",
  background: "", 
  textPrimary: "#000", 
  textSecondary: "#fff", 
  border: "#e0e0e0"
};

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  width: "100%",
  maxWidth: "450px",
  backgroundColor: colors.background,
  borderRadius: theme.shape.borderRadius
}));

export default function LoginCard() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: 2,
        backgroundColor: colors.background
      }}
    >
      <Card variant="outlined">
        <Typography
          variant="h4"
          sx={{
            fontSize: "clamp(2rem, 10vw, 2.15rem)",
            textAlign: "left",
            color: colors.textPrimary
          }}
        >
          Đăng Nhập
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <FormControl>
            <FormLabel sx={{ color: colors.textPrimary }}>Email</FormLabel>
            <TextField
              id="email"
              type="email"
              placeholder="Nhập email của bạn"
              fullWidth
              required
              InputProps={{ sx: { color: colors.textPrimary } }}
            />
          </FormControl>
          <FormControl>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <FormLabel sx={{ color: colors.textPrimary }}>Mật khẩu</FormLabel>
              <Link component="button" variant="body2" sx={{ color: colors.primary }}>
                Quên mật khẩu?
              </Link>
            </Box>
            <TextField
              id="password"
              type="password"
              placeholder="******"
              fullWidth
              required
              InputProps={{ sx: { color: colors.textPrimary } }}
            />
          </FormControl>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 2
            }}
          >
            <FormControlLabel control={<Checkbox />} label="Nhớ đăng nhập" />
            <Button
              component="a"
              href="/"
              startIcon={<HouseIcon />}
              sx={{
                flexShrink: 0,
                color: colors.textPrimary,
                borderColor: colors.primary,
                '&:hover': {
                  borderColor: colors.primary,
                  backgroundColor: 'transparent'
                }
              }}
            >
              Về trang chủ
            </Button>
          </Box>

          <Button type="submit" fullWidth variant="contained" sx={{ backgroundColor: colors.primary }}>
            Đăng Nhập
          </Button>
          <Typography textAlign="center" sx={{ color: colors.textPrimary }}>
            Bạn đã có tài khoản?{" "}
            <Link href="/register" variant="body2" sx={{ color: colors.primary }}>
              Đăng ký
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
            Đăng nhập với Google
          </Button>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<FacebookIcon />}
            onClick={() => signIn('facebook')}
            sx={{ color: colors.textPrimary, borderColor: colors.primary }}
          >
            Đăng nhập với Facebook
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
