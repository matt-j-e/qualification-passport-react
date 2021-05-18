import axios from "axios";

const getWorkers = async () => {
  try {
    const response = await axios.get(
      "http://localhost:4010/workers"
    );
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export default getWorkers;
