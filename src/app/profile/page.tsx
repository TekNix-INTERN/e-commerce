// app/profile/page.tsx
import {
    Container,
    Box,
    Typography,
    Button,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";
  import Header from "../../components/Header";
  import Footer from "../../components/Footer";
  
  const fetchUserData = async () => {
    return {
      firstname: "Ho",
      lastname: "man",
      email: "123@test.com",
      contact_info: "87251232312",
      address: "Cần Thơ",
      created_on: "23/9/2024",
      photo: "/",
    };
  };
  
  const fetchTransactionData = async () => {
    return [
      { id: 1, sales_date: "2024-01-10", pay_id: "TX1001", total: 250.0 },
      { id: 2, sales_date: "2024-01-15", pay_id: "TX1002", total: 450.0 },
    ];
  };
  
  const ProfilePage = async () => {
    const user = await fetchUserData();
    const transactions = await fetchTransactionData();
  
    return (
      <div>
        <Header />
        <Container maxWidth="lg">
          <Box my={4}>
            <Typography variant="h3" gutterBottom>
              Hồ Sơ Người Dùng
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Paper elevation={3} style={{ padding: 16, textAlign: "center" }}>
                  {/* <img
                    src={`/logo.jpg`}
                    alt="Profile"
                    style={{
                      width: "100%",
                      borderRadius: "50%",
                      border: "2px solid #e0e0e0",
                    }}
                  /> */}
                  <Typography variant="h5" style={{ marginTop: 16 }}>
                    {user.firstname} {user.lastname}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {user.email}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: 16 }}
                  >
                    Chỉnh Sửa Hồ Sơ
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={12} md={8}>
                <Paper elevation={3} style={{ padding: 16 }}>
                  <Typography variant="h5" gutterBottom>
                    Thông Tin Liên Hệ
                  </Typography>
                  <Typography variant="body1">
                    Điện thoại: {user.contact_info}
                  </Typography>
                  <Typography variant="body1">
                    Địa chỉ: {user.address}
                  </Typography>
                </Paper>
                <Box mt={4}>
                  <Typography variant="h5" gutterBottom>
                    Lịch Sử Giao Dịch
                  </Typography>
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Ngày</TableCell>
                          <TableCell>Số Giao Dịch</TableCell>
                          <TableCell>Số Tiền</TableCell>
                          <TableCell>Chi Tiết</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {transactions.map((transaction) => (
                          <TableRow key={transaction.id}>
                            <TableCell>
                              {new Date(transaction.sales_date).toLocaleDateString()}
                            </TableCell>
                            <TableCell>{transaction.pay_id}</TableCell>
                            <TableCell>${transaction.total.toFixed(2)}</TableCell>
                            <TableCell>
                              <Button variant="contained" color="info">
                                Xem Chi Tiết
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Footer />
      </div>
    );
  };
  
  export default ProfilePage;
  