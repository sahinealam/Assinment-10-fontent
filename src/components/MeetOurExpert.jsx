import React from 'react';

const MeetOurExpert = () => {
   return (
        <section>
            <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
                Meet Our Pet Care Experts
            </h2>

            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 text-center">
                <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
                    <img
                        src="https://i.ibb.co.com/cKTZMBcq/13.png"
                        alt="Dr. Sahine Alam"
                        className="w-32 h-32 mx-auto rounded-full object-cover mb-3"
                    />
                    <h3 className="text-lg font-semibold">Sahine Alam</h3>
                    <p className="text-sm text-green-600">Veterinary Specialist</p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
                    <img
                        src="https://i.ibb.co.com/1YnFGv4V/15.png"
                        alt="Aisha Rahman"
                        className="w-32 h-32 mx-auto rounded-full object-cover mb-3"
                    />
                    <h3 className="text-lg font-semibold">Aisha Rahman</h3>
                    <p className="text-sm text-green-600">Pet Adoption Counselor</p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
                    <img
                        src="https://i.ibb.co.com/kY55pVZ/16.png"
                        alt="Sadia Chowdhury"
                        className="w-32 h-32 mx-auto rounded-full object-cover mb-3"
                    />
                    <h3 className="text-lg font-semibold">Sadia Chowdhury</h3>
                    <p className="text-sm text-green-600">Certified Pet Trainer</p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
                    <img
                        src="https://i.ibb.co.com/JWm1mW2j/14.png"
                        alt="Ovi Islam"
                        className="w-32 h-32 mx-auto rounded-full object-cover mb-3"
                    />
                    <h3 className="text-lg font-semibold">Akaid Islam</h3>
                    <p className="text-sm text-green-600">Pet Nutrition & Care Expert</p>
                </div>
            </div>
        </section>
    );
};

export default MeetOurExpert;