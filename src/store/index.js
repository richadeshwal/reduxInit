import { createStore } from 'redux';

const initialState = {
    count: 0,
    inputValue: '',
    repos: [],
    searchInputValue: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT': return Object.assign({}, state, { count: state.count + 1 })
        case 'DECREMENT': return Object.assign({}, state, { count: state.count - 1 })
        case 'INPUTCHANGE': return Object.assign({}, state, { inputValue: action.text })
        case 'REPOSEARCH': return Object.assign({}, state, { searchInputValue: action.value })
        case 'SET_REPO': return Object.assign({}, state, { repos: action.repos })
        default: return state
    }
}

const store = createStore(reducer);

export default store;