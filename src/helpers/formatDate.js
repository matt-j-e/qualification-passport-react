import mysqlToJsDate from "../helpers/mysqlToJsDate";

const formatDate = (datetime) => {
  const date = mysqlToJsDate(datetime);
  return date.toLocaleDateString();
}

export default formatDate;
