const initialState = {
    invoiceNo: 0,
    date: {
        day: 1,
        month: 1,
        year: 2021,
    },
    toAddress: "",
    toPrint: false,
    billingList: []
}

export const invoiceReducer = (state = initialState, action) => {
    switch(action.type) {
        case "CHANGE_DATE":
            console.log(action.day, "." ,action.month, ".", action.year);
            return {...state, date: {
                day: action.day,
                month: action.month,
                year: action.year,
            }}
        
            case "CHANGE_INVOICE_NO":
                console.log(action.invoiceNo);
                return {...state, invoiceNo: action.invoiceNo}

            case "CHANGE_NAME":
                console.log(action.firmName)
                return {...state, firmName: action.firmName}
            
            case "CHANGE_ADDRESS":
                console.log(action.toAddress);
                return {...state, toAddress: action.toAddress}

            case "PRINT":
                // console.log(state.toPrint);
                return {...state, toPrint: !state.toPrint}
            
            case "UPDATE_BILLING_LIST":
                return {...state, billingList: action.billingList}
        default:
            return state
    }
}