import axios from "axios";

const getWorkers = async () => {
  const path = `${process.env.REACT_APP_BACKEND_API_URL}/workers`;
  try {
    const response = await axios.get(path);
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export default getWorkers;
