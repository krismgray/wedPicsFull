import axios from 'axios';

export const getPhotographers = (cb) => {
  return (dispatch) => {
    axios.get('/api/photographers')
      .then( res => dispatch({ type: 'PHOTOGRAPHERS', photographers: res.data }) )
      .then(cb())
  }
}

export const addPhotographer = (photographer) => {
  return (dispatch) => {
    axios.post('/api/photographers', { photographer } )
     .then( res => dispatch({ type: 'ADD_PHOTOGRAPHER', photographer: res.data }) )
  }
}

export const updatePhotographer = (photographer) => {
  return (dispatch) => {
    axios.put(`/api/photographers/${photographer.id}`, { photographer } )
      .then( res => dispatch({ type: 'UPDATE_PHOTOGRAPHER', photographer: res.data }) )
  }
}

export const deletePhotographer = (id) => {
  return (dispatch) => {
    axios.delete(`/api/photographers/${id}`)
      .then( () => dispatch({ type: 'DELETE_PHOTOGRAPHER', id }) )
  }
}
