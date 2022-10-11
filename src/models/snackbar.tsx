import React, { MouseEventHandler, ReactNode } from 'react';
import { Button, IconButton } from '@mui/material';
import { OptionsObject, SnackbarKey } from 'notistack';
import CloseIcon from '@mui/icons-material/Close';
import { removeSnackbar } from '../store/action-creators/snackbar';
import store from '../store';

export enum SnackbarType {
    Default = 'default',
    Error = 'error',
    Success = 'success',
    Warning = 'warning',
    Info = 'info',
}

export interface OnResultSnackbarMessages {
    onSuccess?: string;
    onFailure?: string;
}

export interface SnackbarOptions extends OptionsObject {
    dismissed: boolean;
}

export class Snackbar {
    message: ReactNode;
    options: SnackbarOptions;

    constructor(message: ReactNode, variant: SnackbarType) {
        this.message = message;
        this.options = {
            key: new Date().getTime() + Math.random(),
            variant,
        } as SnackbarOptions;
    }
}

export class ActionableSnackbar extends Snackbar {
    constructor(
        message: ReactNode,
        variant: SnackbarType,
        dismissButtonText: string,
        onClick: MouseEventHandler,
        options: OptionsObject
    ) {
        super(message, variant);
        this.options = {
            ...this.options,
            ...options,
            action: (key: SnackbarKey) => (
                <Button onClick={onClick}>{dismissButtonText}</Button>
            ),
        } as SnackbarOptions;
    }
}

export class DismissibleSnackbar extends Snackbar {
    constructor(message: ReactNode, variant: SnackbarType) {
        super(message, variant);
        this.options = {
            ...this.options,
            action: (key: SnackbarKey) => (
                <IconButton
                    size="small"
                    onClick={() => store.dispatch(removeSnackbar(key))}
                >
                    <CloseIcon style={{ color: 'white' }} />
                </IconButton>
            ),
        } as SnackbarOptions;
    }
}
