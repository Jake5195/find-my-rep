import { SnackbarKey } from 'notistack';
import { Snackbar } from '../../models/snackbar';
import { Action } from '../reducers';

export const ENQUEUE_SNACKBAR = 'ENQUEUE_SNACKBAR';
export const enqueueSnackbar = (snackbar: Snackbar): Action => ({
    type: ENQUEUE_SNACKBAR,
    payload: snackbar,
});

export const REMOVE_SNACKBAR = 'REMOVE_SNACKBAR';
export const removeSnackbar = (key: SnackbarKey): Action => ({
    type: REMOVE_SNACKBAR,
    payload: key,
});
