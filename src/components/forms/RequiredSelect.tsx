import { Box, BoxProps, FormControl, InputLabel, Select, SelectProps, Typography } from '@mui/material';
import { Field, FieldAttributes, useFormikContext } from 'formik';
import React from 'react';

interface RequiredSelectProps {
	name: string;
	label: string;
	options: SelectOption[];
	onChange: (value: string) => void;
	BoxProps: BoxProps;
	SelectProps: SelectProps;
	rest: any;
}

export interface SelectOption {
	text: string;
	value: string;
}

const RequiredSelect = ({ name, label, options, onChange, BoxProps, SelectProps, ...rest }: RequiredSelectProps & FieldAttributes<any>) => {
	const validate = (value: any) => {
		let error;
		if (!value) {
			error = `${label} is required.`;
		}
		return error;
	};

	const { errors, touched, values, setFieldValue } = useFormikContext();

	return (
		<Box {...BoxProps}>
			<FormControl required {...rest} error={!!(errors[name as keyof typeof values] && touched[name as keyof typeof values])}>
				<InputLabel>{label}</InputLabel>
				<Field
					validate={validate}
					as={Select}
					native
					label={label}
					name={name}
					onChange={(
						event: React.ChangeEvent<{
							name?: string | undefined;
							value: unknown;
						}>
					) => {
						setFieldValue(name, event.target.value);
						onChange && onChange(event.target.value);
					}}
				>
					{options.map((o: SelectOption) => {
						return (
							<option value={o.value as string} key={o.value as string}>
								{o.text}
							</option>
						);
					})}
				</Field>
			</FormControl>
			{errors[name as keyof typeof values] && touched[name as keyof typeof values] && <Typography color='secondary'>{errors[name as keyof typeof values]}</Typography>}
		</Box>
	);
};

export default RequiredSelect;
