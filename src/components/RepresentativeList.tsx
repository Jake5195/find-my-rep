import { Box, Button, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Representative } from '../models/representative.model';
import { clearSelectedRepresentative, setSelectedRepresentative } from '../store/action-creators/representatives';
import { RootState } from '../store/reducers';
import { RepresentativeStore } from '../store/reducers/representatives';

export const RepresentativeList = () => {
	const { candidateType, results, selectedRepresentative }: RepresentativeStore = useSelector(({ representatives }: RootState) => representatives);
	const dispatch = useDispatch<any>();

	useEffect(() => {}, [selectedRepresentative]);

	if (!candidateType || !results) return null;
	return (
		<Box>
			<Paper elevation={3}>
				<Box p={2}>
					<Typography variant='h6'>{`My ${candidateType}s`}</Typography>
					<Divider />
					<Box my={2}>
						<TableContainer component={Paper}>
							<Table sx={{ minWidth: 650 }}>
								<TableHead>
									<TableRow>
										<TableCell>Name</TableCell>
										<TableCell>Party</TableCell>
										<TableCell></TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{results.map((row: Representative) => (
										<TableRow>
											<TableCell>{row.name}</TableCell>
											<TableCell>{row.party}</TableCell>
											<TableCell>
												<Button
													variant='contained'
													size='small'
													onClick={() => {
														dispatch(clearSelectedRepresentative());
														dispatch(setSelectedRepresentative(row));
													}}
												>
													<Typography>View Info</Typography>
												</Button>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</Box>
				</Box>
			</Paper>
		</Box>
	);
};
