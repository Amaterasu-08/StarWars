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
      console.log(planetsData.results);
      setPlanetsDataDisplay(planetsData?.results);
    }
  }, [planetsData]);

  return (
    <section>
      <div className="h-max px-5 py-5 sm:px-10">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:grid-cols-5 ">
          {planetsDataDisplay &&
            planetsDataDisplay.map((item, index) => (
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
