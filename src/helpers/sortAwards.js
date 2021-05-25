const sortAwards = (awards, field, order) => {
  return awards.sort((a, b) => a[field] > b[field] ? order : order*-1);
};

export default sortAwards;
