import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name : 'user',
  initialState : {name : 'kim', age : 20},

  reducers : {
    changeName(state){
      return 'john ' + state
    },
    increase(state, action){
      state.age += action.payload
    }
  }
})
export let { changeName, increase } = user.actions 


let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers : {
    increaseCount(state, action){
    let idToIncrease = action.payload;
    let item = state.find(item => item.id === idToIncrease);
    if (item) {
        item.count += 1;
      }
    },
    addItem(state, action){
      state.push(action.payload)
    }
  }
})
export let { increaseCount, addItem } = cart.actions 


export default configureStore({
  reducer: {
    user : user.reducer,
    cart : cart.reducer
  }
}) 

