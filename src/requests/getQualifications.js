import axios from "axios";

const getQualifications = async () => {
  const path = `${process.env.REACT_APP_BACKEND_API_URL}/qualifications`;
  try {
    const response = await axios.get(path);
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export default getQualifications;
