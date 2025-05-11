import { testimonials } from "../assets/assets";

const Testimonials = () => {
  return (
    <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8 py-12">
      {/* Title Section */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
        They love us. You will too.
      </h2>

      {/* Body Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col justify-between rounded-xl shadow hover:shadow-lg transition-shadow bg-white p-6"
          >
            <div className="relative pt-12 space-y-5">
              {/* Large Opening Quote styled to look like 6 */}
              <span className="text-7xl text-purple-400 absolute top-0 left-2 -translate-y-6 select-none">
                “
              </span>

              {/* Quote Text */}
              <p
                className="text-gray-700 text-base pl-4"
                style={{ hyphens: "auto" }}
              >
                {testimonial.quote}
              </p>
            </div>

            {/* Author Info */}
            <div className="flex space-x-2 bg-gray-50 mt-6 px-6 pt-6 pb-5 rounded-b-xl">
              <div className="flex flex-col justify-center">
                <p className="font-semibold text-gray-900 m-0">
                  {testimonial.author}
                </p>
                <p className="text-gray-500 text-sm m-0 mt-1">
                  {testimonial.handle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
