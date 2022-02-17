import styles from './Kitchen.module.scss';
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Checkbox, FormControlLabel } from '@material-ui/core';

const orderContent = [
  {id: '1', table: 1, status: 'ready', order: 987},
  {id: '2', table: 2, status: 'not ready', order: null},
  {id: '3', table: 3, status: 'ready', order: 654},
];

const renderActions = status => {
  switch (status) {
    case 'ready':
      return (
        <FormControlLabel control={<Checkbox checked={true} name="checkR" />} label="ready" />
      );
    case 'not ready':
      return (
        <FormControlLabel control={<Checkbox checked={false} name="checkNR" />} label="not ready" />
      );
    default:
      return null;
  }
};

const Kitchen = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Order number</TableCell>
          <TableCell>Details</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {orderContent.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>
              {row.status}
            </TableCell>
            <TableCell>
              {row.order}
            </TableCell>
            <TableCell>
              {row.details}
            </TableCell>
            <TableCell>
              {renderActions(row.status)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);


export default Kitchen;

