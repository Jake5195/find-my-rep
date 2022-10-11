import { Box, BoxProps, Typography } from '@mui/material';
import { FieldAttributes, Field, useFormikContext } from 'formik';
import React from 'react';

interface RequiredFieldProps {
    name: string;
    label: string;
    rest: any;
    BoxProps: BoxProps;
    variant: string;
}
const RequiredField = ({
    name,
    label,
    BoxProps,
    ...rest
}: RequiredFieldProps & FieldAttributes<any>) => {
    const validate = (value: any) => {
        let error;
        if (!value) {
            error = `${label} is required.`;
        }
        return error;
    };
    const { errors, touched, values } = useFormikContext();

    return (
        <>
            <Box {...BoxProps}>
                <Field
                    name={name}
                    label={label}
                    validate={validate}
                    error={
                        !!(
                            errors[name as keyof typeof values] &&
                            touched[name as keyof typeof values]
                        )
                    }
                    {...rest}
                />
                {errors[name as keyof typeof values] &&
                    touched[name as keyof typeof values] && (
                        <Typography color="secondary">
                            {errors[name as keyof typeof values]}
                        </Typography>
                    )}
            </Box>
        </>
    );
};

export default RequiredField;
