import axios from "axios";

const getWorkersByJobType = async (searchText) => {
  const path = `http://localhost:4010/workers/job/${searchText}`;
  try {
    const response = await axios.get(path);
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export default getWorkersByJobType;
