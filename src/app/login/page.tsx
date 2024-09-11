'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MuiCard from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';


import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

const Card = styled(MuiCard)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    width: "100%", 
    maxWidth: "450px", 
  }));
  
  export default function SignInCard() {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", 
          padding: 2, // Thêm khoảng cách từ viền màn hình
        }}
      >
        <Card variant="outlined">
          <Typography
            variant="h4"
            sx={{ fontSize: "clamp(2rem, 10vw, 2.15rem)", textAlign: "left" }}
          >
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <FormControl>
              <FormLabel>Email</FormLabel>
              <TextField
                id="email"
                type="email"
                placeholder="enter your email"
                fullWidth
                required
              />
            </FormControl>
            <FormControl>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <FormLabel>Password</FormLabel>
                <Link component="button" variant="body2">
                  Forgot your password?
                </Link>
              </Box>
              <TextField
                id="password"
                type="password"
                placeholder="******"
                fullWidth
                required
              />
            </FormControl>
            <FormControlLabel control={<Checkbox />} label="Remember me" />
            <Button type="submit" fullWidth variant="contained">
              Sign in
            </Button>
            <Typography textAlign="center" >
            Already have an account?{" "}
              <Link href="/register" variant="body2">
                Sign up
              </Link>
            </Typography>
          </Box>
          <Divider>or</Divider>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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