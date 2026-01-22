const About = () => {
  return (
    <div className="container mx-auto px-16 py-8">
      <h1 className="text-3xl font-bold text-teal-600 mb-6">About Besi Reviews</h1>

      <div className="space-y-8">
        {/* Vision Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700">
            To be the most trusted platform for honest, comprehensive product reviews,
            empowering consumers to make informed purchasing decisions in an increasingly
            complex marketplace.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            We strive to provide unbiased, detailed product reviews that help consumers
            find the best products for their needs. Our goal is to bridge the gap between
            manufacturers and consumers through transparent, authentic feedback.
          </p>
        </div>

        {/* Goals Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Our Goals</h2>
          <ul className="text-gray-700 space-y-2">
            <li>• Deliver honest and unbiased product reviews</li>
            <li>• Build a community of informed consumers</li>
            <li>• Partner with reputable brands and manufacturers</li>
            <li>• Continuously improve our review methodology</li>
            <li>• Expand our coverage to more product categories</li>
          </ul>
        </div>

        {/* Team Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-teal-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-teal-600">BS</span>
              </div>
              <h3 className="font-semibold">Besi Sathvik</h3>
              <p className="text-gray-600">Founder and ceo </p>
              <p className="text-sm text-gray-500 mt-2">
                Passionate about consumer rights and product quality.
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-teal-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-teal-600">MD</span>
              </div>
              <h3 className="font-semibold">Madhav Datta</h3>
              <p className="text-gray-600">Head of Review</p>
              <p className="text-sm text-gray-500 mt-2">
                Expert in product testing and review methodologies.
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-teal-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-teal-600">SS</span>
              </div>
              <h3 className="font-semibold">Sarvan Singh</h3>
              <p className="text-gray-600">Technical Lead</p>
              <p className="text-sm text-gray-500 mt-2">
                Ensures our platform runs smoothly and securely.
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-teal-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-teal-600">JC</span>
              </div>
              <h3 className="font-semibold">Jaya Chandra</h3>
              <p className="text-gray-600">Marketing Director</p>
              <p className="text-sm text-gray-500 mt-2">
                Drives brand awareness and user engagement initiatives.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-teal-600">Integrity</h3>
              <p className="text-gray-700 text-sm">
                We maintain the highest standards of honesty and transparency in all our reviews.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-teal-600">Quality</h3>
              <p className="text-gray-700 text-sm">
                Every review undergoes rigorous testing and verification processes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-teal-600">Community</h3>
              <p className="text-gray-700 text-sm">
                We foster a community where consumers can share experiences and learn from each other.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-teal-600">Innovation</h3>
              <p className="text-gray-700 text-sm">
                We continuously evolve our platform to better serve our user needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;