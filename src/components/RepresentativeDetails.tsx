import { Paper, Box, Typography, Divider, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { RepresentativeStore } from '../store/reducers/representatives';

const RepresentativeDetails = () => {
	const { candidateType, selectedRepresentative }: RepresentativeStore = useSelector(({ representatives }: RootState) => representatives);

	useEffect(() => {
		console.log(selectedRepresentative);
	}, [selectedRepresentative]);

	if (!candidateType || !selectedRepresentative) return null;
	return (
		<Box>
			<Paper elevation={3}>
				<Box p={2}>
					<Typography variant='h6'>{`${candidateType}'s Information`}</Typography>
					<Divider />
					<Box my={2} display='flex' flexDirection='column'>
						<TextField sx={{ marginBottom: 2 }} value={selectedRepresentative.name} label='Name' disabled />
						<TextField sx={{ marginBottom: 2 }} value={selectedRepresentative.district} label='District' disabled />
						<TextField sx={{ marginBottom: 2 }} value={selectedRepresentative.office} label='Office' disabled />
						<TextField sx={{ marginBottom: 2 }} value={selectedRepresentative.phone} label='Phone' disabled />
						<TextField sx={{ marginBottom: 2 }} value={selectedRepresentative.party} label='Party' disabled />
						<TextField sx={{ marginBottom: 2 }} value={selectedRepresentative.link} label='Link' disabled />
					</Box>
				</Box>
			</Paper>
		</Box>
	);
};

export default RepresentativeDetails;
