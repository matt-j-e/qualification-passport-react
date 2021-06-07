import axios from "axios";

const getAwardsByWorker = async (id) => {
  const path = `${process.env.REACT_APP_BACKEND_API_URL}/awards/worker/${id}`;
  try {
    const response = await axios.get(path);
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export default getAwardsByWorker;