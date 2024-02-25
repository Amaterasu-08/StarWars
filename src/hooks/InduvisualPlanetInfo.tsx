import axios from "axios";
import { useState, useEffect } from "react";

export interface planetReturnTypeItem {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: any[];
  films: string[];
  created: string;
  edited: string;
  url:string;
}

const InduvisualPlanetInfo = (planetId: string|undefined) => {
  const [planetdata, setPlanetData] = useState<planetReturnTypeItem | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `https://swapi.dev/api/planets/${planetId}`;

        const response = await axios.get(url);

        setPlanetData(response.data);
      } catch (error) {
        console.error("Error fetching Data:", error);
      }
    };
    fetchData();
  }, [planetId]);

  return planetdata;
};

export default InduvisualPlanetInfo;

