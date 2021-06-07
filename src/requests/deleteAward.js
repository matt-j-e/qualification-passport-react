import axios from "axios";

const deleteAward = async (id) => {
  const path = `${process.env.REACT_APP_BACKEND_API_URL}/awards/${id}`;
  try {
    const response = await axios.delete(path);
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export default deleteAward;
