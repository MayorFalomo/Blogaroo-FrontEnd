type ActionTypes =
  | { type: "LOGIN_START" }
  | { type: "LOGIN_SUCCESS"; payload: object }
  | { type: "LOGIN_FAILURE" }
  | { type: "UPDATE_START" }
  | { type: "UPDATE_SUCCESS"; payload: object }
  | { type: "UPDATE_FAILURE" }
  | { type: "LOG_OUT" };

interface State {
  user: object | null;
  isFetching: boolean;
  error: boolean;
}

const Reducer = (state: State, action: ActionTypes) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        idFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case "UPDATE_START":
      return {
        ...state,
        isFetching: true,
      };
    case "UPDATE_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "UPDATE_FAILURE":
      return {
        user: state.user,
        isFetching: false,
        error: true,
      };
    case "LOG_OUT":
      return {
        user: {},
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};

export default Reducer;
