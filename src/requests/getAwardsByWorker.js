import axios from "axios";

const getAwardsByWorker = async (id) => {
  const path = `http://localhost:4010/awards/worker/${id}`;
  try {
    const response = await axios.get(path);
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export default getAwardsByWorker;