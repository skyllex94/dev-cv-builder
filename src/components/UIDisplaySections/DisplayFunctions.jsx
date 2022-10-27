// Format date string to display only written month and numeric year, and display Present if currentJob is true
export const formatDate = (startDate, endDate) => {
  const formattedDates = [{ date: "" }, { date: "" }];

  if (endDate === "Present") {
    startDate = startDate.replaceAll("-", " ");
    let newDate = new Date(startDate);
    const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
      newDate
    );
    const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(
      newDate
    );
    formattedDates[0].date = `${mo}, ${ye}`;
  } else {
    if (startDate && endDate !== "") {
      [startDate, endDate].forEach((date, index) => {
        date = date.replaceAll("-", " ");
        let newDate = new Date(date);
        const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
          newDate
        );
        const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(
          newDate
        );
        formattedDates[index].date = `${mo}, ${ye}`;
      });
    } else {
      return null;
    }
  }

  // Formatted output passed from the array of values and populating it on the page with proper formatting
  const formattedOutputtingDates = (
    <div className="d-flex">
      <div>|</div>
      <div className="ms-2 me-1">{formattedDates[0].date}</div>-
      <div className="me-2 ms-1">
        {endDate === "Present" ? "Present" : formattedDates[1].date}
      </div>
      <div>|</div>
    </div>
  );
  return formattedOutputtingDates;
};
