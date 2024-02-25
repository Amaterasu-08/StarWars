import axios from "axios";

const GetInduvisual = async (apiLink: string): Promise<any> => {
  
    try{
        const response = await axios.get(apiLink);

        return response.data;
    }catch(error){
        console.error("Error fetching data:", error);

        throw error;
    }
  

  
};

export default GetInduvisual;
