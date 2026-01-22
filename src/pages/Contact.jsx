const Contact = () => {
  return (
    <div className="container mx-auto px-16 py-8">
      <h1 className="text-3xl font-bold text-teal-600 mb-6">Contact Us</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-gray-700 mb-4">
          We would love to hear from you! Whether you have questions about our product reviews,
          want to suggest a product, or just want to say hello, feel free to reach out.
        </p>
        <div className="space-y-3">
          <div>
            <strong>Email:</strong> contact@besireviews.com
          </div>
          <div>
            <strong>Phone:</strong> (+91) 93911xxxxx
          </div>
          <div>
            <strong>Address:</strong> 123 Review Street, kadapa City, PC 516390
          </div>
          <div>
            <strong>Business Hours:</strong> Monday - Friday, 9 AM - 5 PM IST
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;