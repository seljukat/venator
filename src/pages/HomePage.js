import Slider from "../Slider";
import "../styles/home.css";

const HomePage = () => (
  <>
    {/* <h1 className="home-page-content">Home Page</h1> */}
    <div className="flex">
      <div className="content">
        <h1>Venator</h1>
        <p>Statistics for your games.</p>
      </div>
      <Slider />
    </div>
  </>
);

export default HomePage;
