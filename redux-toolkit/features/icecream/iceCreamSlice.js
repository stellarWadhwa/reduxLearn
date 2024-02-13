const createSlice=require("@reduxjs/toolkit").createSlice;

const initialState={
    num:20
}

const iceCreamSlice=createSlice({
    name:'iceCream',
    initialState,
    reducers:{
           ordered:(state,action)=>{
            state.num-=action.payload;
           },
           restocked:(state,action)=>{
            state.num+=action.payload;

           }
    }
})

module.exports=iceCreamSlice.reducer;
module.exports.iceCreamActions=iceCreamSlice.actions;
