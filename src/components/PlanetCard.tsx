import { Link } from "react-router-dom";

interface PlanetCardProps {
  value: number;
  name: string | never;
  climate: string;
  diameter: string;
  population: string;
  terrain: string;
}

const PlanetCard: React.FC<PlanetCardProps> = ({
  value,
  name,
  climate,
  diameter,
  population,
  terrain,
}) => {
  return (
    <div className="glass flex flex-col justify-between glass p-2 h-full cursor-default gap-1">
      <div className="">
        <div className="text-xl underline text-black font-semibold text-center">
          {name}
        </div>
        <div className="text-base text-gray-200 flex flex-wrap flex-col gap-1">
          <span>Climate: {climate}</span>
          <span>Diameter: {diameter}km</span>
          <span>Population: {population}</span>
          <span>Terrain: {terrain}</span>
        </div>
        <div className="text-center my-2">
          <Link
            to={`planet/${value}`}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlanetCard;
