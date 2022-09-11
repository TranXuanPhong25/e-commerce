import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [

    ]

}
/*
    {
        id:1,
        name:"fall",
        price:69$,
        amount:1,
        image:url
    }
*/
export const purchaseSlice = createSlice({
    name: 'purchase',
    initialState,
    reducers: {
        add(state, action) {
            let shouldAdd = true
            state.cart.map((product,index) => {

                if (product.id === action.payload.id) {
                    shouldAdd = false
                    product.amount = product.amount+ action.payload.amount
                  
                }
            })
            if (shouldAdd) state.cart.push(action.payload)
        },
        remove(state, action) {
            return {
                ...state,
                cart:[...state.cart.slice(0, action.payload),...state.cart.slice(action.payload + 1)]
            }
        }

    },
})

// Action creators are generated for each case reducer function
export const { add, remove } = purchaseSlice.actions

export default purchaseSlice.reducer