import data from './data.json';
interface responseType {
	status: number;
	body: Job[];
}
export const get = async (): Promise<responseType> => {
	const response = {
		status: 200,
		body: data
	};

	return response;
};
