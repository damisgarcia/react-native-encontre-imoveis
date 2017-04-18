const initialState = {
  count: 1
}

export function app(state=initialState, action){
  switch (action.type) {
    case 'INCREMMENT':
      return { ...state, count: ( state.count + 1 ) };
    default:
      return state;
  }
}
