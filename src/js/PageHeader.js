import React, { useState } from 'react'
import Logo from "../image/Screenshot 2021-02-01 at 11.48.15 PM.png"
import "../css/invoice.css"
import { useDispatch, useSelector } from 'react-redux'
import { invoiceNoChange, onDateChange, toAddressChange, updateFirmName } from '../action/action'

function PageHeader() {
    const dispatch = useDispatch()
    const toPrint = useSelector(state => state.invoice.toPrint)
    const [firmName, setFirmName] = useState("")
    const [toAddress, setToAddress] = useState("")
    const [date, setDate] = useState("")
    const [invoiceNo, setInvoiceNo] = useState("")
    const handleHeaderClick = () => {
        dispatch(toAddressChange(toAddress))
        dispatch(onDateChange(date))
        dispatch(invoiceNoChange(invoiceNo))
        dispatch(updateFirmName(firmName))
    }
    return (
        <div>
                <div className="page_header">
                    <h1>Invoice</h1>
                    <div className ="page_header_address">
                        <p contentEditable="true" >
                            Nishanth Machines
                        </p>
                        <p contentEditable="true">
                            Proprietor: TSM Vijayakumar
                        </p>
                        <p contentEditable="true">
                            28/1, Mullai street, Lakshmi Nagar, PN road, Tirpur - 641602
                        </p>
                        <p contentEditable="true">
                            Contact No: 9842455990, 9842232990
                            LAN: 0421 - 4355590
                        </p>
                        <p contentEditable="true">
                            Email: vijaysew1@gmail.com
                        </p>
                    </div>
                    <div className ="page_header_logo">
                        <img src={Logo} className="logo" alt="logos"/>
                    </div>
                </div>
                {/* --------------to section */}
                <div className="page_middle">
                    <div className="page_middle_to">
                        <p>To:</p>
                        <div>
                        {!toPrint && <label htmlFor="">Firm Name</label>}
                        <textarea value = {firmName} onChange = {(e) => setFirmName(e.target.value)} name="" id="name" cols="30" rows="1"></textarea>
                        </div>
                        <div>
                        {!toPrint && <label htmlFor="">address</label>}
                        <textarea value = {toAddress} onChange = {(e) => setToAddress(e.target.value)} name="" id="to_address" cols="30" rows="6"></textarea>
                        </div>
                    </div>
                    <div className="page_middle_date">   
                        <p>Invoice No:</p>
                        <input type="text" value={invoiceNo} onChange={e => setInvoiceNo(e.target.value)}  />
                        <p>Date:</p>
                        <input type="text" value={date} onChange={e => setDate(e.target.value)}  />
                        {!toPrint && <button onClick = {handleHeaderClick}>submit</button>}
                    </div>
                </div>
        </div>
    )
}

export default PageHeader
