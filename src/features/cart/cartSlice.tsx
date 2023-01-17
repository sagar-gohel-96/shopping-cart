import { createSlice } from '@reduxjs/toolkit';
import { CartItemInterface } from '../../interface/CartItemInterface';
export interface CartState {
  value: CartItemInterface[];
  total?: number;
}
const initialState: CartState = {
  value: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1) {
        const tempItem = { ...action.payload, quantity: 1 };
        state.value.push(tempItem);
      } else {
        state.value[itemIndex].quantity += 1;
      }
    },

    removeFromCart: (state, action) => {
      let products: CartItemInterface[];
      if (state.value.length === 0) {
        return;
      } else {
        products = state.value.filter((item) => {
          return item.id !== action.payload;
        });
      }
      return {
        ...state,
        value: products,
      };
    },
    incrementQuantity: (state, action) => {
      const itemIndex = state.value.findIndex(
        (item) => item.id === action.payload
      );
      state.value[itemIndex].quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const itemIndex = state.value.findIndex(
        (item) => item.id === action.payload
      );
      if (state.value[itemIndex].quantity === 1) {
        if(
           confirm('are want to delete this item?')){
            const products = state.value.filter(
              (item) => item.id !== action.payload
            );
            return {
              ...state,
              value: products,
            };
          }
      }
      state.value[itemIndex].quantity -= 1;
    },
    emptyCart:(state,action)=>{
      return{
        value: []
      }
    }
  },
});
export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  emptyCart
} = cartSlice.actions;
export default cartSlice.reducer;
