import { Representative } from '../models/representative.model';
import { http, HttpGetResponse } from '../http/http';

export const getRepresentativesByState = async (stateCode: string): Promise<HttpGetResponse<Representative>> => {
	const { data: response } = await http.get<HttpGetResponse<Representative>>(`representatives/${stateCode}`);
	return response;
};

export const getSenatorsByState = async (stateCode: string): Promise<HttpGetResponse<Representative>> => {
	const { data: response } = await http.get<HttpGetResponse<Representative>>(`senators/${stateCode}`);
	return response;
};
