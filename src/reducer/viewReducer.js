const initialState = {
    index: 0,
}

export const viewReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INDEX_REQUESTED":
            console.log(action.index)
            return {...state, index: action.index}
    
        default:
            return state
    }
}