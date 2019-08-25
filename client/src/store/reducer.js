const defaultValue = {
  counter: 0,
  isLogin: false
};

export default function reducer(state = defaultValue, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "SIGN_IN":
      return { ...state, isLogin: true };
    case "SIGN_OUT":
      return { ...state, isLogin: false };
    default:
      return state;
  }
}
