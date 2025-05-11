import Header from "../components/Header";
import BgRemovalSteps from "../components/BgRemovalSteps";
import BgSlider from "../components/BgSlider";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import TryNow from "../components/TryNow";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-outfit">
      {/* Home Section */}
      <Header />

      {/* Background removal steps section */}
      <BgRemovalSteps />

      {/* Background removal slider section */}
      <BgSlider />

      {/* Buy credits plan section */}
      <Pricing />

      {/* User testimonial section */}
      <Testimonials />

      {/* Try now section */}
      <TryNow />

      {/* Add a component here if planned */}
    </div>
  );
};

export default Home;
