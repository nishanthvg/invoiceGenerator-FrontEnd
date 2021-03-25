import React, {useState} from 'react'
import Logo from "../../image/Screenshot 2021-02-01 at 11.48.15 PM.png"
import "../../css/invoice.css"
import { useSelector } from 'react-redux'

const ViewHeader = () => {
    let index = 0;
    const indexRequested = useSelector(state => state.view)
    const billdetails = useSelector(state => state.cloud)
    //needed for selecting the bill requested 
    for(let i = 0; i < billdetails.length; i++) {
        if(parseInt(billdetails[i].invoiceNo) === parseInt(indexRequested.index)){
            console.log("achieved")
            index = i
        }
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
                        <p>{`To: ${billdetails[index].firmName}`}</p>
                        <div>
                        <p>{billdetails[index].address}</p>
                        </div>
                    </div>
                    <div className="page_middle_date">   
                        <p>{`Invoice No: ${billdetails[index].invoiceNo}`}</p>
                        <p>{`Date: ${billdetails[index].date}`}</p>
                    </div>
                </div>
        </div>
    )
}

export default ViewHeader
