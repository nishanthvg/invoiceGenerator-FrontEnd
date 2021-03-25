import React, { useState } from 'react'
import CreateTable from './CreateTable'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateViewIndex } from '../../action/viewAction';

const PreviousInvoice = () => {
    const [viewIndex, setViewIndex] = useState(0)
    const dispatch = useDispatch()
    const handleViewButton = () => {
        dispatch(updateViewIndex(viewIndex))
    }
    return (
        <div className = "">
            < CreateTable />
            <label htmlFor="">Enter the index to be viewed: </label>
            <input type="text"value={viewIndex} onChange={e => setViewIndex(e.target.value)}/>
            <Button component={Link} to="/viewInvoice" color="primary" onClick = {handleViewButton}>View</Button>
        </div>
    )
}

export default PreviousInvoice
