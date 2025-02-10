
"use client"

export default function SupportPage() {
  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries()); // Convert FormData to JSON

    try {
      const response = await fetch("/api/support", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      alert(result.message); // Show success/error message
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Customer Support</h1>
      <p className="text-gray-600">
        Need help? Our support team is available to assist you with any questions or concerns.
      </p>

      {/* Support Form */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700">Submit a Support Request</h2>
        
        {/* Attach handleSubmit to onSubmit */}
        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input type="text" name="name" required className="w-full p-2 border border-gray-300 rounded" />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" name="email" required className="w-full p-2 border border-gray-300 rounded" />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input type="tel" name="phone" required className="w-full p-2 border border-gray-300 rounded" />
          </div>

          {/* Issue Description */}
          <div>
            <label className="block text-gray-700">Describe Your Issue</label>
            <textarea name="issue" required className="w-full p-2 border border-gray-300 rounded h-28"></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
