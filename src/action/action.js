export const onDateChange = (date) => {
    let [day, month, year] = date.split('.')
    return {
        type: "CHANGE_DATE",
        day: parseInt(day),
        month: parseInt(month),
        year: parseInt(year)
    }
}

export const invoiceNoChange = (invoiceNo) => {
    return {
        type: "CHANGE_INVOICE_NO",
        invoiceNo: parseInt(invoiceNo)
    }
}

export const toAddressChange = (address) => {
    return {
        type: "CHANGE_ADDRESS",
        toAddress: address
    }
}

export const toPrint = () => {
    return {
        type: "PRINT",
    }
}

export const toUpdateBillingList = (rows) => {
    return {
        type: "UPDATE_BILLING_LIST",
        billingList: rows
    }
}



export const updateFirmName = (firmName) => {
    return {
        type: "CHANGE_NAME",
        firmName: firmName
    }
}

// export const resetTheInvoice = () => {
//     return {
//         type: "RESET",
//     }
// }