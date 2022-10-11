import { getRepresentativesByStateFailure, getRepresentativesByStateRequest, getRepresentativesByStateSuccess, getSenatorsByStateFailure, getSenatorsByStateRequest, getSenatorsByStateSuccess } from '../action-creators/representatives';
import * as representativeService from '../../services/representativeService';
import { enqueueSnackbar } from '../action-creators/snackbar';
import { DismissibleSnackbar, SnackbarType } from '../../models/snackbar';
import { Dispatch } from 'redux';

export const tryGetRepresentativesByState =
	(stateCode: string) =>
	async (dispatch: Dispatch): Promise<void> => {
		try {
			dispatch(getRepresentativesByStateRequest());
			const response = await representativeService.getRepresentativesByState(stateCode);
			dispatch(getRepresentativesByStateSuccess(response));
		} catch (err) {
			dispatch(getRepresentativesByStateFailure());
			dispatch(enqueueSnackbar(new DismissibleSnackbar('Could not get Representatives', SnackbarType.Error)));
		}
	};

export const tryGetSenatorsByState =
	(stateCode: string) =>
	async (dispatch: Dispatch): Promise<void> => {
		try {
			dispatch(getSenatorsByStateRequest());
			const response = await representativeService.getSenatorsByState(stateCode);
			dispatch(getSenatorsByStateSuccess(response));
		} catch (err) {
			dispatch(getSenatorsByStateFailure());
			dispatch(enqueueSnackbar(new DismissibleSnackbar('Could not get Representatives', SnackbarType.Error)));
		}
	};
