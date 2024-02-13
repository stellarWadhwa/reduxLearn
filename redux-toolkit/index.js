const store = require("./app/store")
const { iceCreamActions } = require("./features/icecream/iceCreamSlice")
const cakeActions = require('./features/cake/cakeSlice').cakeActions

console.log(store.getState())
const unsuscribe = store.subscribe(()=>{
    console.log(store.getState())
})


store.dispatch(cakeActions.ordered());
store.dispatch(iceCreamActions.ordered(3));
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(iceCreamActions.restocked(5));
store.dispatch(cakeActions.restocked(5));

unsuscribe();