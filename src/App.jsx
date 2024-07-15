import Banner from "components/Banner/Banner";
import Hero from "./components/Hero/Hero";
import HotDesert from "./components/HotDesert/HotDesert";
import Navbar from "./components/Navbar/Navbar";
import PopularRecipe from "components/PopularReceipe/PopularRecipe";
import Testimonials from "components/Testimonials/Testimonials";
import Footer from "components/Footer/Footer";

function App() {
  return (
    <div className=" overflow-x-hidden bg-white2 text-dark">
      <div className="relative overflow-hidden ">
        <Navbar />
        <Hero />
      </div>
      <HotDesert />
      <Banner />
      <PopularRecipe />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
}

export default App;
