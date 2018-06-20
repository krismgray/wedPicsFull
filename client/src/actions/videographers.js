import axios from 'axios';

export const getVideographers = (cb) => {
  return (dispatch) => {
    axios.get('/api/videographers')
      .then( res => dispatch({ type: 'VIDEOGRAPHERS', videographers: res.data }) )
      .then(cb())
  }
}

export const addVideographer = (videographer) => {
  return (dispatch) => {
    axios.post('/api/videographers', { videographer } )
     .then( res => dispatch({ type: 'ADD_VIDEOGRAPHER', videographer: res.data }) )
  }
}

export const updateVideographer = (videographer) => {
  return (dispatch) => {
    axios.put(`/api/videographers/${videographer.id}`, { videographer } )
      .then( res => dispatch({ type: 'UPDATE_VIDEOGRAPHER', videographer: res.data }) )
  }
}

export const deleteVideographer = (id) => {
  return (dispatch) => {
    axios.delete(`/api/videographers/${id}`)
      .then( () => dispatch({ type: 'DELETE_VIDEOGRAPHER', id }) )
  }
}
