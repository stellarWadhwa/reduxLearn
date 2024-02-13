const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState={
    num:10
}

const cakeSlice = createSlice({
    name:'cake',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.num --;
        },
        restocked:(state,action)=>{
            state.num +=action.payload
        }
    }
})


module.exports=cakeSlice.reducer;
module.exports.cakeActions=cakeSlice.actions;