import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // Vanialla(older) Redux => Don't mutate State, returning was mandatory
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;

            console.log(current(state));

            // Redux Toolkit
            // Redus toolkit uses immer behind the secenes
            // We have to mutate the state
            // mutating the state here

            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
                        // RTK - eaither Mutate the exixtins state or return a new state
            state.items.length = 0; // originalState = []
            // return { items: [] }; // this new [] will be replaced inside originalState = { items: []}
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;