import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]

    },
    removeFromBasket: (state, action) => {
      //check the index of basket item with the id we passed via our chekcout remove item
      const index = state.items.findIndex(
        (basketItems) => basketItems.id === action.payload.id
      )
      //create a copy of the current basket. so that we can splice and remove the selected product via its id and the set the new basket as the new basket
      let newBasket = [...state.items]
      //check if index exist 
      if (index >= 0) {
        //then the item exist..so we remove it
        newBasket.splice(index, 1)
      } else {
        console.warn(`cant remove product (id: ${action.payload.id}) because it does not exist`);
      }
      state.items = newBasket;

    },
  }
});

//actions caller functions in basket
export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
