import React, {useEffect} from 'react'
import "../css/invoice.css"
import BillingTable from './BillingTable'
import PageHeader from "./PageHeader"

function CreateInvoice() {
    return (
        <div className ="page" >
            <PageHeader />
            <BillingTable />
        </div>
    )
}

export default CreateInvoice 
