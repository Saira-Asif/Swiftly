const PaymentPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">Payment Information</h1>
      
      {/* Accepted Payment Methods */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Accepted Payment Methods</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Cash on Delivery (COD)</li>
          <li>Digital Wallets (JazzCash, EasyPaisa)</li>
          <li>Credit & Debit Cards (Visa, MasterCard)</li>
        </ul>
      </section>
      
      {/* Security Assurance */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Security Assurance</h2>
        <p className="text-gray-700 mt-2">
          We ensure that all transactions are secured using end-to-end encryption. 
          Your payment details are never stored on our servers and are processed 
          securely through our trusted payment partners.
        </p>
      </section>
      
      {/* Payment Process */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Payment Process</h2>
        <ul className="list-decimal list-inside text-gray-700 mt-2">
          <li>Select your preferred payment method at checkout.</li>
          <li>For COD, pay the rider upon receiving your order.</li>
          <li>For digital wallets, scan the QR code or enter your details.</li>
          <li>For card payments, enter your card details securely.</li>
          <li>Once payment is confirmed, you'll receive an order confirmation.</li>
        </ul>
      </section>
      
      {/* Refunds & Failed Transactions */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Refunds & Failed Transactions</h2>
        <p className="text-gray-700 mt-2">
          In case of double deductions or failed transactions, the amount will be 
          automatically refunded within 5-7 business days. If you experience any issues, 
          please contact our <a href="/supportPage" className="text-blue-600 underline">Support Team</a> for assistance.
        </p>
      </section>
    </div>
  );
};

export default PaymentPage;
