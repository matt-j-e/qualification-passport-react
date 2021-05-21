import axios from "axios";

const getQualifications = async () => {
  try {
    const response = await axios.get(
      "http://localhost:4010/qualifications"
    );
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export default getQualifications;
