const sortAwards = (awards, field, order) => {
  if (field === "expiry_date") {
    return awards.sort((a, b) => a.expiry_date > b.expiry_date ? order : order*-1);
  }
  
};

export default sortAwards;
