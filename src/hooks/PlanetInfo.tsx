import axios from "axios";
import { useEffect, useState } from "react";

export const getPlanetsInfo = (pageNo: number) => {

  const [planetsData, setPlanetsData] = useState<any | null>(null); 
  const [isLoading, setIsLoading] = useState<boolean>(true);


  useEffect(() => {
    const fetchData = async () => {
      try {

        let url = `https://swapi.dev/api/planets/?page=${pageNo}`;
        

        const response = await axios.get(url);
        

        setPlanetsData(response.data);
        

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [pageNo]); // Dependencies array: re-run effect when pageNo changes

  return { planetsData, isLoading };
};
