document.body.style.backgroundColor = "white";

window.onload = function update_dates() {
  let due_dates = document.getElementsByClassName(
    "ig-details__item assignment-date-due"
  );

  let available_dates = document.getElementsByClassName(
    "ig-details__item assignment-date-available"
  );

  for (let index = 0; index < due_dates.length; index++) {
    const due = due_dates[index];

    due.style.fontSize = "small";
    due.style.color = "red";

    const available = available_dates[index];

    //   due.appendChild(available);
  }
};
