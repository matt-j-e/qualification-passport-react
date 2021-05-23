import axios from "axios";

const deleteAward = async (id) => {
  const path = `http://localhost:4010/awards/${id}`;
  try {
    const response = await axios.delete(path);
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export default deleteAward;
