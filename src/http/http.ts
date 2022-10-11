// import * as environment from '../environments.json';
import axios, { AxiosError } from 'axios';
import environment from '../environments.json';

const defaultOptions = {
	baseURL: environment.apiBaseUrl,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Headers': '*',
	},
};

export const http = axios.create(defaultOptions);

export interface HttpGetResponse<T> {
	success: boolean;
	results: T[];
}
