import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        p: 2,
        backgroundColor: 'primary.main',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Typography variant="body1">© 2024 My E-commerce. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
