import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useSelector } from 'react-redux';
const columns = [
  { field: 'id', headerName: 'InvoiceNo', width: 120},
  { field: 'FirmName', headerName: 'Firm Name', width: 500 },
  {
    field: 'date',
    headerName: 'Date',
    width: 250,
  },
];


export default function CreateTable() {
  const billDetails = useSelector(state => state.cloud)
  const createRows = (billDetails) => {
    let rows = []
    for(let i  = 0; i < billDetails.length; i++) {
      rows.push({
        id: billDetails[i].invoiceNo,
        FirmName: billDetails[i].firmName,  
        date: billDetails[i].date,
      })
    }
    return rows
  }

  let rows = createRows(billDetails)
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
