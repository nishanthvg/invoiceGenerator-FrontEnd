import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toPrint, toUpdateBillingList } from '../action/action'
import { toUpdateBill } from '../action/cloudAction'

export const PrintButton = ({billingList}) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.invoice)
    const HandlePrintButton = async () => {
        dispatch(toPrint())
        handleUpdateList()
        updateViewInvoiceList()
    }
    const handleUpdateList = () => {

        dispatch(toUpdateBillingList(billingList))
    }


    //FOR VIEW PAGE 
    const updateViewInvoiceList = () => {
        const object = createBillObject()
        dispatch(toUpdateBill(object))
    }
    /*---*/
    const createBillObject = () => {
        const object = {
            invoiceNo: state.invoiceNo,
            firmName: state.firmName,
            date: `${state.date.day}.${state.date.month}.${state.date.year}`,
            address: state.toAddress,
            billingList: billingList
        }
        return object
    }
    return (
        <div>
            <button onClick = {HandlePrintButton}>Create</button>
        </div>
    )
}
