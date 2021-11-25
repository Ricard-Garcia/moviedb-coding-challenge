/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";

// Utils
import setTheme from "../../utils/theme";

export default function Spinner(): React.ReactElement {
  // Redux
  const globalState = useSelector((state: any) => state.global);

  // Theme colors
  const [primary, secondary] = setTheme(globalState.isLight);

  return <div className={`spinner-grow ft-${secondary}`} />;
}
