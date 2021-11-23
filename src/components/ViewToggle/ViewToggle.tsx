import React from "react";

// Styles
import "./ViewToggle.scss";

export default function RadioButtons({
  handleChange = (): void => {},
}): React.ReactElement {
  return (
    <div
      className="btn-group home-radio"
      role="group"
      aria-label="Basic radio toggle button group"
    >
      <input
        type="radio"
        className="custom-btn-check"
        name="btnradio"
        id="moviesRadio"
        autoComplete="off"
        onChange={handleChange}
        defaultChecked
      />
      <label className="fnt-caption custom-radio p-2" htmlFor="moviesRadio">
        Movies
      </label>

      <input
        type="radio"
        className="custom-btn-check"
        name="btnradio"
        id="showsRadio"
        autoComplete="off"
        onChange={handleChange}
      />
      <label className="fnt-caption custom-radio p-2" htmlFor="showsRadio">
        Shows
      </label>
    </div>
  );
}
