import { createSlice } from '@reduxjs/toolkit'

export const playlist = createSlice({
    name: 'playlist',
    initialState: {
        products: []
    },
    reducers: {
        setProduct: (state, action) => {
          state.product = action.payload
        }
    }
})

// To add multiple parameters, an ‘&’ is added in between each. 
// These can be created by any variation of object types or lengths such as 
// String, Arrays and Numbers. The following is an example:
// http://example.com/path?name=Branch&products=[Journeys,Email,Universal%20Ads]

export const createQuery = (parameter, value) => {
    // if [].length > 1 add &
    return dispatch => {
        fetch(`http://localhost:8080/episodes`)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            // dispatch(products.actions.setProduct(json))
            // dispatch(ui.actions.setLoading(false))
        })
    }
}

// app.get('/year/:year', (req, res) => {
//     const year = req.params.year
//     const showWon = req.query.won
//     console.log(showWon)
//     let queryFilter = data.filter((episode) => episode.${parameter} === ${value})
  
//     if (Array.length > 1) {
//         for (i=0, Array.length > i, i+)
//       // change nominationsFromYear to add a filter
//         queryFilter = data.filter((episode) => episode.${parameter} === ${value})
//     }
//     res.json(queryFilter)
//   })