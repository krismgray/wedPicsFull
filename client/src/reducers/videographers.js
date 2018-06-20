const videographers = (state = [], action ) => {
  switch(action.type) {
    case 'VIDEOGRAPHERS':
      return action.videographers
    case 'ADD_VIDEOGRAPHER':
      return [action.videographer, ...state]
    case 'UPDATE_VIDEOGRAPHER':
      return state.map( a => {
        if (a.id === action.videographer.id)
          return action.videographer
        return a
      })
    case 'DELETE_VIDEOGRAPHER':
      return state.filter( a => a.id !== action.id )
    default:
      return state;
  }
}

export default videographers;
