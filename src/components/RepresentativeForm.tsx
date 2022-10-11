import { Box, Paper } from '@mui/material';
import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearReducer } from '../store/action-creators/representatives';
import { tryGetRepresentativesByState, tryGetSenatorsByState } from '../store/actions/representatives';
import { stateCodes } from '../utils/stateCodes';
import RequiredSelect from './forms/RequiredSelect';
import SubmitButton from './forms/SubmitButton';

interface initialFormValues {
	type: string;
	stateCode: string;
}

const RepresentativeForm = () => {
	const dispatch = useDispatch<any>();
	return (
		<Paper elevation={3}>
			<Box p={2}>
				<Formik
					initialValues={
						{
							type: '',
							stateCode: '',
						} as initialFormValues
					}
					onSubmit={(values, { setSubmitting }) => {
						dispatch(clearReducer());
						values.type === 'Representative' ? dispatch(tryGetRepresentativesByState(values.stateCode)) : dispatch(tryGetSenatorsByState(values.stateCode));
						setSubmitting(false);
					}}
				>
					{({ values, handleChange, handleSubmit, setFieldValue, isSubmitting, handleReset, errors, touched, isValidating }) => (
						<Form>
							<RequiredSelect
								BoxProps={{ my: 2 }}
								size='small'
								fullWidth
								name='type'
								value={values.type}
								variant='outlined'
								label='Representative'
								required
								onChange={(value: string) => {
									setFieldValue('representative', value);
								}}
								options={[
									{ text: '', value: '' },
									{ text: 'Representative', value: 'Representative' },
									{ text: 'Senator', value: 'Senator' },
								]}
							/>
							<RequiredSelect
								BoxProps={{ my: 2 }}
								size='small'
								fullWidth
								name='stateCode'
								value={values.stateCode}
								variant='outlined'
								label='State'
								required
								onChange={(value: string) => {
									setFieldValue('stateCode', value);
								}}
								options={[{ text: '', value: '' }, ...stateCodes.map((sc) => ({ text: sc.name, value: sc.abbreviation }))]}
							/>

							<SubmitButton variant='contained' isSubmitting={isSubmitting} fullWidth color='primary' onClick={() => handleSubmit()} text='Search' />
						</Form>
					)}
				</Formik>
			</Box>
		</Paper>
	);
};

export default RepresentativeForm;
