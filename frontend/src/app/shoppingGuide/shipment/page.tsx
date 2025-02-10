const ShipmentPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Shipping & Delivery</h1>
      <p className="text-lg mb-4">
        We ensure fast and reliable grocery delivery exclusively in Bahria Town Karachi.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6">Delivery Areas</h2>
      <p className="mb-4">We currently deliver within the following sectors of Bahria Town Karachi: Precinct 1, Precinct 2, Precinct 5, Precinct 10, Precinct 12, Precinct 35.</p>
      
      <h2 className="text-2xl font-semibold mt-6">Estimated Delivery Time</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>Instant Delivery: 30-60 minutes</li>
        <li>Scheduled Delivery: Same-day or next-day</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6">Order Tracking</h2>
      <p className="mb-4">Track your rider in real-time using our integrated live map tracking system.</p>
      
      <h2 className="text-2xl font-semibold mt-6">How It Works</h2>
      <ol className="list-decimal pl-5 mb-4">
        <li>Place your order through our website.</li>
        <li>Choose instant or scheduled delivery.</li>
        <li>Our local rider picks and delivers your groceries.</li>
        <li>Track your order live until it reaches your doorstep.</li>
      </ol>
    </div>
  );
};

export default ShipmentPage;
