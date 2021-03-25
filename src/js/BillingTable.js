import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';
import { PrintButton } from './PrintButton';

const TAX_RATE = 0.12;

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}




export default function BillingTable() {
  const classes = useStyles();
  const [decs, setDecs] = useState()
  const [price, setPrice] = useState(0)
  const [qty, setQty] = useState(0)
  const [rows, setRows] = useState([])
  const [deleteIndex, setDeleteIndex] = useState(0)
  const toPrint = useSelector(state => state.invoice.toPrint)

  const handleAddClick = () => {
    setRows([...rows,createRow(decs, qty, price)])
  }

  const handleDeleteClick = () => {
    let toBeDeleted = rows[deleteIndex - 1]
    setRows(rows.filter(item => item !== toBeDeleted))
  }

  const invoiceSubtotal = subtotal(rows);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;

  return (
    <div>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell>Desc</TableCell>
            <TableCell align="right">Qty.</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Sum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.desc}>
              <TableCell>{row.desc}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.unit}</TableCell>
              <TableCell align="right">{ccyFormat(row.price)}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    {!toPrint && <div>
      <div>
      <label htmlFor="">Description</label>
      <input type="text" value={decs} onChange={e => setDecs(e.target.value)} />
      <label htmlFor="">Qty</label>
      <input type="text" value={qty} onChange={e => setQty(e.target.value)} />
      <label htmlFor="">Price</label>
      <input type="text" value={price} onChange={e => setPrice(e.target.value)} />
      <button onClick = {handleAddClick}>Add</button>
    </div>
    <div>
      <label htmlFor="">Enter index to be deleted</label>
      <input type="text" value={deleteIndex} onChange={e => setDeleteIndex(e.target.value)} /> 
      <button onClick= {handleDeleteClick} >Delete index</button>
    </div>
    </div>}
    <PrintButton billingList = {rows} />
    </div>
  );
}
