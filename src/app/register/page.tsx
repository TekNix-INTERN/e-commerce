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
import FacebookIcon from '@mui/icons-material/Facebook';

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  width: "100%",
  maxWidth: "450px",
  boxSizing: "border-box",
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
          Sign up
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <FormControl>
            <FormLabel>User Name</FormLabel>
            <TextField
              id="username"
              type="text"
              placeholder="Enter Your Username"
              fullWidth
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <TextField
              id="password"
              type="password"
              placeholder="Enter Your Password"
              fullWidth
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Confirm Password</FormLabel>
            <TextField
              id="confirmpassword"
              type="password"
              placeholder="Confirm Your Password"
              fullWidth
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Your Email</FormLabel>
            <TextField
              id="email"
              type="email"
              placeholder="Enter Your Email"
              fullWidth
              required
            />
          </FormControl>
          <Button type="submit" fullWidth variant="contained">
            Sign up
          </Button>
          <Typography textAlign="center" >
            Already have an account?{" "}
            <Link href="/login" variant="body2">
              Go to login
            </Link>
          </Typography>
        </Box>
        <Divider>or</Divider>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Button fullWidth variant="outlined" startIcon={<GoogleIcon />}>
            Sign in with Google
          </Button>
          <Button fullWidth variant="outlined" startIcon={<FacebookIcon />}>
            Sign in with Facebook
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
