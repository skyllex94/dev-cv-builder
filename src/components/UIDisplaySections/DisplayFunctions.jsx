// Format date string to display only written month and numeric year, and display Present if currentJob is true
export const formatDate = (startDate, endDate, disableSeparators) => {
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
      {!disableSeparators && <div>|</div>}
    </div>
  );
  return formattedOutputtingDates;
};

// Handle the currently picked item, rearracge array of items and place appropriately
export const handleDragNDrop = (pickedItem, state, setState) => {
  if (!pickedItem.destination) return;

  const items = [...state];
  const [reorderedItem] = items.splice(pickedItem.source.index, 1);
  items.splice(pickedItem.destination.index, 0, reorderedItem);

  setState(items);
};

// Map out all tech values present, and output them in it's own li elements
export const displayElements = (arrOfValues, UIClassName) => {
  const output = arrOfValues.map((tech, index) => {
    return (
      <li key={index} className={UIClassName}>
        {tech.message}
      </li>
    );
  });
  return output;
};

// Truncate the label if it has more than 30 characters
export const truncate = (str) => {
  return str.length > 30 ? str.substring(0, 27) + "..." : str;
};

// Take a label and insert a link to redirect you automatically when clicked
export const createLink = (parentElement, valueToInput, template) => {
  const element = document.createElement("a");
  let text;
  if (template === "earth") {
    text = document.createTextNode(valueToInput);
  } else if (template === "venus") {
    text = document.createTextNode(truncate(valueToInput));
  }
  element.setAttribute("href", valueToInput);
  element.className = "disabled";
  element.appendChild(text);
  parentElement.appendChild(element);
};
