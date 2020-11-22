/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

export default function BasicTable(props) {
	const classes = useStyles();

	const { row } = props;

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableBody>
					<TableRow key={1}>
						<TableCell component="th" scope="row">
							Value To The Pool
						</TableCell>
						<TableCell align="right">{row.valueToThePool}</TableCell>
					</TableRow>
					<TableRow key={2}>
						<TableCell component="th" scope="row">
							Value For Exchange
						</TableCell>
						<TableCell align="right">{row.valueForExchange}</TableCell>
					</TableRow>
					<TableRow key={3}>
						<TableCell component="th" scope="row">
							Pending Exchange Money
						</TableCell>
						<TableCell align="right">
							{row.pendingExchangeMoney}
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
}
