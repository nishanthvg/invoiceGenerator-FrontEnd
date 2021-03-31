

export const toUpdateBill = (bill) => {
    return {
        type: "UPDATE_BILL_DETAILS",
        bill: bill,
    }
}
// await Axios.post('http://localhost:2000/', {
//             bill: bill
//           })
//           .then(function (response) {
//             console.log(response);
//           })
//           .catch(function (error) {
//             console.log(error);
//           });