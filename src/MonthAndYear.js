import React from "react";

export default function MonthAndYear() {
  let dateToday = new Date();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[dateToday.getMonth()];
  let date = dateToday.getDate();
  let year = dateToday.getFullYear();

  return (
    <div className="MonthAndYear">
      {month} {date}, {year}
    </div>
  );
}
