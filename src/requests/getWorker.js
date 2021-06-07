import axios from "axios";

const getWorker = async (id) => {
  const path = `${process.env.REACT_APP_BACKEND_API_URL}/workers/${id}`;
  // const path = `http://localhost:4010/workers/${id}`;
  try {
    const response = await axios.get(path);
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export default getWorker;
