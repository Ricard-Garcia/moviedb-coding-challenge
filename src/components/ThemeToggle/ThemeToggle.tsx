import React from "react";
import Toggle from "react-toggle";
import { BsSun, BsMoon } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";

// Redux
import { setTheme } from "../../redux/global/actions";

// Styles
import "./ThemeToggle.scss";

export default function ThemeSwitch() {
  // Redux
  const globalState = useSelector((state: any) => state.global);
  const dispatch = useDispatch<any>();

  // Handlers & loaders
  const handleTheme = (): void => {
    dispatch(setTheme()); // Global state
  };

  return (
    <div id="switchWrapper">
      <Toggle
        defaultChecked={globalState.isLight}
        className="custom-switch d-flex align-items-center"
        icons={{
          checked: <BsSun className="ft-dark" />,
          unchecked: <BsMoon className="ft-light" />,
        }}
        onChange={handleTheme}
      />
    </div>
  );
}
