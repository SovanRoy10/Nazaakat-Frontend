import AddressCard from "./AddressCard";
import Cart from "@/pages/cart";

export default function OrderSummery() {
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard />
      </div>

      <Cart btnText="Payment" txtSize={3} />
    </div>
  );
}
