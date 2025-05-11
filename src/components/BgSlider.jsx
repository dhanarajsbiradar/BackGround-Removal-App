import { useState } from "react";
import { assets, categories } from "../assets/assets";

const BgSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeCategory, setActiveCategory] = useState(categories[0]); // default first

  const handleSlidingChange = (e) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="mb-16 px-4">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
        Stunning quality.
      </h2>

      {/* Category Chips */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex gap-3 bg-gray-100 p-2 rounded-full flex-wrap justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-white text-gray-800 shadow-sm"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Image Comparison Area */}
      <div className="relative w-full max-w-4xl overflow-hidden m-auto rounded-xl shadow-lg h-[400px]">
        {/* Original Image */}
        <img
          src={assets.people_org}
          alt="original image"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          }}
        />

        {/* Foreground Image */}
        <img
          src={assets.people}
          alt="background removed image"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            clipPath: `inset(0 0 0 ${sliderPosition}%)`,
          }}
        />

        {/* Slider */}
        <input
          type="range"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full slider"
          min={0}
          max={100}
          onChange={handleSlidingChange}
          value={sliderPosition}
        />
      </div>
    </div>
  );
};

export default BgSlider;
