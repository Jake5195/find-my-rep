import { Representative } from '../../models/representative.model';
import {
	CLEAR_REDUCER,
	CLEAR_SELECTED_REPRESENTATIVE,
	GET_REPRESENTATIVES_BY_STATE_FAILURE,
	GET_REPRESENTATIVES_BY_STATE_REQUEST,
	GET_REPRESENTATIVES_BY_STATE_SUCCESS,
	GET_SENATORS_BY_STATE_FAILURE,
	GET_SENATORS_BY_STATE_REQUEST,
	GET_SENATORS_BY_STATE_SUCCESS,
	SET_SELECTED_REPRESENTATIVE,
} from '../action-creators/representatives';
import { Action } from './index';

export interface RepresentativeStore {
	results?: Representative[];
	candidateType?: string;
	loading?: boolean;
	selectedRepresentative?: Representative;
}

const initialState: RepresentativeStore = {
	results: undefined,
	candidateType: undefined,
	loading: false,
	selectedRepresentative: undefined,
};

const RepresentativeReducer = (state = initialState, action: Action): RepresentativeStore => {
	const { type, payload } = action;

	switch (type) {
		case GET_REPRESENTATIVES_BY_STATE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case GET_REPRESENTATIVES_BY_STATE_SUCCESS:
			return {
				...state,
				results: payload.response.results,
				candidateType: 'Representative',
				loading: false,
			};
		case GET_REPRESENTATIVES_BY_STATE_FAILURE:
			return {
				...state,
				loading: false,
			};
		case GET_SENATORS_BY_STATE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case GET_SENATORS_BY_STATE_SUCCESS:
			return {
				...state,
				results: payload.response.results,
				candidateType: 'Senator',
				loading: false,
			};
		case GET_SENATORS_BY_STATE_FAILURE:
			return {
				...state,
				loading: false,
			};
		case CLEAR_REDUCER:
			return {
				...state,
				results: undefined,
				candidateType: undefined,
				selectedRepresentative: undefined,
			};
		case CLEAR_SELECTED_REPRESENTATIVE:
			return {
				...state,
				selectedRepresentative: undefined,
			};
		case SET_SELECTED_REPRESENTATIVE:
			return {
				...state,
				selectedRepresentative: payload.representative,
			};
		default:
			return state;
	}
};

export default RepresentativeReducer;
