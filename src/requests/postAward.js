import axios from "axios";

const postAward = async (values) => {
  try {
    const response = await axios.post(
      "http://localhost:4010/awards",
      values
    );
    return response
    ;
  } catch (error) {
    console.log(error.response);
    return error.status;
  }
};

export default postAward;
