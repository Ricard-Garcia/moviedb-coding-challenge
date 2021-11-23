import React from "react";

// React components
export interface OnlyChildren {
  children: React.ReactChild;
}

// Redux
export interface ReduxState {
  isLight: boolean;
}

export interface ProviderProps extends OnlyChildren {
  store: any;
}
