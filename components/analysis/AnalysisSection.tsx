// AnalysisSection.jsx

import React from "react";

const items = [
  "Comprehensive Design Evaluation",
  "Functional Efficiency Review",
  "Competitive Analysis",
  "Strategic Implementation",
];

const AnalysisSection = () => {
  return (
    <section className="section">
      <header className="container mx-auto ">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Analysis</h2>
      </header>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Content */}
        <div>
          <p className="text-gray-700 leading-relaxed  p-4 rounded-md">
            {
              " We understand that exceptional engineering goes beyond aesthetics – it's about creating a functional and efficient project. Our Analysis service delves into the core of your project, uncovering opportunities for improvement and optimization. With a focus on aligning design with functionality, we develop strategies that enhance efficiency and user satisfaction."
            }
          </p>
        </div>

        {/* Right List */}
        <div className="space-y-6 p-4">
          {items.map((item, index) => (
            <div key={index} className="border-b pb-2">
              <h4 className="text-md font-semibold text-gray-900">{item}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnalysisSection;
