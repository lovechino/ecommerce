import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name : 'product',
    initialState :{
        listProduct : []
    },
    reducers:{
        setListProduct:(state,action)=>{
            state.listProduct = action.payload
        }
    }
})

export const {setListProduct} = productSlice.actions
export default productSlice.reducer