const photographers = (state = [], action ) => {
  switch(action.type) {
    case 'PHOTOGRAPHERS':
      return action.photographers
    case 'ADD_PHOTOGRAPHER':
      return [action.photographer, ...state]
    case 'UPDATE_PHOTOGRAPHER':
      return state.map( a => {
        if (a.id === action.photographer.id)
          return action.photographer
        return a
      })
    case 'DELETE_PHOTOGRAPHER':
      return state.filter( a => a.id !== action.id )
    default:
      return state;
  }
}

export default photographers;
