import { useRouter } from 'next/router';
import { Typography, Container } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import {
  clearCart,
} from "@/features/cartSlice";

const PaymentSuccess = () => {
  const router = useRouter();
  const { paymentId } = router.query; // Get the paymentId from the query
  const dispatch = useDispatch();

   useEffect(() => {
    if (typeof window === undefined) return;
    if (window.location.href.includes(`${paymentId}`)) {
      dispatch(clearCart());
    }
  }, []);

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Payment Successful
      </Typography>
      <Typography variant="body1">
        Thank you for your payment! Your transaction ID is: <strong>{paymentId}</strong>
      </Typography>
      <Typography variant="body2" style={{ marginTop: '1rem' }}>
        We are processing your order and will update you soon.
      </Typography>
    </Container>
  );
};

export default PaymentSuccess;
