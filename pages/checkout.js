// import * as React from "react";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import { useRouter } from "next/router";
// import DeliveryAddressForm from "@/components/DeliveryAddressForm";
// import LayoutPage from "@/components/Layout";

// const steps = ["Login", "Delivery address", "Payment"];

// export default function CheckOut() {
//   // const [activeStep, setActiveStep] = React.useState(0);
//   const router = useRouter();
//   // console.log(typeof router.query.step)

//   const step = parseInt(router.query.step);
//   //   console.log(typeof step)

//   // Check if step is NaN or not provided, set it to a default value if so
//   const parsedStep = !isNaN(step) ? step : 0;

//   return (
//     <LayoutPage>
//       <div className="px-10 lg:px-20 mt-10">
//         <Box sx={{ width: "100%" }}>
//           <Stepper activeStep={parsedStep}>
//             {steps.map((label, index) => {
//               const stepProps = {};
//               const labelProps = {};

//               return (
//                 <Step key={label} {...stepProps}>
//                   <StepLabel {...labelProps}>{label}</StepLabel>
//                 </Step>
//               );
//             })}
//           </Stepper>

//           <div>{step === 1 && <DeliveryAddressForm />}</div>
//         </Box>
//       </div>
//     </LayoutPage>
//   );
// }


import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useRouter } from "next/router";
import DeliveryAddressForm from "@/components/DeliveryAddressForm";
import LayoutPage from "@/components/Layout";

const steps = ["Login", "Delivery address", "Payment"];

export default function CheckOut() {
  const router = useRouter();
  const step = parseInt(router.query.step);
  const parsedStep = !isNaN(step) ? step : 0;

  return (
    <LayoutPage>
      <div className="px-10 lg:px-20 mt-10">
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={parsedStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <div>{step === 1 && <DeliveryAddressForm />}</div>
        </Box>
      </div>
    </LayoutPage>
  );
}
