import React from "react";

// Utils
import { OnlyChildren } from "../../utils/types";

export default function Main({ children }: OnlyChildren) {
  return <main className="flex-grow-1">{children}</main>;
}
