const initialState = {
  currentPage: 3,
}

type ReduxState = typeof initialState

type ReduxAction = {
  type: string
  payload: any
}

function reducer(state: ReduxState | undefined = initialState, action: ReduxAction) {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer
