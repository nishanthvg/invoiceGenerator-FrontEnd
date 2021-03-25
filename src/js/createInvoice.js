import React from 'react'
import "../css/invoice.css"
import BillingTable from './BillingTable'
import PageHeader from "./PageHeader"

function createInvoice() {
    return (
        <div className ="page" >
            <PageHeader />
            <BillingTable />
        </div>
    )
}

export default createInvoice 
