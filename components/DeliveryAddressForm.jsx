import { Grid, Box, TextField } from "@mui/material";
// import AddressCard from "./AddressCard";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import axios from "axios";
import Loader from "@/components/Loader";

import { useState, useEffect } from "react";

export default function DeliveryAddressForm() {
  const cartItems = useSelector((state) => state.cart.cart);
  //   console.log(cartItems)
  const cartItemIds = cartItems.map((item) => item.id);
  //   console.log(cartItemIds)

  const { data: session } = useSession();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false); 
  }, []);

  if(loading) return <div className="flex justify-center mt-16"><Loader/></div>

  if (session) {
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = new FormData(e.currentTarget);

      const firstName = data.get("firstName");
      const lastName = data.get("lastName");
      const address = data.get("address");
      const city = data.get("city");
      const state = data.get("state");
      const zip = data.get("zip");
      const phoneNumber = data.get("phoneNumber");
      const email = session.user.email;
      const products = cartItemIds;

      //   console.log(products);
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

      if(response.data.url){
        window.location = response.data.url;
      }
    };
    return (
      <div className="mt-16 ">
        {/* <Grid container spacing={4}> */}
        {/* <Grid
              item
              xs={12}
              lg={5}
              className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
            >
              <div className="p-5  border-b- cursor-pointer">
                <AddressCard />
    
                <button
                  className="mt-2 block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none bg-[#D4DCAE] hover:bg-[#c5ce9c]"
                  type="button"
                >
                  Deliver Here
                </button>
              </div>
            </Grid> */}

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
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="given-name"
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
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal Code"
                    fullWidth
                    autoComplete="shipping postal-code"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <input type="hidden" value={cartItemIds} name="products" />
                <input type="hidden" name="email" value={session.user.email} />

                <Grid item xs={12}>
                  <button
                    className="w-fit mx-auto mt-2 block select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans  font-semibold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none bg-[#D4DCAE] hover:bg-[#c5ce9c]"
                    type="submit"
                  >
                    Deliver Here
                  </button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
        {/* </Grid> */}
      </div>
    );
  }
}
