import { useState, useEffect } from "react";
import PlanetCard from "../components/PlanetCard";
import Pagination from "../components/Pagination";
import { getPlanetsInfo } from "../hooks/PlanetInfo";

const Hero = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [planetsDataDisplay, setPlanetsDataDisplay] = useState<any[]>([]);

  const { planetsData } = getPlanetsInfo(currentPageNumber);

  useEffect(() => {
    if (planetsData) {
      setPlanetsDataDisplay(planetsData?.result);
    }
  }, [planetsData]);

  return (
    <section>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-bold tracking-wider text-white">
            Visit The Planets
          </h2>
          
        </div>
      </div>
      <div>
        {planetsDataDisplay.map((item, index) => (
              <PlanetCard
                key={index}
                value={(currentPageNumber - 1) * 10 + 1 + index}
                name={item.name}
                climate={item.climate}
                diameter={item.diameter}
                population={item.population}
                terrain={item.terrain}
              />
            ))}
      </div>
      <div>
      <Pagination
          setCurrentPageNumber={setCurrentPageNumber}
          currentPageNumber={currentPageNumber}
          totalData={planetsData?.count}
        />
      </div>
    </section>
  );
};

export default Hero;
