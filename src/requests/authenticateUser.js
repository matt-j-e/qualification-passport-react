import axios from "axios";

const authenticateUser = async (values) => { 
  try {
    const response = await axios.post(
      "http://localhost:4010/workers/login",
      values
    );
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
}

export default authenticateUser;
