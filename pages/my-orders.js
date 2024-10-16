import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from "@/components/Loader";

export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('/api/orders');
        setOrders(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

 if(loading) return <div className="flex justify-center mt-16"><Loader/></div>

  if (orders.length === 0) {
    return <div className='flex justify-center mt-10 md:text-2xl'>No orders found 😔</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-[#D4DCAE] text-black text-xs font-medium uppercase tracking-wider text-left">
            <tr>
              <th className="px-6 py-3">Order ID</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Products</th>
              <th className="px-6 py-3">Total</th>
              <th className="px-6 py-3">Paid</th>
              <th className="px-6 py-3">Payment ID</th> {/* Added Payment ID Column */}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order._id} className="hover:bg-[#ecede6] transition-colors duration-200">
                <td className="px-6 py-4 font-semibold text-gray-800">{order.orderId}</td>
                <td className="px-6 py-4 text-gray-600">
                  {new Date(order.createdAt).toLocaleDateString('en-US')}
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {order.line_items.map((item, idx) => (
                    <div key={idx} className="mb-4 flex items-center space-x-4">
                      {/* Order Title and Quantity */}
                      <div>
                        <p className="font-medium">{item.price_data.product_data.name}</p>
                        <p className="text-sm text-gray-500">
                          Quantity: {item.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {order.line_items
                    .reduce(
                      (total, item) =>
                        total + (item.price_data.unit_amount / 100) * item.quantity,
                      0
                    )
                    .toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
                </td>
                <td className="px-6 py-4">
                  {order.paid ? (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      Paid
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                      Not Paid
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-gray-600">{order.paymentId || 'N/A'}</td> {/* Display Payment ID */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
