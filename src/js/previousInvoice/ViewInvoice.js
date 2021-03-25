import React from 'react'
import ViewHeader from './ViewHeader'
import ViewTable from './ViewTable'

const viewInvoice = () => {
    return (
        <div className ="page" >
            <ViewHeader />
            <ViewTable />
        </div>
    )
}

export default viewInvoice
