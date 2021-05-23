const formatDate = (datetime) => {
  const dateString = datetime.split('T')[0];
  const dateArray = dateString.split('-');
  const year = dateArray[0];
  const month = dateArray[1] - 1;
  const day = dateArray[2];
  const date = new Date(year, month, day);
  return date.toLocaleDateString();
}

export default formatDate;
