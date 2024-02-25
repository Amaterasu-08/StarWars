import { useState, useEffect } from "react";
import InduvisualPlanetInfo from "../hooks/InduvisualPlanetInfo";
import GetInduvisual from "../hooks/GetInduvisual";
import ResidentCard from "../components/ResidentCard";
import { useParams } from "react-router-dom";


const Planet = () => {
  let { planetId } = useParams();
  const [residents, setResidents] = useState<any[]>([]);
  const [residentsPresent, setResidentsPresent] = useState(false);
  const planetsData = InduvisualPlanetInfo(planetId);

  useEffect(() => {
    if (planetsData && planetsData.residents) {
      setResidentsPresent(true);

      // If there are no residents, update loading state and flag
      if (planetsData.residents.length === 0) {
        setResidentsPresent(false);
      }

      // Fetch data for each resident
      const fetchResidentsData = async () => {
        const residentsDataPromises = planetsData.residents.map(
          (residentUrl: string) => GetInduvisual(residentUrl)
        );

        const residentsData = await Promise.all(residentsDataPromises);
        setResidents(residentsData);
      };
      fetchResidentsData();
    }
  }, [planetsData]);

  return (
    <section className="px-5 py-5 flex flex-col gap-5 sm:px-10">
      <div className="text-4xl font-bold text-center text-white underline">
        {planetsData?.name}
      </div>
      <div className="text-base text-gray-200 flex flex-wrap gap-1">
        {/* Displaying planet details */}
        {/* Displaying planet details */}
        <span>Rotation period: {planetsData?.rotation_period},</span>
        <span>Orbital period: {planetsData?.orbital_period}days,</span>
        <span>Climate: {planetsData?.climate},</span>
        <span>Diameter: {planetsData?.diameter}km,</span>
        <span>Gravity: {planetsData?.gravity},</span>
        <span>Terrain: {planetsData?.terrain},</span>
        <span>Population: {planetsData?.population},</span>
        <span>Residents: {planetsData?.residents.length},</span>
        <span>Films: {planetsData?.films.length}</span>
      </div>
      <div className="flex flex-col gap-2">
        {/* Residents section */}
        <p className="text-xl text-white underline">Residents</p>
        { 
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Displaying resident cards or message if no residents */}
            {residentsPresent ? (
              residents.map((item, index) => (
                <ResidentCard key={index} {...item} />
              ))
            ) : (
              <div className="text-white text-2xl">
                No residents reside on this planet!
              </div>
            )}
          </div>
        }
      </div>
    </section>
  );
};
export default Planet;