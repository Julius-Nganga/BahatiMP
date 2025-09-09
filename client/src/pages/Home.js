// client/src/pages/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="bg-black text-yellow-400">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Mary Justus Mannaby</h2>
            <p className="text-2xl mb-6">DCP Candidate for Bahati Constituency</p>
            <p className="text-xl mb-8">"Progress Through Unity and Action"</p>
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition">
              Join Our Campaign
            </button>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/MARY.PNG" 
              alt="Mary Justus Mannaby" 
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Quick Introduction */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Dedicated to Serving Bahati</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-black rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Experience</h3>
              <p>10+ years of public service and community development</p>
            </div>
            <div className="p-6 bg-black rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Values</h3>
              <p>Transparency, Accountability, and Inclusive Growth</p>
            </div>
            <div className="p-6 bg-black rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Mission</h3>
              <p>To make Bahati a model constituency in development and governance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;