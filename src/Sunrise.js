import React from "react";

export default function Sunrise(props) {
  let sunriseDate = new Date(props.sunrise * 1000);

  let timezoneOffsetInHours = props.timezoneOffset / 3600;
  let utcHour = sunriseDate.getUTCHours();
  let sunriseHour = utcHour + timezoneOffsetInHours;

  let sunriseMinutes = sunriseDate.getUTCMinutes();
  let anteMeridiem = "a.m.";

  // This code accounts for funky timezones with half-hour values (for example, a search for Kabul, which has a UTC offset of 4.5 hours).
  if (
    Number.isInteger(sunriseHour) === false &&
    sunriseMinutes >= 0 &&
    sunriseMinutes < 30
  ) {
    // Accounts for the half-hour by adding 30 minutes to the display without incrementing the hour, instead rounding the hour down. Example: a nonsensical display value of 4.5:10 a.m. would become 4:40 a.m.
    sunriseMinutes = sunriseMinutes + 30;
    sunriseHour = Math.floor(sunriseHour);
  } else if (
    Number.isInteger(sunriseHour) === false &&
    sunriseMinutes >= 30 &&
    sunriseMinutes < 60
  ) {
    // Accounts for the half-hour by subtracting 30 minutes from the display, rounding the hour down, then incrementing the hour. Example: a display value of 4:70 a.m. would be nonsensical; instead, 4.5:40 a.m. is reformatted to 5:10 a.m.
    sunriseMinutes = sunriseMinutes - 30;
    sunriseHour = Math.floor(sunriseHour) + 1;
  }

  // This code formats the time to a 12-hour clock:
  if (sunriseMinutes < 10) {
    sunriseMinutes = "0" + sunriseMinutes;
  }

  // The range represents a 24-hour clock with an offset of plus or minus 12 hours.
  if (sunriseHour <= 36 && sunriseHour > 24) {
    sunriseHour = sunriseHour - 24;
  } else if (sunriseHour <= 24 && sunriseHour > 12) {
    sunriseHour = sunriseHour - 12;
  } else if (sunriseHour <= 12 && sunriseHour > 0) {
  } else if (sunriseHour <= 0 && sunriseHour >= -12) {
    sunriseHour = sunriseHour + 12;
  }

  return (
    <span className="Sunrise">
      {sunriseHour}:{sunriseMinutes} {anteMeridiem}
    </span>
  );
}
