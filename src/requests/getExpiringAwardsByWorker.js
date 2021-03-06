import axios from "axios";

const getExpiringAwardsByWorker = async (id) => {
  const path = `${process.env.REACT_APP_BACKEND_API_URL}/awards/expiring/${id}`;
  try {
    const response = await axios.get(path);
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export default getExpiringAwardsByWorker;
