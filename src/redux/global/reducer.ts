import initialState from "./state";
import { RESET_STATE, SET_THEME } from "./types";

// Utils
import { ReduxState } from "../../utils/types";

const reducer = (state: ReduxState = initialState, action: any): ReduxState => {
  switch (action.type) {
    case RESET_STATE: {
      return initialState;
    }
    case SET_THEME: {
      return {
        ...state,
        isLight: !state.isLight,
      };
    }

    default:
      return state;
  }
};

export default reducer;
