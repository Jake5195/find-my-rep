import { Representative } from '../../models/representative.model';
import { HttpGetResponse } from '../../http/http';

export const GET_REPRESENTATIVES_BY_STATE_REQUEST = 'GET_REPRESENTATIVES_BY_STATE_REQUEST';
export const getRepresentativesByStateRequest = () => ({
	type: GET_REPRESENTATIVES_BY_STATE_REQUEST,
});

export const GET_REPRESENTATIVES_BY_STATE_SUCCESS = 'GET_REPRESENTATIVES_BY_STATE_SUCCESS';
export const getRepresentativesByStateSuccess = (response: HttpGetResponse<Representative>) => ({
	type: GET_REPRESENTATIVES_BY_STATE_SUCCESS,
	payload: { response },
});

export const GET_REPRESENTATIVES_BY_STATE_FAILURE = 'GET_REPRESENTATIVES_BY_STATE_FAILURE';
export const getRepresentativesByStateFailure = () => ({
	type: GET_REPRESENTATIVES_BY_STATE_FAILURE,
});

export const GET_SENATORS_BY_STATE_REQUEST = 'GET_SENATORS_BY_STATE_REQUEST';
export const getSenatorsByStateRequest = () => ({
	type: GET_SENATORS_BY_STATE_REQUEST,
});

export const GET_SENATORS_BY_STATE_SUCCESS = 'GET_SENATORS_BY_STATE_SUCCESS';
export const getSenatorsByStateSuccess = (response: HttpGetResponse<Representative>) => ({
	type: GET_SENATORS_BY_STATE_SUCCESS,
	payload: { response },
});

export const GET_SENATORS_BY_STATE_FAILURE = 'GET_SENATORS_BY_STATE_FAILURE';
export const getSenatorsByStateFailure = () => ({
	type: GET_SENATORS_BY_STATE_FAILURE,
});

export const CLEAR_REDUCER = 'CLEAR_REDUCER';
export const clearReducer = () => ({ type: CLEAR_REDUCER });

export const CLEAR_SELECTED_REPRESENTATIVE = 'CLEAR_SELECTED_REPRESENTATIVE';
export const clearSelectedRepresentative = () => ({ type: CLEAR_SELECTED_REPRESENTATIVE });

export const SET_SELECTED_REPRESENTATIVE = 'SET_SELECTED_REPRESENTATIVE';
export const setSelectedRepresentative = (representative: Representative) => ({
	type: SET_SELECTED_REPRESENTATIVE,
	payload: { representative },
});
