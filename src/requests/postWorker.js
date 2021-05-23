import axios from "axios";

const postWorker = async (values) => {
  try {
    const response = await axios.post(
      "http://localhost:4010/workers",
      values
    );
    return response
    ;
  } catch (error) {
    console.log(error.response);
    return error.status;
  }
};

export default postWorker;
