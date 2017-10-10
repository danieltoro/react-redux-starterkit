export default function devideReducer(state = {}) {
  let isMobile = false;

  if (state.isMobile) {
    isMobile = state.isMobile === 'false' ? false : true;
  }

  return {
    ...state,
    isMobile
  };
}
