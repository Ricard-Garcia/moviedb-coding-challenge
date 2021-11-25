import React from "react";

// Utils
import { OnlyChildren } from "../../utils/types";

export default function Main({ children }: OnlyChildren): React.ReactElement {
  return <main className="flex-grow-1 pb-5">{children}</main>;
}
