import React from "react";
import { useSelector } from "react-redux";

// Utils
import setTheme from "../../utils/theme";

export default function Spinner() {
  // Redux
  const globalState = useSelector((state: any) => state.global);

  // Theme colors
  const secondary = setTheme(globalState.isLight)[1];

  return <div className={`spinner-grow ft-${secondary}`} />;
}
