// import { Grid, Box, TextField } from "@mui/material";
// // import AddressCard from "./AddressCard";
// import { useSelector } from "react-redux";
// import { useSession } from "next-auth/react";
// import axios from "axios";
// import Loader from "@/components/Loader";

// import { useState, useEffect } from "react";

// export default function DeliveryAddressForm() {
//   const cartItems = useSelector((state) => state.cart.cart);
//   //   console.log(cartItems)
//   const cartItemIds = cartItems.map((item) => item.id);
//   //   console.log(cartItemIds)

//   const { data: session } = useSession();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(false); 
//   }, []);

//   if(loading) return <div className="flex justify-center mt-16"><Loader/></div>

//   if (session) {
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       const data = new FormData(e.currentTarget);

//       const firstName = data.get("firstName");
//       const lastName = data.get("lastName");
//       const address = data.get("address");
//       const city = data.get("city");
//       const state = data.get("state");
//       const zip = data.get("zip");
//       const phoneNumber = data.get("phoneNumber");
//       const email = session.user.email;
//       const products = cartItemIds;

//       //   console.log(products);
//       const response = await axios.post("/api/checkout", {
//         firstName,
//         lastName,
//         address,
//         city,
//         state,
//         zip,
//         phoneNumber,
//         email,
//         products,
//       });

//       if(response.data.url){
//         window.location = response.data.url;
//       }
//     };
//     return (
//       <div className="mt-16 ">
//         {/* <Grid container spacing={4}> */}
//         {/* <Grid
//               item
//               xs={12}
//               lg={5}
//               className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
//             >
//               <div className="p-5  border-b- cursor-pointer">
//                 <AddressCard />
    
//                 <button
//                   className="mt-2 block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none bg-[#D4DCAE] hover:bg-[#c5ce9c]"
//                   type="button"
//                 >
//                   Deliver Here
//                 </button>
//               </div>
//             </Grid> */}

//         <Grid item xs={12} lg={7}>
//           <Box className="border rounded-md shadow-md p-5">
//             <form onSubmit={handleSubmit}>
//               <Grid container spacing={3}>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="firstName"
//                     name="firstName"
//                     label="First Name"
//                     fullWidth
//                     autoComplete="given-name"
//                   />
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="lastName"
//                     name="lastName"
//                     label="Last Name"
//                     fullWidth
//                     autoComplete="given-name"
//                   />
//                 </Grid>

//                 <Grid item xs={12}>
//                   <TextField
//                     required
//                     id="address"
//                     name="address"
//                     label="Address"
//                     fullWidth
//                     autoComplete="given-name"
//                     multiline
//                     rows={4}
//                   />
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="city"
//                     name="city"
//                     label="City"
//                     fullWidth
//                     autoComplete="given-name"
//                   />
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="state"
//                     name="state"
//                     label="State/Province/Region"
//                     fullWidth
//                     autoComplete="given-name"
//                   />
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="zip"
//                     name="zip"
//                     label="Zip / Postal Code"
//                     fullWidth
//                     autoComplete="shipping postal-code"
//                   />
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="phoneNumber"
//                     name="phoneNumber"
//                     label="Phone Number"
//                     fullWidth
//                     autoComplete="given-name"
//                   />
//                 </Grid>
//                 <input type="hidden" value={cartItemIds} name="products" />
//                 <input type="hidden" name="email" value={session.user.email} />

//                 <Grid item xs={12}>
//                   <button
//                     className="w-fit mx-auto mt-2 block select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans  font-semibold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none bg-[#D4DCAE] hover:bg-[#c5ce9c]"
//                     type="submit"
//                   >
//                     Deliver Here
//                   </button>
//                 </Grid>
//               </Grid>
//             </form>
//           </Box>
//         </Grid>
//         {/* </Grid> */}
//       </div>
//     );
//   }
// }

import { Grid, Box, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import axios from "axios";
import Loader from "@/components/Loader";
import { useState, useEffect } from "react";
import { useRouter } from "next/router"; // Import useRouter
import toast from "react-hot-toast";

export default function DeliveryAddressForm() {
  const cartItems = useSelector((state) => state.cart.cart);
  const cartItemIds = cartItems.map((item) => item.id);
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false); // Button loading state
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <div className="flex justify-center mt-16"><Loader /></div>;

  if (session) {
  const handleSubmit = async (e) => {
  e.preventDefault();
  setButtonLoading(true); // Disable button while processing

  const data = new FormData(e.currentTarget);

  // Extracting data from form
  const firstName = data.get("firstName");
  const lastName = data.get("lastName");
  const address = data.get("address");
  const city = data.get("city");
  const state = data.get("state");
  const zip = data.get("zip");
  const phoneNumber = data.get("phoneNumber");
  const email = session.user.email;
  const products = cartItemIds;

  // Validation for phone number and postal code
  if (!/^\d+$/.test(phoneNumber)) {
    toast.error("Phone number must contain only numbers.");
    setButtonLoading(false);
    return;
  }

  if (!/^\d+$/.test(zip)) {
    toast.error("Postal code must contain only numbers.");
    setButtonLoading(false);
    return;
  }

  try {
    // Call backend API to create an order
    const response = await axios.post("/api/checkout", {
      firstName,
      lastName,
      address,
      city,
      state,
      zip,
      phoneNumber,
      email,
      products,
    });

    // Razorpay integration on success
    const { orderId, amount, currency } = response.data;
    console.log(orderId , amount , currency)

    const options = {
      key: process.env.RAZORPAY_KEY_ID, // Razorpay key ID
      amount, // amount in paise
      currency,
      name: "Your Store",
      description: "Order Payment",
      order_id: orderId, // Razorpay Order ID
      handler: async function (razorpayResponse) {
        try {
          // Call your backend API to update the order status to paid
          const updateResponse = await axios.post("/api/updatePaymentStatus", {
            orderId: orderId, // Use the orderId from the checkout response
            paymentId: razorpayResponse.razorpay_payment_id, // Payment ID from Razorpay
            status: "paid", // Update paid status
          });

          // Show success message after the payment status update
          if (updateResponse.status === 200) {
            toast.success("Payment successful and order updated!");
            // Redirect to success page with paymentId as query parameter
            router.push({
              pathname: "/paymentSuccess",
              query: { paymentId: razorpayResponse.razorpay_payment_id }, // Pass paymentId here
            });
          } else {
            toast.error("Order update failed.");
          }
        } catch (error) {
          console.error("Failed to update payment status", error);
          toast.error("Payment succeeded, but failed to update order status.");
        }
      },
      prefill: {
        name: `${firstName} ${lastName}`,
        email,
        contact: phoneNumber,
      },
      theme: {
        color: "#F37254",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();

  } catch (error) {
    console.error("Payment failed", error);
    toast.error("Payment failed. Please try again.");
  } finally {
    setButtonLoading(false); // Re-enable button after processing
  }
};
  return (
    <div className="mt-16">
      <Grid item xs={12} lg={7}>
        <Box className="border rounded-md shadow-md p-5">
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  fullWidth
                  autoComplete="family-name"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  id="address"
                  name="address"
                  label="Address"
                  fullWidth
                  autoComplete="address-line1"
                  multiline
                  rows={4}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  autoComplete="address-level2"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="state"
                  name="state"
                  label="State/Province/Region"
                  fullWidth
                  autoComplete="address-level1"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Zip / Postal Code"
                  fullWidth
                  autoComplete="postal-code"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Phone Number"
                  fullWidth
                  autoComplete="tel"
                />
              </Grid>

              <input type="hidden" value={cartItemIds} name="products" />
              <input type="hidden" name="email" value={session.user.email} />

              <Grid item xs={12}>
                <button
                  className={`w-fit mx-auto mt-2 block select-none rounded-lg py-3 px-6 text-center align-middle font-sans font-semibold uppercase transition-all ${
                    buttonLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  type="submit"
                  disabled={buttonLoading}
                  style={{
                    backgroundColor: buttonLoading ? "#d4d4d4" : "#D4DCAE",
                  }}
                >
                  {buttonLoading ? "Processing..." : "Deliver Here"}
                </button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </div>
  );
}


  return (
    <div className="text-center mt-16">
      <p>Please log in to place an order.</p>
    </div>
  );
}
