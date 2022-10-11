import React, { ReactNode } from 'react';
import { Button, ButtonProps, CircularProgress } from '@mui/material';

interface SubmitButtonProps extends ButtonProps {
    isSubmitting: boolean;
    onClick: () => void;
    text: string;
}

const SubmitButton = ({
    isSubmitting,
    onClick,
    text,
    ...rest
}: SubmitButtonProps) => {
    const getButtonValue = (): ReactNode => {
        if (isSubmitting) return <CircularProgress color="primary" size={24} />;
        else return text;
    };
    return (
        <Button disabled={isSubmitting} onClick={onClick} {...rest}>
            {getButtonValue()}
        </Button>
    );
};

export default SubmitButton;
