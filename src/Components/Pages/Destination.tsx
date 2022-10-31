import "../../sass/pages/Destination.scss";
import img1 from "../../assets/destination/image-mars.png";

const Destination = () => {
  return (
    <div id="destination">
      <p>
        <span>01</span>pick your destination
      </p>
      <div className="destination_planet">
        <img src={img1} alt="moon" />
        <div className="planet_about"></div>
      </div>
    </div>
  );
};

export default Destination;
