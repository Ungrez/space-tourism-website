import mars from "../../assets/destination/image-mars.png";
import moon from "../../assets/destination/image-moon.png";
import titan from "../../assets/destination/image-titan.png";
import europa from "../../assets/destination/image-europa.png";

const planets: {
  name: string;
  text: string;
  distance: string;
  travel: string;
  img: string;
}[] = [
  {
    name: "moon",
    text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
    img: moon,
  },
  {
    name: "titan",
    text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
    img: titan,
  },
  {
    name: "mars",
    text: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
    img: mars,
  },
  {
    name: "europa",
    text: "Europa The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
    img: europa,
  },
];

export const checkPlanet = (name: any) => {
  planets.filter((planet) => {
    if (planet.name === name) {
      return (
        <div id="destination_planet">
          <p>{planet.name}</p>
          <img src={planet.img} alt={planet.name} />
          <p>{planet.text}</p>
          <div>
            <div>
              <p>AVG. DISTANCE</p>
              <p>{planet.distance}</p>
            </div>
            <div>
              <p>EST. TRAVEL TIME</p>
              <p>{planet.travel}</p>
            </div>
          </div>
        </div>
      );
    }
  });
};