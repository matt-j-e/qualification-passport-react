import axios from "axios";

const getWorkersByJobType = async (searchText) => {
  const path = `${process.env.REACT_APP_BACKEND_API_URL}/workers/job/${searchText}`;
  try {
    const response = await axios.get(path);
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export default getWorkersByJobType;
