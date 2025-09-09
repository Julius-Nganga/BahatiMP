// client/src/pages/About.js
import React from 'react';

const About = () => {
  return (
    <div className="bg-black text-yellow-400 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About Mary Justus Mannaby</h1>
        
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <img 
              src="/MARY.PNG" 
              alt="Mary Justus Mannaby" 
              className="rounded-lg shadow-lg w-full max-w-xs mx-auto"
            />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h2 className="text-2xl font-bold mb-4">Biography</h2>
            <p className="mb-4">
              Mary Justus Mannaby is a dedicated public servant and a member of the Democratic Change Party (DCP) 
              who has been serving as the Member of Parliament for Bahati Constituency since 2017. With over a 
              decade of experience in public service, Mary has established herself as a passionate advocate for 
              community development, education, and economic empowerment.
            </p>
            <p className="mb-4">
              Born and raised in Bahati, Mary understands the unique challenges and opportunities facing the 
              constituency. Her journey in politics began at the grassroots level, where she worked tirelessly 
              to improve access to education and healthcare for underserved communities.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-900 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4">Background & Education</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="text-xl font-bold">Academic Qualifications</h3>
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>Master's Degree in Public Administration, University of Nairobi</li>
                <li>Bachelor's Degree in Political Science, Kenyatta University</li>
                <li>Diploma in Community Development, Kenya Institute of Social Work</li>
              </ul>
            </li>
            <li>
              <h3 className="text-xl font-bold">Professional Experience</h3>
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>Member of Parliament, Bahati Constituency (2017-Present)</li>
                <li>County Executive Committee Member for Education, Nakuru County (2013-2017)</li>
                <li>Program Coordinator, Bahati Community Development Initiative (2008-2013)</li>
                <li>Teacher, Bahati Secondary School (2005-2008)</li>
              </ul>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-900 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Achievements as MP</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <ul className="list-disc list-inside ml-4">
                <li>Built 5 new primary schools in underserved areas</li>
                <li>Provided scholarships for over 500 needy students</li>
                <li>Established computer labs in all secondary schools</li>
                <li>Renovated 15 existing school facilities</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Healthcare</h3>
              <ul className="list-disc list-inside ml-4">
                <li>Upgraded Bahati Health Center to a Level 4 Hospital</li>
                <li>Initiated mobile clinic services for remote areas</li>
                <li>Provided medical equipment worth KES 50 million</li>
                <li>Established NHIF registration centers in all wards</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Infrastructure</h3>
              <ul className="list-disc list-inside ml-4">
                <li>Tarmacked over 50km of roads in the constituency</li>
                <li>Installed solar street lights in trading centers</li>
                <li>Constructed 5 new markets for small traders</li>
                <li>Improved water access through borehole projects</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Youth & Women Empowerment</h3>
              <ul className="list-disc list-inside ml-4">
                <li>Established youth empowerment centers in all wards</li>
                <li>Provided startup capital for over 200 youth and women groups</li>
                <li>Created vocational training programs for out-of-school youth</li>
                <li>Initiated annual talent search and sports tournaments</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;