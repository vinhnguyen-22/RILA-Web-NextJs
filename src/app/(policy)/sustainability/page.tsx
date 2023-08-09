import Heading from '@/components/common/Heading/Heading';
import React from 'react';

const Sustainability = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center my-[20px]">
        <div className="text-center">
          <Heading
            title="At RILA GLOBAL CONSULTING"
            subtitle=" we are deeply committed to sustainability and actively strive to lessen our carbon footprint. As a team of virtual employees, we understand the importance of preserving our planet for future generations. We are dedicated to implementing sustainable practices across our operations and work diligently to reduce our environmental impact."
          />
        </div>
      </div>

      <h2 className="font-semibold text-xl my-3">Our Sustainability Promise:</h2>
      <ol>
        <li>
          <h3 className="font-semibold text-lg">1. Carbon Footprint Reduction:</h3>
          <p className="text-justify">
            We continuously seek ways to minimize our carbon emissions by promoting remote work and utilizing digital
            technologies to reduce the need for travel and physical resources.
          </p>
        </li>
        <li>
          <h3 className="font-semibold text-lg">2. Paperless Operations:</h3>
          <p className="text-justify">
            We embrace a paperless work environment, prioritizing electronic communication, digital documentation, and
            cloud-based storage systems to reduce paper consumption.
          </p>
        </li>
        <li>
          <h3 className="font-semibold text-lg">3. Energy Efficiency:</h3>
          <p className="text-justify">
            We prioritize energy-efficient practices by utilizing eco-friendly equipment, implementing power-saving
            settings, and encouraging our team members to conserve energy in their home offices.
          </p>
        </li>
        <li>
          <h3 className="font-semibold text-lg">4. Waste Reduction and Recycling:</h3>
          <p className="text-justify">
            We are committed to waste reduction and proper recycling practices. We encourage our team to prioritize
            recycling and responsible waste management in their daily activities.
          </p>
        </li>
        <li>
          <h3 className="font-semibold text-lg">5. Sustainable Procurement:</h3>
          <p className="text-justify">
            We make conscious choices when sourcing products and services, favoring suppliers who share our commitment
            to sustainability and environmental responsibility.
          </p>
        </li>
        <li>
          <h3 className="font-semibold text-lg">6. Awareness and Education:</h3>
          <p className="text-justify">
            We believe in fostering a culture of sustainability within our organization. We promote awareness and
            provide educational resources to our team members, empowering them to make sustainable choices both
            professionally and personally.
          </p>
        </li>
        <li>
          <h3 className="font-semibold text-lg">7. Continuous Improvement:</h3>
          <p className="text-justify">
            We regularly evaluate our sustainability practices, set measurable goals, and strive for continuous
            improvement in reducing our environmental impact.
          </p>
        </li>
      </ol>
      <p className="text-justify">
        By incorporating these principles into our day-to-day operations, RILA aims to contribute to a greener, more
        sustainable future. Together, we can make a positive difference.
      </p>
    </>
  );
};

export default Sustainability;
