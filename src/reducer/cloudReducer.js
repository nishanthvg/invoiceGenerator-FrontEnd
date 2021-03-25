const intialState = []

export const cloudReducer = (state = intialState, action) => {

    switch(action.type) {
        case "UPDATE_BILL_DETAILS":
            console.log("Action proper");
            console.log(action.bill);
            let temp = 1;
            state.forEach((val) =>{
                if(val.invoiceNo === action.bill.invoiceNo){
                    temp = 0
                }
            })
            if(temp === 1){
                return [...state, action.bill]        
            } else {
                return state
            }

        default:
            return state
    }
}