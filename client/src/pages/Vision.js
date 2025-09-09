// client/src/pages/Vision.js
import React from 'react';

const Vision = () => {
  return (
    <div className="bg-black text-yellow-400 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Vision & Manifesto</h1>
        
        <div className="bg-gray-900 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">My Vision for Bahati</h2>
          <p className="text-xl">
            "To transform Bahati into a model constituency characterized by sustainable development, 
            economic prosperity, and social harmony where every citizen has equal opportunities to thrive."
          </p>
        </div>
        
        <h2 className="text-3xl font-bold mb-6">Key Policies & Goals</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Education Revolution</h3>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Establish a technical training institute in every ward</li>
              <li>Provide digital learning devices for all students from Class 4</li>
              <li>Double the constituency bursary fund to KES 100 million annually</li>
              <li>Build modern libraries in all secondary schools</li>
              <li>Introduce school feeding program for all primary schools</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Healthcare for All</h3>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Upgrade all health centers to 24-hour facilities</li>
              <li>Establish specialized clinics for maternal and child health</li>
              <li>Introduce ambulance services for emergency response</li>
              <li>Provide free NHIF registration for all elderly citizens</li>
              <li>Build a modern maternity wing at Bahati Hospital</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Economic Empowerment</h3>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Establish an industrial park to create 5,000 jobs</li>
              <li>Provide interest-free loans for small businesses</li>
              <li>Create modern markets with storage facilities</li>
              <li>Promote agribusiness through value addition centers</li>
              <li>Establish a constituency investment fund</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Infrastructure Development</h3>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Tarmac 100km of roads in the next five years</li>
              <li>Provide clean water to every household</li>
              <li>Install solar street lights in all villages</li>
              <li>Expand electricity connectivity to 100% of households</li>
              <li>Build modern bus parks in all major trading centers</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-gray-900 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Trust My Leadership?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-yellow-400 text-black h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">✓</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Proven Track Record</h3>
              <p>My performance in the current term demonstrates my ability to deliver on promises and bring tangible development to Bahati.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-400 text-black h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">✓</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Transparency & Accountability</h3>
              <p>I have implemented an open governance model where constituents can track project implementation and expenditure.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-400 text-black h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">✓</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Community Involvement</h3>
              <p>I believe in participatory development where community members are involved in decision-making processes.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-900 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">My Commitment to Bahati</h2>
          <p className="mb-4">
            I pledge to serve with integrity, dedication, and transparency. My leadership will be characterized by:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>Regular constituency meetings to gather feedback and address concerns</li>
            <li>Quarterly performance reports accessible to all constituents</li>
            <li>An open-door policy where any resident can bring forward issues</li>
            <li>Collaboration with county and national government for maximum development impact</li>
            <li>Empowerment of youth and women through dedicated programs and resources</li>
            <li>Environmental conservation initiatives to protect our natural resources</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Vision;