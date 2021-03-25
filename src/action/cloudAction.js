export const toUpdateBill = (bill) => {
    return {
        type: "UPDATE_BILL_DETAILS",
        bill: bill,
    }
}