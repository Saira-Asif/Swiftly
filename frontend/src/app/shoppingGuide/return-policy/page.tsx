const ReturnPolicyPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Return & Refund Policy</h1>
      <p className="text-lg mb-4">
        Our return and refund policy is designed to ensure customer satisfaction while maintaining hygiene and quality standards.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6">Return Eligibility</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>Perishable grocery items (vegetables, fruits, dairy, meat) <strong>cannot be returned</strong> unless they are expired, spoiled, or incorrect.</li>
        <li>Non-perishable items (packaged goods) can be returned within <strong>24 hours</strong> if unopened.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6">Refund Policy</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>Refunds will be processed via <strong>the original payment method</strong> (e.g., JazzCash, EasyPaisa, bank transfer) within <strong>3-5 working days</strong>.</li>
        <li><strong>Cash on Delivery (COD) orders</strong> are eligible for store credit or exchange.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6">How to Request a Return</h2>
      <ol className="list-decimal pl-5 mb-4">
        <li>Contact our support team within <strong>24 hours</strong> of delivery.</li>
        <li>Provide order details and proof (images) if necessary.</li>
        <li>Our team will schedule a <strong>pickup or replacement</strong>.</li>
      </ol>
      
      <h2 className="text-2xl font-semibold mt-6">Exceptions</h2>
      <p className="mb-4">We do not accept returns for:</p>
      <ul className="list-disc pl-5 mb-4">
        <li>Opened or used items.</li>
        <li>Items without proof of issue (damaged or incorrect product images).</li>
        <li>Orders reported after <strong>24 hours</strong> of delivery.</li>
      </ul>
    </div>
  );
};

export default ReturnPolicyPage;
