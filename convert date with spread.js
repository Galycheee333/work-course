const convert = (...arr) => {
  const formattedDates = [];

    for (const item of arr) {
      const date = new Date(...item);
      const formattedDate = date.toDateString();
      formattedDates.push(formattedDate);
    }

    return formattedDates;
  };
