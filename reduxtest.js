const { createStore} = require ('redux');

const initialState = {
    age: 21
}

const myReducer = (state = initialState, action) => {
    const newState = {...state};

    if(action.type === 'ADD'){
        newState.age += 1;

    }
    if (action.type === 'SUBSTRACT'){
        newState.age -= 1;
    }

    return newState;

} 

const store = createStore(myReducer);

store.subscribe(()=> {
    console.log('state changed' + JSON.stringify(store.getState()));
})

store.dispatch({type: 'ADD'});
// console.log(JSON.stringify(store.getState()));
store.dispatch({type: 'SUBSTRACT'})
// console.log('after subs' + JSON.stringify(store.getState()));

