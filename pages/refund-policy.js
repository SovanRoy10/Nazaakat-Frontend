export default function RefundPolicy() {
  return (
    <div className="max-w-4xl mx-auto  p-8 ">
      <h1 className="text-3xl font-semibold mb-8">Refund Policy</h1>

      <p className="mb-4">
        Thank you for shopping at Nazaakat Clothing. If you are not entirely
        satisfied with your purchase, we're here to help.
      </p>

      <p className="mb-4">
        Order once placed can only be cancelled within 4 hours from the placing
        the order, you can write to our customer support team on
        nazaakat99@gmail.com or call us on 9674707842 In such cases, the order
        will be cancelled and the money will be refunded to you within 48-72
        business hours after the cancellation request. Returns is a scheme
        provided by the seller directly under this policy in terms of which the
        option of exchange, replacement and/ or refund is offered by the seller
        to you. Products listed under a particular category may not have the
        same returns policy. For all products, the policy on the product page
        shall prevail over the general returns policy. Do refer the respective
        item’s applicable return policy on the product page for any exceptions
        to the table below.
      </p>

      <table className="w-full bg-white rounded-lg shadow-md">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-3 px-4 text-left">Category</th>
            <th className="py-3 px-4 text-left">
              Returns Window, Actions Possible, Conditions (if any)
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-4 px-4">
              Lifestyle: Fashion Accessories, Apparels 5 days
            </td>
            <td>Refund, replacement or exchange</td>
          </tr>
          <tr>
            <td className="py-4 px-4">No Returns categories</td>
            <td className="py-4 px-4">
              Some products in the above categories are not returnable due to
              their nature or other reasons. For all products, the policy on the
              product page shall prevail.
            </td>
          </tr>
        </tbody>
      </table>

      <p className="my-4">
        Products that do not meet these criteria will not be considered for
        return.
      </p>

      <p className="mb-4">
        Returns Pick-Up and Processing In case of returns where you would like
        item(s) to be picked up from a different address, the address can only
        be changed if pick-up service is available at the new address
      </p>

      <h2 className="text-xl font-semibold my-4">
        During pick-up, your product will be checked for the following
        conditions:
      </h2>

      <table className="w-full bg-white rounded-lg shadow-md">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-3 px-4 text-left">Category</th>
            <th className="py-3 px-4 text-left">Conditions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-4 px-4">Correct Product</td>
            <td>
              IMEI/ name/ image/ brand/ serial number/ article number/ bar code
              should match and MRP tag should be undetached and clearly visible.
            </td>
          </tr>
          <tr>
            <td className="py-4 px-4">Complete Product</td>
            <td className="py-4 px-4">
              All in-the-box accessories freebies and combos (if any) should be
              present.
            </td>
          </tr>
          <tr>
            <td className="py-4 px-4">Unused Product</td>
            <td className="py-4 px-4">
              The product should be unused, unwashed, unsoiled, without any
              stains and with non-tampered quality check seals/return
              tags/warranty seals (wherever applicable).
            </td>
          </tr>
          <tr>
            <td className="py-4 px-4">Undamaged Product</td>
            <td className="py-4 px-4">
              The product should be undamaged and without any scratches, dents,
              tears or holes.
            </td>
          </tr>
          <tr>
            <td className="py-4 px-4">Undamaged Packaging</td>
            <td className="py-4 px-4">
              Product’s original packaging/ box should be undamaged.
            </td>
          </tr>
        </tbody>
      </table>

      <p className="mb-4">
        The field executive will refuse to accept the return if any of the above
        conditions are not met. For any products for which a refund is to be
        given, the refund will be processed once the returned product has been
        received by the seller.
      </p>

      <h2 className="text-2xl font-bold mb-4">
        General Rules for a Successful Return
      </h2>
      <ul className="list-disc list-inside">
        <li className="mb-4">
          In certain cases where the seller is unable to process a replacement
          for any reason whatsoever, a refund will be given.
        </li>
        <li className="mb-4">
          During open box deliveries, while accepting your order, if you
          received a different or a damaged product, you will be given a refund.
          Once you have accepted an open box delivery, no return request will be
          processed, except for manufacturing defects. In such cases, this
          category-specific replacement/return general conditions will be
          applicable.
        </li>
        <li className="mb-4">
          Mode of refund may vary depending on circumstances. If the mode of
          refund is by Credit/Debit Card or Net Banking, please allow 10 to 14
          working days for the credit to appear in your account. While we regret
          any inconvenience caused by this time frame, it is the bank’s policy
          that delays the refund timing and we have no control over that. If the
          mode of refund is by e-wallet, credit should be available within 24
          hours.
        </li>
        <li className="mb-4">
          During peak seasons please allow up to 15-18 business days for your
          return to process.
        </li>
        <li>
          To request a refund, simply email us at{" "}
          <a href="mailto:nazaakat99@gmail.com" className="text-blue-500">
          nazaakat99@gmail.com
          </a>{" "}
          OR call us at{" "}
          <a href="tel:9674707842" className="text-blue-500">
          9674707842
          </a>{" "}
          and provide your order details, including the reason why you’re
          requesting a refund. We take customer feedback very seriously and use
          it to constantly improve our quality of service.
        </li>
      </ul>
    </div>
  );
}
