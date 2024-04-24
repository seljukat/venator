import Slider from "../Slider";
import "../styles/home.css";

const HomePage = () => (
  <>
    {/* <h1 className="home-page-content">Home Page</h1> */}
    <div className="flex">
      <div className="content">
        <h1>Discover the Game-Changer in Football Analysis: Venator!</h1>
        <p className="text">
          Elevate your team's <span className="underline">performance</span>{" "}
          with Venator's cutting-edge technology. Harnessing the power of{" "}
          <span className="underline">computer vision</span> and advanced{" "}
          <span className="underline">machine learning</span>, Venator
          meticulously{" "}
          <span className="underline">analyzes football matches</span> to track
          players, goalkeepers, referees, and the ball. Dive into detailed
          statistics—player positions, distance covered, heat maps, and more.
          From distinguishing team players to calculating ball possession,
          Venator{" "}
          <span className="underline">provides invaluable insights</span> that{" "}
          <span className="underline">help coaches</span> make strategic
          decisions. Get ready to{" "}
          <span className="bold">
            transform your game strategy and outplay the competition with
            Venator!
          </span>
        </p>
      </div>
      <Slider />
    </div>
  </>
);

export default HomePage;
