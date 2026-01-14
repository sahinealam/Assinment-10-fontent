import React from "react";

const AdoptFromPawMart = () => {
  return (
    <div>
      <section className="bg-orange-50 py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">
            🐾 Why Adopt from PawMart?
          </h2>

          <p className="text-gray-700 text-lg mb-8">
            Every pet deserves a loving home. By adopting from PawMart, you’re
            not just gaining a loyal companion—you’re saving a life.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">❤️ Save Lives</h3>
              <p className="text-gray-600">
                Adoption gives rescued animals a second chance at happiness and
                safety.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">
                🐶 Healthy & Vaccinated
              </h3>
              <p className="text-gray-600">
                Our pets receive medical care, vaccinations, and lots of love.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">
                🌍 Fight Pet Overpopulation
              </h3>
              <p className="text-gray-600">
                Choosing adoption helps reduce unethical breeding and
                overcrowded shelters.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdoptFromPawMart;
