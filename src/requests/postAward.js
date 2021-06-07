import axios from "axios";

const postAward = async (values) => {
  const path = `${process.env.REACT_APP_BACKEND_API_URL}/awards`;
  try {
    const response = await axios.post(path, values);
    return response
    ;
  } catch (error) {
    console.log(error.response);
    return error.status;
  }
};

export default postAward;
