import { FETCH, FETCH_SUCCESS, FETCH_FAILURE, ADD, DELETE } from '../actions'

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  error: ''
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        fetchingSmurfs: true,
        error: ''
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        error: ''
      }
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    case ADD:
      return {
        ...state,
        smurfs: action.payload,
        error: ''
      }
    case DELETE:
      return {
        ...state,
        smurfs: action.payload,
        error: ''
      }
    default:
      return state
  }
}

export default reducer
