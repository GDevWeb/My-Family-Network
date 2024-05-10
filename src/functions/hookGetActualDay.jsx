const getActualDay = () => {
    const actualDate = new Date();

    const year = actualDate.getFullYear();
    let month = actualDate.getMonth() + 1;
    const day = actualDate.getDate();
  
    if (month < 10) {
      month = `0${month}`;
    }
  
    const fullDate = `${day}/${month}/${year}`;

    return fullDate;
}

export default getActualDay;